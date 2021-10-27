<template>
  <div class="detail-file-view">
    <MainNavigation class="nav-detail-file-view" />
    <div class="container-detail-file-view">
      <div class="sidebar-detail-file-view">
        <ProfileCardSidebar class="profile-card" />
        <EventCardSidebar class="event-card" />
        <div class="sticky-sidebar">
          <ConfrenceCard class="conf-card" />
          <LogoutBtn class="logout-card" />
        </div>
      </div>
      <div class="main-detail-file-view">
        <DetailFileCard />
      </div>
    </div>
    <Footer class="footer-detail-file-view" />
  </div>
</template>

<script>
import MainNavigation from "../components/MainNavigation.vue";
import ProfileCardSidebar from "../components/ProfileCardSidebar.vue";
import EventCardSidebar from "../components/EventCardSidebar.vue";
import ConfrenceCard from "../components/ConfrenceCard.vue";
import LogoutBtn from "../components/LogoutBtn.vue";
import DetailFileCard from "../components/DetailFileCard.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "DetailFileViewPage",
  components: { MainNavigation, ProfileCardSidebar, EventCardSidebar, ConfrenceCard, LogoutBtn, Footer, DetailFileCard },
};
</script>

<style lang="scss" scoped>
.detail-file-view {
  width: 100%;
  background: #f5f8fa;
  .nav-detail-file-view {
    position: relative;
    z-index: 99;
  }

  .container-detail-file-view {
    width: 80%;
    margin: 0px auto;
    // background: salmon;
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 20px;
    margin-top: 30px;
    .sidebar-detail-file-view {
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
    .main-detail-file-view {
      // background-color: aqua;
      .section-detail-file-view {
      }
    }
  }

  .footer-detail-file-view {
    margin-top: 100px;
  }
}

@media (max-width: 1250px) {
  .detail-file-view {
    .container-detail-file-view {
      width: 90%;
    }
  }
}

@media (max-width: 750px) {
  .detail-file-view {
    .container-detail-file-view {
      width: 90%;
      display: block;
    }
    .sidebar-detail-file-view {
      display: none;
    }

    .main-detail-file-view {
      width: 100%;
    }
  }
}
</style>
