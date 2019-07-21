// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false;


// Initialize Firebase, with my own db for testing
let config = {
  apiKey: "AIzaSyDll8W-fibwM_jClufRiqCsRlGeA7Dl9pw",
  authDomain: "wat-health.firebaseapp.com",
  databaseURL: "https://wat-health.firebaseio.com",
  projectId: "wat-health",
  storageBucket: "wat-health.appspot.com",
  messagingSenderId: "423883429632",
  appId: "1:423883429632:web:995d41f227e30a8a"
};
firebase.initializeApp(config);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
