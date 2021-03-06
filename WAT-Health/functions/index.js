//Firebase Cloud functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase DB
const admin = require('firebase-admin');
admin.initializeApp();

var ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
var toneAnalyzer = new ToneAnalyzerV3({
	version: '2017-09-21',
	iam_apikey: 'MKC6ePTUwjYpdzZzDjbtnVNdLodAgvWBUfwR3gwS3d0n',
	url: 'https://gateway-wdc.watsonplatform.net/tone-analyzer/api'
});

/**
 * Calls Watson's Tone Analyzer API to get emotions of text
 * @param {*} textToAnalyze The text to send to watson
 */
function getTones(textToAnalyze) {
	return new Promise(function (resolve, reject) {
		console.log("Tone Analyzer running inside function");
		toneAnalyzer.tone({
			tone_input: textToAnalyze,
			content_type: 'text/plain'
		}, function (err, data) {
			if (err)
				reject(err);
			else {
                /* 
                Watson API returns something like this. document_tone contains the analysis for the tones in the overall document
                {
                     "document_tone": {
                       "tones": [
                         {
                           "score": 0.624382,
                           "tone_id": "sadness",
                           "tone_name": "Sadness"
                         },
                         {
                           "score": 0.867764,
                           "tone_id": "analytical",
                           "tone_name": "Analytical"
                         }
                       ]
                     },
                     "sentences_tone": [
                       {
                         "sentence_id": 0,
                         "text": "Hi Team, The times are difficult!",
                         "tones": [
                           {
                             "score": 0.710388,
                             "tone_id": "sadness",
                             "tone_name": "Sadness"
                           }
                         ]
                }
                */
				let doc_tone = data["document_tone"]; // get only the overall paragraph data
				let tonesReturned = doc_tone["tones"]; // get the tones out of that overall data
				resolve(tonesReturned);
			}
		});
	})
}

/**
 * Uses the data returned from Watson, to create an array of the document's emotion values
 * @param {object} tonesReturned 
 * @param {Date} date 
 */
function parseWatsonResponse(tonesReturned, date) {
	let emotions = [
		"anger",
		"fear",
		"joy",
		"sadness",
		"analytical",
		"confident",
		"tentative"
	];
	let dataToReturn = {};
	dataToReturn.timestamp = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
	dataToReturn.values = [0, 0, 0, 0, 0, 0, 0];
	for (i in tonesReturned) { // looping through all objects in the tones object
		dataToReturn.values[emotions.indexOf(tonesReturned[i].tone_id)] = tonesReturned[i].score;
	};
	return dataToReturn;
}

/**
 * Firebase cloud function to update emotion data in user doc when a new post is created
 * https://firebase.google.com/docs/functions/firestore-events#trigger_a_function_when_a_new_document_is_created
 */
exports.updateEmotion = functions.firestore
	.document('/Posts/{postUUID}')
	.onCreate((snap, context) => {
		// Get an object representing the document
		// {comment: 'post details here', 'Title':'post title here', 'User':'userUUID here'}
		const newData = snap.data();

		// access a particular field as you would any JS property
		let text = newData.comment;
		let userUUID = newData.User;
		let datePosted = newData.postDate.toDate();

		// Sends data to Watson
		return getTones(text).then((watsonResult) => {
			
			let dataToAdd = parseWatsonResponse(response, datePosted);

			admin.firestore().collection("Users").doc(userUUID).collection("Emotions").add(dataToAdd)
				.then((docRef) => {
					console.log("Emotion Data from post successfully saved to firebase: " + docRef);
				}).catch(err => {
					console.log("Error setting data: " + err);
				});
		}).catch((err) => { });
	});