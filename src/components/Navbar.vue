<template>
<div class="nav1">
  <!-- <div class="fixed-top"> -->
<div id="nav1" class="" >
<b-navbar toggleable="lg" class="nav-sty" tabs fill>
  <b-container >
    
    <b-navbar-nav href="#" class="mx-5">
    <b-nav>
      <img
      class="d-inline-block mt-1"
      src="teleCallerIcon.png"
      width="60"
      height="60"
      alt=""
      loading="lazy"/>
    </b-nav>
  <b-nav class="my-3 mx-2 tc"><b>Tele Caller</b> </b-nav>
  </b-navbar-nav>

<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

 <b-collapse id="nav-collapse" is-nav>
  
<!-- Right aligned nav items -->
  
    <b-nav class="ms-auto" tabs justified>
    <b-nav-item href="#" id="navitem" router-link to="/Dashboard">
      <i class="fal fa-tachometer-alt"></i><br />
      <b>DASHBOARD</b></b-nav-item>
    
    <b-nav-item href="#" id="navitem"
      ><i class="fad fa-analytics"></i> <br /><b
        >INSIGHTS</b>
      </b-nav-item>
    
    <b-nav-item href="#" id="navitem" router-link to="/Settings">
      <i class="fad fa-cog"></i><br />
      <b>SETTINGS</b>
    </b-nav-item>

    <b-nav-item-dropdown style="color: #ffff">
      <template slot="button-content">
        <i class="fad fa-analytics"></i><br /><b>ACCOUNT</b>
      </template>
        <b-dropdown-item>
          <span style="color: #134f70"
          ><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</span>
        </b-dropdown-item>
    </b-nav-item-dropdown>
    
  </b-nav>
</b-collapse>
</b-container>
</b-navbar>
</div>

<div id="nav2" >
<b-navbar >
<b-navbar-nav href="#" class="ms-auto">
  <b-nav class="">
    <div
      class="p-3 mb-2 mt-2 text-white arrow-pointer call fa fa-phone"
      @click="call()"
      style="color: #fff"
    >
      CLICK TO CALL
    </div>
  </b-nav>
</b-navbar-nav>
</b-navbar>
</div>
<!-- </div> -->
</div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@600&family=Monoton&family=Rampart+One&display=swap");
.nav-sty {
  background-color: rgba(4, 142, 255, 0.87);
}
#nav2 .navbar {
  background-color: rgb(221, 221, 221);
}

.nav-link {
  display: block;
  padding: 1.5rem 1.5rem;
  color: #ffff;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}

.nav-tabs {
  border-bottom: 0px solid #dee2e6;
}

.nav-tabs .nav-link {
  border-right: 1px solid white;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0rem;
  padding-bottom: 0rem;
}

.tc {
  color: white;
  font-size: x-large;
}

.arrow-pointer {
  width: 180px;
  height: 50px;
  position: relative;
  background-color: #00aeffb9; /* For browsers that do not support gradients */
  background-image: linear-gradient(
    to right,
    rgba(4, 142, 255, 0.87),
    rgba(88, 255, 219, 0.788)
  );
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 4px 10px 0 #3094fa3d;
}
.arrow-pointer:after {
  content: "";
  position: absolute;
  left: -25px;
  bottom: 0;
  width: 0;
  height: 0;
  border-right: 25px solid rgba(4, 142, 255, 0.87);
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
}
a {
  color: #ffff;
}
/* .nav1{
  margin-bottom: 200px;
} */
</style>

<script>
export default {
  name: "Navbar1",
  data() {
    return {};
  },
  components: {},
  methods: {
    call: function() {
      alert("hi");
    },
  },
};
</script>
