<template>
  <div class="landing-page">
    <NavigationLp class="nav" />
    <JumbotronLp class="jumbotron" />
    <Footer class="footer" />
  </div>
</template>

<script>
import NavigationLp from "../components/NavigationLp.vue";
import Footer from "../components/Footer.vue";
import JumbotronLp from "../components/JumbotronLp.vue";
export default {
  name: "LandingPage",
  components: { NavigationLp, Footer, JumbotronLp },
};
</script>

<style lang="scss" scoped>
.landing-page {
  nav {
    position: relative;
    z-index: 1;
  }
  .jumbotron {
    position: relative;
    z-index: -1;
    top: 0px;
  }
}
</style>
