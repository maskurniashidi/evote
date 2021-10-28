<template>
  <div class="timeline-page">
    <MainNavigation class="nav-timeline-page" />
    <div class="container-timeline-page">
      <div class="sidebar-timeline-page">
        <ProfileCardSidebar class="profile-card" />
        <EventCardSidebar class="event-card" />
        <div class="sticky-sidebar">
          <ConfrenceCard class="conf-card" />
          <LogoutBtn class="logout-card" />
        </div>
      </div>
      <div class="main-timeline-page">
        <JumbotronTimeline />
        <TimelineCard class="timeline-card" />
      </div>
    </div>
    <Footer class="footer-timeline-page" />
  </div>
</template>

<script>
import MainNavigation from "../components/MainNavigation.vue";
import ProfileCardSidebar from "../components/ProfileCardSidebar.vue";
import EventCardSidebar from "../components/EventCardSidebar.vue";
import ConfrenceCard from "../components/ConfrenceCard.vue";
import LogoutBtn from "../components/LogoutBtn.vue";
import Footer from "../components/Footer.vue";
import JumbotronTimeline from "../components/JumbotronTimeline.vue";
import TimelineCard from "../components/TimelineCard.vue";
export default {
  name: "TimelinePage",
  components: { JumbotronTimeline, MainNavigation, ProfileCardSidebar, EventCardSidebar, ConfrenceCard, LogoutBtn, Footer, TimelineCard },
};
</script>

<style lang="scss" scoped>
.timeline-page {
  width: 100%;
  background: #f5f8fa;
  .nav-timeline-page {
    position: relative;
    z-index: 99;
  }

  .container-timeline-page {
    width: 80%;
    margin: 0px auto;
    // background: salmon;
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 20px;
    margin-top: 30px;
    .sidebar-timeline-page {
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
    .main-timeline-page {
      // background-color: aqua;
      .timeline-card {
        margin-top: 20px;
      }
    }
  }

  .footer-timeline-page {
    margin-top: 100px;
  }
}

@media (max-width: 1250px) {
  .timeline-page {
    .container-timeline-page {
      width: 90%;
    }
  }
}

@media (max-width: 750px) {
  .timeline-page {
    .container-timeline-page {
      width: 90%;
      display: block;
    }
    .sidebar-timeline-page {
      display: none;
    }

    .main-timeline-page {
      width: 100%;
    }
  }
}
</style>
