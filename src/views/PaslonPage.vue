<template>
  <div class="paslon">
    <MainNavigation class="nav-paslon" />
    <div class="container-paslon">
      <div class="sidebar-paslon">
        <ProfileCardSidebar class="profile-card" />
        <EventCardSidebar class="event-card" />
        <div class="sticky-sidebar">
          <ConfrenceCard class="conf-card" />
          <LogoutBtn class="logout-card" />
        </div>
      </div>
      <div class="main-paslon">
        <PaslonCard class="paslon-card-section" />
      </div>
    </div>
    <Footer class="footer-paslon" />
  </div>
</template>

<script>
import MainNavigation from "../components/MainNavigation.vue";
import ProfileCardSidebar from "../components/ProfileCardSidebar.vue";
import EventCardSidebar from "../components/EventCardSidebar.vue";
import ConfrenceCard from "../components/ConfrenceCard.vue";
import LogoutBtn from "../components/LogoutBtn.vue";
import PaslonCard from "../components/PaslonCard.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "PaslonPage",
  components: { MainNavigation, ProfileCardSidebar, PaslonCard, EventCardSidebar, ConfrenceCard, LogoutBtn, Footer },
};
</script>

<style lang="scss" scoped>
.paslon {
  width: 100%;
  background: #f5f8fa;
  .nav-paslon {
    position: relative;
    z-index: 99;
  }

  .container-paslon {
    width: 80%;
    margin: 0px auto;
    // background: salmon;
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 20px;
    margin-top: 30px;
    .sidebar-paslon {
      .profile-card {
      }

      .event-card {
      }

      .sticky-sidebar {
        position: -webkit-sticky;
        position: sticky;
        top: 20px;
        .conf-card {
        }
      }
    }
    .main-paslon {
      // background-color: aqua;
    }
  }

  .footer-paslon {
    margin-top: 100px;
  }
}

@media (max-width: 1250px) {
  .paslon {
    .container-paslon {
      width: 90%;
    }
  }
}

@media (max-width: 750px) {
  .paslon {
    .container-paslon {
      width: 90%;
      display: block;
    }
    .sidebar-paslon {
      display: none;
    }

    .main-paslon {
      width: 100%;
    }
  }
}
</style>
