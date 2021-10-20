<template>
  <div class="landing-page">
    <NavigationLp />
    <Footer />
  </div>
</template>

<script>
import NavigationLp from "../components/NavigationLp.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "LandingPage",
  components: { NavigationLp, Footer },
};
</script>

<style></style>
