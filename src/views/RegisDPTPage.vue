<template>
  <div class="regis-dpt-view">
    <MainNavigation class="nav-regis-dpt" />
    <div class="container-regis-dpt">
      <div class="sidebar-regis-dpt">
        <ProfileCardSidebar class="profile-card" />
        <EventCardSidebar class="event-card" />
        <div class="sticky-sidebar">
          <ConfrenceCard class="conf-card" />
          <LogoutBtn class="logout-card" />
        </div>
      </div>
      <div class="main-regis-dpt">
        <RegisDPTCard class="regis-dpt-main" />
      </div>
    </div>
    <Footer class="footer-regis-dpt" />
  </div>
</template>

<script>
import MainNavigation from "../components/MainNavigation.vue";
import ProfileCardSidebar from "../components/ProfileCardSidebar.vue";
import EventCardSidebar from "../components/EventCardSidebar.vue";
import ConfrenceCard from "../components/ConfrenceCard.vue";
import LogoutBtn from "../components/LogoutBtn.vue";
import Footer from "../components/Footer.vue";
import RegisDPTCard from "../components/RegisDPTCard.vue";
export default {
  name: "RegisDPTPage",
  components: { RegisDPTCard, MainNavigation, ProfileCardSidebar, EventCardSidebar, ConfrenceCard, LogoutBtn, Footer },
};
</script>

<style lang="scss" scoped>
.regis-dpt-view {
  width: 100%;
  background: #f5f8fa;
  .nav-regis-dpt {
    position: relative;
    z-index: 99;
  }

  .container-regis-dpt {
    width: 80%;
    margin: 0px auto;
    // background: salmon;
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 20px;
    margin-top: 30px;
    .sidebar-regis-dpt {
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
    .main-regis-dpt {
      // background-color: aqua;
      .regis-dpt-main {
      }
    }
  }

  .footer-regis-dpt {
    margin-top: 100px;
  }
}

@media (max-width: 1250px) {
  .regis-dpt-view {
    .container-regis-dpt {
      width: 90%;
    }
  }
}

@media (max-width: 750px) {
  .regis-dpt-view {
    .container-regis-dpt {
      width: 90%;
      display: block;
    }
    .sidebar-regis-dpt {
      display: none;
    }

    .main-regis-dpt {
      width: 100%;
    }
  }
}
</style>
