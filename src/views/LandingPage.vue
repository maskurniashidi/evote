<template>
  <div class="landing-page">
    <NavigationLp class="nav" />
    <JumbotronLp class="jumbotron" />
    <InfoSectionLp class="main-section" />
    <FeatureSectionLp class="feature-section" />
    <ContactSectionLp class="contact-section" />
    <Footer class="footer" />
  </div>
</template>

<script>
import NavigationLp from "../components/NavigationLp.vue";
import Footer from "../components/Footer.vue";
import JumbotronLp from "../components/JumbotronLp.vue";
import InfoSectionLp from "../components/InfoSectionLp.vue";
import FeatureSectionLp from "../components/FeatureSectionLp.vue";
import ContactSectionLp from "../components/ContactSectionLp.vue";
export default {
  name: "LandingPage",
  components: { NavigationLp, Footer, JumbotronLp, InfoSectionLp, FeatureSectionLp, ContactSectionLp },
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
  .main-section {
    margin-top: 50px;
  }
  .feature-section {
    margin-top: 100px;
  }

  .contact-section {
    margin-top: 100px;
  }

  .footer {
    margin-top: 100px;
  }
}

@media (max-width: 1250px) {
  .landing-page {
    nav {
    }
    .jumbotron {
    }
    .main-section {
    }
  }
}

@media (max-width: 1028px) {
  .landing-page {
    nav {
    }
    .jumbotron {
    }
    .main-section {
    }
  }
}

@media (max-width: 750px) {
  .landing-page {
    nav {
    }
    .jumbotron {
    }
    .main-section {
      margin-top: 30px;
    }
  }
}

@media (max-width: 550px) {
  .landing-page {
    nav {
    }
    .jumbotron {
    }
    .main-section {
      margin-top: 10px;
    }
  }
}
</style>
