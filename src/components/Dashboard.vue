<template>
  <div class="">
    <div class="Dashboard">
      <NavBar />
    </div>
    <b-container class="bv-example-row mt-5">
      <b-row class="text-center mb-5">
        <div class="col-xs-8">
          <input type="search" class="form-control " placeholder="    Search Knowledge Base" />
        </div>
      </b-row>

      <b-row>
        <b-col col lg="3">
          <div class="crd">
            <b-card img-height="100">
              <b-card-text>
                <img src="kyc.png" height="100" alt="" /><br />
                KYC
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col col lg="3">
          <div class="crd">
            <b-card img-height="100">
              <b-card-text>
                <img
                  src="planDetails.png"
                  height="100"
                  alt=""
                /><br />
                PLAN DETAILS
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col col lg="3">
          <div class="crd">
            <b-card img-height="100">
              <b-card-text>
                <img
                  src="configAgent.png"
                  height="100"
                  alt=""
                /><br />
                KONFIGURE AGENT
              </b-card-text>
            </b-card>
          </div>
        </b-col>
      </b-row>

      <b-row class="mt-4">
        <b-col col lg="3">
          <div class="crd">
            <b-card img-height="100">
              <b-card-text>
                <img
                  src="insights.png"
                  height="100"
                  alt=""
                /><br />
                INSIGHTS
                <!-- https://vmguru.com/wp-content/uploads/2021/03/insights.png -->
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col col lg="3">
          <div class="crd">
            <b-card img-height="100">
              <b-card-text>
                <img
                  src="callFlow.png"
                  height="100"
                  alt=""
                /><br />
                CALL FLOW
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
  name: "Dashboard",

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
  width: 73%;
  border-radius: 26px;
  border: 1px solid #ada9a9;
  padding: 1% 5%;
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
