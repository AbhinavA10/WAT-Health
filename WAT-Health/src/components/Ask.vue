<template>
  <div>
    <div class="form-group">
      <div class="row">
        <div class="col">
          <textarea class="form-control" placeholder="Enter Question" rows="5" v-model="content"></textarea><br>
          <div class="text-center">
            <button type="button" class="btn-primary btn-lg" v-on:click="ask"> Ask Now!</button>
          </div>
          <br>
          <div class="text-center">
            <button type="button" class="btn-warning btn-lg"> Ask a Doctor!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: "Ask",
    data() {
      return {
        content: ""
      }
    }, methods: {
      ask() {
        if (this.content !== "") {
          let db = firebase.firestore();
          db.settings({
            timestampsInSnapshots: false
          });
          let data = {};
          data['Title'] = this.content.substr(0, this.content.indexOf(" ")) || "LOL";
          data['comment'] = this.content;
          data['User'] = Math.floor(Math.random() * 200);
          console.log(data);
          db.collection("Posts").add(data).then(docRef => {
            console.log("Successs: "  + docRef);
          }).catch(err => {
            console.log(err);
          });
        } else {
          console.log("Invalid Input");
        }
      }
    }
  }
</script>

<style scoped>

</style>
