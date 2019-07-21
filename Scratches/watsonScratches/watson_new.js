var ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');

var toneAnalyzer = new ToneAnalyzerV3({
	version: '2017-09-21',
	iam_apikey: 'MKC6ePTUwjYpdzZzDjbtnVNdLodAgvWBUfwR3gwS3d0n',
	url: 'https://gateway-wdc.watsonplatform.net/tone-analyzer/api'
});
function getTones(textToAnalyze) {
	return new Promise(function (resolve, reject) {
		console.log("Tone Analyzer running");
		toneAnalyzer.tone({
			tone_input: textToAnalyze,
			content_type: 'text/plain'
		}, function (err, res) {
			if (err)
				reject(err);
			else {

				// console.log('RESULT FROM WATSON============');
				// console.log(JSON.stringify(res, null, 2));
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
				let doc_tone = res["document_tone"]; // get only the overall paragraph data
				let tonesReturned = doc_tone["tones"]; // get the tones out of that overall data
				resolve(tonesReturned);
			}
		});
	})
}

function useData(tonesReturned, date) {
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

var textToTry = 'Team, I know that times are tough! Product '
	+ 'sales have been disappointing for the past three '
	+ 'quarters. We have a competitive product, but we '
	+ 'need to do a better job of selling it!';

getTones(textToTry).then((response) => {
	//console.log(response);
	let parsed = useData(response, new Date(Date.now()));
	console.log(parsed);
}).catch((err) => { console.log(err) });
