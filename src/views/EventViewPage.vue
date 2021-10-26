<template>
  <div class="event-view-page">
    <MainNavigation class="nav-event-view-page" />
    <div class="container-event-view-page">
      <div class="sidebar-event-view-page">
        <ProfileCardSidebar class="profile-card" />
        <EventCardSidebar class="event-card" />
        <div class="sticky-sidebar">
          <ConfrenceCard class="conf-card" />
          <LogoutBtn class="logout-card" />
        </div>
      </div>
      <div class="main-event-view-page">
        <SuccessionActivity class="event-view-page-section" />
      </div>
    </div>
    <Footer class="footer-event-view-page" />
  </div>
</template>

<script>
import MainNavigation from "../components/MainNavigation.vue";
import ProfileCardSidebar from "../components/ProfileCardSidebar.vue";
import EventCardSidebar from "../components/EventCardSidebar.vue";
import ConfrenceCard from "../components/ConfrenceCard.vue";
import LogoutBtn from "../components/LogoutBtn.vue";
import SuccessionActivity from "../components/SuccessionActivity.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "EventViewPage",
  components: { SuccessionActivity, MainNavigation, ProfileCardSidebar, EventCardSidebar, ConfrenceCard, LogoutBtn, Footer },
};
</script>

<style lang="scss" scoped>
.event-view-page {
  width: 100%;
  background: #f5f8fa;
  .nav-event-view-page {
    position: relative;
    z-index: 99;
  }

  .container-event-view-page {
    width: 80%;
    margin: 0px auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 20px;
    margin-top: 30px;
    .sidebar-event-view-page {
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
    .main-event-view-page {
      .event-view-page-section {
      }
    }
  }

  .footer-event-view-page {
    margin-top: 100px;
  }
}

@media (max-width: 1250px) {
  .event-view-page {
    .container-home {
      width: 90%;
    }
  }
}

@media (max-width: 750px) {
  .event-view-page {
    .container-event-view-page {
      width: 90%;
      display: block;
    }
    .sidebar-event-view-page {
      display: none;
    }

    .main-event-view-page {
      width: 100%;
    }
  }
}
</style>
