<template>
  <div class="">
    <div class="Settings">
      <NavBar />
    </div>
    <b-container class="bv-example-row mt-5">
      <b-row class="text-center mb-5">
        <div class="col-xs-8">
          <input type="search" class="form-control " placeholder="    Search Knowledge Base" />
        </div>
      </b-row>

      <b-row>
        <b-col>
          <div class="crd">
            <b-card img-height="100">
              <b-card-text>
                <img
                  src="user.png"
                  height="100"
                  alt=""
                /><br />
                USER
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div class="crd">
            <b-card img-height="100">
              <b-card-text>
                <img
                  src="branch.png"
                  height="100"
                  alt=""
                /><br />
                BRANCH
                <!-- https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-6/177800/253-512.png -->
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div class="crd">
            <b-card img-height="100">
              <b-card-text>
                <img
                  src="course.jpg"
                  height="100"
                  alt=""
                /><br />
                COURSE
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div class="crd">
            <b-card img-height="100">
              <b-card-text>
                <img
                  src="source.png"
                  height="100"
                  alt=""
                /><br />
                SOURCE
              </b-card-text>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import NavBar from "./Navbar";
import Footer from "./Footer";
export default {
  name: "Settings",

  components: {
    NavBar,
    Footer,
  },

  methods: {},
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  width: 100%;
  border-radius: 26px;
  border: 1px solid #ada9a9;
  padding: 1% 5% ;
  margin: 1% 1%;
  background-image: url(https://cdn1.iconfinder.com/data/icons/color-bold-style/21/01-512.png);
  background-size: contain;
  background-repeat: no-repeat;
  outline: 6;
  background-position: 12px;
  background-size: 16px;
}
.card {
  border: 3px solid rgba(0, 0, 0, 0.125);
}
</style>
