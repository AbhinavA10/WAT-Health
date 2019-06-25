<template>
  <div id="page-top" style="font-family: 'Permanent Marker', cursive">
    <nav class="navbar navbar-expand navbar-dark bg-dark static-top">

      <button class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
        <i><img src="../assets/img-01.png" style="width:35px;height:35px;"></i>
        <a class="navbar-brand mr-1" href="#" v-on:click="$router.push('../dashboard/' + id)">WATHealth</a>
      </button>
      <!-- Navbar Search -->
      <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search" aria-label="Search"
                 aria-describedby="basic-addon2">
          <div class="input-group-append">
            <button class="btn btn-primary" type="button">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>

      <!-- Navbar -->
      <ul class="navbar-nav navbar-right ml-auto ml-md-0">
        <li class="nav-item dropdown no-arrow">
          <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-user-circle fa-fw"></i>
          </a>
        </li>
        <li class="nav-item dropdown no-arrow">
          <a class="nav-link dropdown-toggle" href="#" role="button" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-sign-out-alt"></i>
          </a>
        </li>
      </ul>

    </nav>

    <div id="wrapper">

      <!-- Sidebar -->
      <ul class="sidebar navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-fw fa-exclamation-circle"></i>
            <span>Resources</span>
          </a>
          <div class="dropdown-menu" aria-labelledby="pagesDropdown">
            <h6 class="dropdown-header">Helplines</h6>
            <a class="dropdown-item" href="https://ontario.cmha.ca/documents/are-you-in-crisis/" target="_blank">CMHA
              Ontario</a>
            <a class="dropdown-item" href="https://uwaterloo.ca/campus-wellness/health-services" target="_blank">UW
              Health Services</a>
            <a class="dropdown-item" href="https://uwaterloo.ca/campus-wellness/counselling-services" target="_blank">UW
              Counselling</a>
            <div class="dropdown-divider"></div>
            <h6 class="dropdown-header">More Resources</h6>
            <a class="dropdown-item" href="https://www.mentalhealthcommission.ca/English/resources" target="_blank">Mental
              Health 🍁</a>
            <a class="dropdown-item active" href="https://www.healthlinkbc.ca/mental-health-substance-use/resources">Other
              Resources</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click="$router.push('../Newsfeed/' + id)">
            <i class="fas fa-fw fa-question"></i>
            <span>Questions</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fas fa-fw fa-phone"></i>
            <span> Contact Us</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fas fa-fw fa-stethoscope"></i>
            <span> Contact a professional</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click="$router.push('../buddy/' + id)">
            <i class="fas fa-user-friends"></i>
            <span> Get a buddy</span></a>
        </li>
      </ul>
      <div class="container-fluid">
        <Ask style="padding-top: 50px"></Ask>
        <div class="row">
          <Post v-for="post in posts" v-bind:data="post" class="col"></Post>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Ask from './Ask'
  import Post from './Post'
  import firebase from 'firebase'

  export default {

    name: "Newsfeed",
    components: {
      Ask,
      Post
    },
    created() {
      this.id = this.$route.params.id;
      let db = firebase.firestore();
      db.collection("Posts").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          let allData = doc.data();
          this.posts.push({
            title: allData.Title,
            body: allData.comment,
            id: allData.user
          })
        });
      }).catch(error => {
        console.log(error);
      });
    },
    data() {
      return {
        id: "0000",
        posts: []
      }
    }
  }
</script>

<style scoped>

</style>