<template>
  <div id="page-top" style="font-family: 'Permanent Marker', cursive">
  <nav class="navbar navbar-expand navbar-dark bg-dark static-top">
    <button class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
      <i><img alt = "user" src="../assets/img-01.png" style="width:35px;height:35px;"></i>
        <a class="navbar-brand mr-1" v-on:click="$router.push('../dashboard/' + id)">WATHealth</a>
      </button>
      <!-- Navbar Search -->
      <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2">
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
          <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
        <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-fw fa-exclamation-circle"></i>
          <span>Resources</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="pagesDropdown">
          <h6 class="dropdown-header">Helplines</h6>
          <a class="dropdown-item" href="https://ontario.cmha.ca/documents/are-you-in-crisis/" target="_blank">CMHA Ontario</a>
          <a class="dropdown-item" href="https://uwaterloo.ca/campus-wellness/health-services" target="_blank">UW Health Services</a>
          <a class="dropdown-item" href="https://uwaterloo.ca/campus-wellness/counselling-services" target="_blank">UW Counselling</a>
          <div class="dropdown-divider"></div>
          <h6 class="dropdown-header">More Resources</h6>
          <a class="dropdown-item" href="https://www.mentalhealthcommission.ca/English/resources" target="_blank">Mental Health 🍁</a>
          <a class="dropdown-item active" href="https://www.healthlinkbc.ca/mental-health-substance-use/resources">Other Resources</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
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
      </li><li class="nav-item">
      <a class="nav-link" href="newsfeed.html">
        <i class="fas fa-user-friends"></i>
        <span> NewsFeed</span></a>
    </li>
    </ul>
    <!-- <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="fas fa-user-friends"></i>
        <span> Get a buddy</span></a>
      </li> -->
    <div id="content-wrapper">
      <div class="container-fluid">
        <!-- Page Content -->
        <h1 class="text-center">Find a Buddy!</h1>
        <hr>
        <br>
        <div class="container-fluid text-center">
          <p>Looking for a Buddy or a partner to talk? Sign up here!</p>
          <p>Find a partner who's signed up for the service as well and is willing to talk</p>
          <p>Your assigned partner is <b>John Doe</b></p>
          <div class="card">
            <div class= "user">
              <img src="../assets/img-01.png" alt="Avatar" class= "user" style="height: 20%; width:20%;">
            </div>
            <div class="container">
              <h4><b>John Doe</b></h4>
              <p>johndoe@starterhacks.ca</p>
            </div>
          </div>
          <!-- </div> -->
          <div class="fixed" style = "font-family: 'Roboto Slab', serif; color: #fff;">
            <a class="nope" href = "https://www.canada.ca/en/public-health/services/mental-health-services/mental-health-get-help.html">Get Help!</a>
          </div>
        </div>
        <!-- /.container-fluid -->
        <!-- Sticky Footer -->
        <footer class="sticky-footer">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>© WATHealth 2019</span>
            </div>
          </div>
        </footer>
      </div>
      <!-- /.content-wrapper -->
    </div>
  </div>
  </div>
</template>

<script>

  export default {
    name: "buddy",
    components: {
    },
    created() {
      this.id = this.$route.params.id;
    },
    data() {
      return {
        id: "000000"
      }
    }
  }
</script>

<style scoped>

  .fixed {
    padding: 2px 2px 2px 2px;
    font-size: 20px;
    position: fixed;
    border: 2px solid #000;
    top: 80px;
    right: 5px;
    background: red;
  }

  #page-top{
    font-size: 20px;
  }
  a.nope:hover {
    text-decoration: none;
  }
</style>
