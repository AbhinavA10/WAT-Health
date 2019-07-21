<template>
  <div>
    <div class="form-group">
      <div class="row">
        <div class="col">
          <textarea class="form-control" placeholder="Enter Question" rows="5" v-model="content"></textarea>
          <br />
          <div class="text-center">
            <button type="button" class="btn-primary btn-lg" v-on:click="ask">Ask Now!</button>
          </div>
          <br />
          <div class="text-center">
            <button type="button" class="btn-warning btn-lg">Ask a Doctor!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
var ToneAnalyzerV3 = require("ibm-watson/tone-analyzer/v3");
var toneAnalyzer = new ToneAnalyzerV3({
  version: "2017-09-21",
  iam_apikey: "MKC6ePTUwjYpdzZzDjbtnVNdLodAgvWBUfwR3gwS3d0n",
  url: "https://gateway-wdc.watsonplatform.net/tone-analyzer/api"
});

export default {
  name: "Ask",
  created() {
    this.userID = this.$route.params.id; // get the user's firebase id from the url
  },
  data() {
    return {
      content: ""
    };
  },
  methods: {
    // The ask() function is called when the "Ask now" button is clicked to submit the text post
    ask() {
      if (this.content !== "") {
        let db = firebase.firestore();
        //db.settings({
        //timestampsInSnapshots: false
        //});
        let data = {};
        data["Title"] =
          this.content.substr(0, this.content.indexOf(" ")) || "Need help";
        data["comment"] = this.content;
        data["User"] = this.userID;
        // TODO: add post Date
        //TODO look at firebase function log errors
        console.log("received post to add to firebase");
        // add the post to firebase
        db.collection("Posts")
          .add(data)
          .then(docRef => {
            console.log("Success adding post to firebase");
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        console.log("Invalid Input");
      }
    }
  }
};
</script>

<style scoped>
</style>
