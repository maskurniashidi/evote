<template>
  <div class="profile-view">
    <MainNavigation class="nav-profile-view" />
    <div class="container-profile-view">
      <div class="sidebar-profile-view">
        <ProfileCardSidebar class="profile-card" />
        <EventCardSidebar class="event-card" />
        <div class="sticky-sidebar">
          <ConfrenceCard class="conf-card" />
          <LogoutBtn class="logout-card" />
        </div>
      </div>
      <div class="main-profile-view">
        <ProfileCard class="profile-view-main" />
      </div>
    </div>
    <Footer class="footer-profile-view" />
  </div>
</template>

<script>
import MainNavigation from "../components/MainNavigation.vue";
import ProfileCardSidebar from "../components/ProfileCardSidebar.vue";
import EventCardSidebar from "../components/EventCardSidebar.vue";
import ConfrenceCard from "../components/ConfrenceCard.vue";
import LogoutBtn from "../components/LogoutBtn.vue";
import Footer from "../components/Footer.vue";
import ProfileCard from "../components/ProfileCard.vue";
export default {
  name: "ProfilePage",
  components: { ProfileCard, MainNavigation, ProfileCardSidebar, EventCardSidebar, ConfrenceCard, LogoutBtn, Footer },
};
</script>

<style lang="scss" scoped>
.profile-view {
  width: 100%;
  background: #f5f8fa;
  .nav-profile-view {
    position: relative;
    z-index: 99;
  }

  .container-profile-view {
    width: 80%;
    margin: 0px auto;
    // background: salmon;
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 20px;
    margin-top: 30px;
    .sidebar-profile-view {
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
    .main-profile-view {
      // background-color: aqua;
      .profile-view-main {
      }
    }
  }

  .footer-profile-view {
    margin-top: 100px;
  }
}

@media (max-width: 1250px) {
  .profile-view {
    .container-profile-view {
      width: 90%;
    }
  }
}

@media (max-width: 750px) {
  .profile-view {
    .container-profile-view {
      width: 90%;
      display: block;
    }
    .sidebar-profile-view {
      display: none;
    }

    .main-profile-view {
      width: 100%;
    }
  }
}
</style>
