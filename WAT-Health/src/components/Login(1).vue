<template>
  <div class="login container">
    <img class="mb-4" src="../assets/img-01.png" width="200" height="200">
    <form class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="email" required
             autofocus>
      <label for="inputPassword" class="sr-only" v-model="password">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" required>
      <div class="checkbox mb-3">
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="signIn">Sign in</button>
    </form>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered bd-example-modal-lg" role="document">
        <div class="modal-content modal-lg">
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col">
                  <h5>How would you describe your mood?</h5>
                </div>
              </div>

              <div class="row justify-content-md-center">
                <div class="col-md-auto" v-for="emotion in emotions">
                  <button type="button" class="btn btn-primary" v-on:click="setMood(emotion)">
                    {{emotion}}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'Login',
    data() {
      return {
        email: "",
        password: "",
        user: "",
        emotions: [
          "Angry",
          "Scared",
          "Joyful",
          "Sad",
          "Curious",
          "Confident",
          "Tentative"
        ],
        months: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ]
      }
    },
    methods: {
      signIn() {
        console.log(this.email);
        console.log(this.password);
        if (this.email !== "" && this.password !== "") {
          console.log(`Trying to sign in.`);
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
            if (user) {
              this.user = user['user'];
              $('#exampleModal').modal("toggle");
            } else {
              console.log("Not Signed In.");
            }
          }).catch(err => {
            console.log(`There was an error ${err}`);
          });
        } else {
          console.log("Invalid Input");
        }
      },
      setMood(emotion) {
        let index = this.emotions.indexOf(emotion);
        let ans = [];
        let data = {};
        if (index !== -1) {
          for (let i = 0; i < this.emotions.length; i++) {
            ans.push(0);
          }
          ans[index] = 1;
          data["values"] = ans;
          let dd = new Date();
          data["timestamp"] = dd.getDate() + '/' + this.months[dd.getMonth()] + '/' + dd.getFullYear();
          let db = firebase.firestore();
          db.settings({
            timestampsInSnapshots: true
          });
          db.collection('Users').doc(this.user.uid).collection("Emotions").add(data)
            .then((docRef) => {
              console.log("Data successfully saved to firebase: " + docRef);
              console.log(this.user.uid);
              this.$router.push(`dashboard/${this.user.uid}`);
            }).catch(err => {
            console.log("ERROR SETTING DATA: " + err);
          });
        } else {
          console.log("There was an error.");
        }
        $('#exampleModal').modal("toggle");
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  template {
    height: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
  }

  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }

  .form-signin .checkbox {
    font-weight: 400;
  }

  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }

  .form-signin .form-control:focus {
    z-index: 2;
  }

  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
