<template>
  <div class="violation-report-view">
    <MainNavigation class="nav-violation-report-view" />
    <div class="container-violation-report-view">
      <div class="sidebar-violation-report-view">
        <ProfileCardSidebar class="profile-card" />
        <EventCardSidebar class="event-card" />
        <div class="sticky-sidebar">
          <ConfrenceCard class="conf-card" />
          <LogoutBtn class="logout-card" />
        </div>
      </div>
      <div class="main-violation-report-view">
        <ViolationReportCard class="violation-report-view-main" />
      </div>
    </div>
    <Footer class="footer-violation-report-view" />
  </div>
</template>

<script>
import MainNavigation from "../components/MainNavigation.vue";
import ProfileCardSidebar from "../components/ProfileCardSidebar.vue";
import EventCardSidebar from "../components/EventCardSidebar.vue";
import ConfrenceCard from "../components/ConfrenceCard.vue";
import LogoutBtn from "../components/LogoutBtn.vue";
import Footer from "../components/Footer.vue";
import ViolationReportCard from "../components/ViolationReportCard.vue";
export default {
  name: "ViolationReport",
  components: { ViolationReportCard, MainNavigation, ProfileCardSidebar, EventCardSidebar, ConfrenceCard, LogoutBtn, Footer },
};
</script>

<style lang="scss" scoped>
.violation-report-view {
  width: 100%;
  background: #f5f8fa;
  .nav-violation-report-view {
    position: relative;
    z-index: 99;
  }

  .container-violation-report-view {
    width: 80%;
    margin: 0px auto;
    // background: salmon;
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 20px;
    margin-top: 30px;
    .sidebar-violation-report-view {
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
    .main-violation-report-view {
      // background-color: aqua;
      .violation-report-view-main {
      }
    }
  }

  .footer-violation-report-view {
    margin-top: 100px;
  }
}

@media (max-width: 1250px) {
  .violation-report-view {
    .container-violation-report-view {
      width: 90%;
    }
  }
}

@media (max-width: 750px) {
  .violation-report-view {
    .container-violation-report-view {
      width: 90%;
      display: block;
    }
    .sidebar-violation-report-view {
      display: none;
    }

    .main-violation-report-view {
      width: 100%;
    }
  }
}
</style>
