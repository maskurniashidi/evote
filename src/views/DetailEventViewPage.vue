<template>
  <div class="detail-event-page">
    <MainNavigation class="nav-detail-event-page" />
    <div class="container-detail-event-page">
      <div class="sidebar-detail-event-page">
        <ProfileCardSidebar class="profile-card" />
        <EventCardSidebar class="event-card" />
        <div class="sticky-sidebar">
          <ConfrenceCard class="conf-card" />
          <LogoutBtn class="logout-card" />
        </div>
      </div>
      <div class="main-detail-event-page">
        <DetailEventCard />
      </div>
    </div>
    <Footer class="footer-detail-event-page" />
  </div>
</template>

<script>
import MainNavigation from "../components/MainNavigation.vue";
import ProfileCardSidebar from "../components/ProfileCardSidebar.vue";
import EventCardSidebar from "../components/EventCardSidebar.vue";
import ConfrenceCard from "../components/ConfrenceCard.vue";
import LogoutBtn from "../components/LogoutBtn.vue";
import DetailEventCard from "../components/DetailEventCard.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "DetailEventViewPage",
  components: { MainNavigation, ProfileCardSidebar, EventCardSidebar, ConfrenceCard, LogoutBtn, Footer, DetailEventCard },
};
</script>

<style lang="scss" scoped>
.detail-event-page {
  width: 100%;
  background: #f5f8fa;
  .nav-detail-event-page {
    position: relative;
    z-index: 99;
  }

  .container-detail-event-page {
    width: 80%;
    margin: 0px auto;
    // background: salmon;
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 20px;
    margin-top: 30px;
    .sidebar-detail-event-page {
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
    .main-detail-event-page {
      // background-color: aqua;
      .section-detail-event-page {
      }
    }
  }

  .footer-detail-event-page {
    margin-top: 100px;
  }
}

@media (max-width: 1250px) {
  .detail-event-page {
    .container-detail-event-page {
      width: 90%;
    }
  }
}

@media (max-width: 750px) {
  .detail-event-page {
    .container-detail-event-page {
      width: 90%;
      display: block;
    }
    .sidebar-detail-event-page {
      display: none;
    }

    .main-detail-event-page {
      width: 100%;
    }
  }
}
</style>
