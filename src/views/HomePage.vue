<template>
  <div class="home">
    <MainNavigation class="nav-home" />
    <div class="container-home">
      <div class="sidebar-home">
        <ProfileCardSidebar class="profile-card" />
        <EventCardSidebar class="event-card" />
        <div class="sticky-sidebar">
          <ConfrenceCard class="conf-card" />
          <LogoutBtn class="logout-card" />
        </div>
      </div>
      <div class="main-home">
        <CarouselImg class="showcase-home" />
        <SuccessionActivity class="succession-activity-home" />
        <FileSuccession class="file-succession-home" />
      </div>
    </div>
    <Footer class="footer-home" />
  </div>
</template>

<script>
import MainNavigation from "../components/MainNavigation.vue";
import ProfileCardSidebar from "../components/ProfileCardSidebar.vue";
import EventCardSidebar from "../components/EventCardSidebar.vue";
import ConfrenceCard from "../components/ConfrenceCard.vue";
import LogoutBtn from "../components/LogoutBtn.vue";
import CarouselImg from "../components/CarouselImg.vue";
import SuccessionActivity from "../components/SuccessionActivity.vue";
import FileSuccession from "../components/FileSuccession.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "HomePage",
  components: { MainNavigation, ProfileCardSidebar, EventCardSidebar, ConfrenceCard, LogoutBtn, CarouselImg, SuccessionActivity, FileSuccession, Footer },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  background: #f5f8fa;
  .nav-home {
    position: relative;
    z-index: 99;
  }

  .container-home {
    width: 80%;
    margin: 0px auto;
    // background: salmon;
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 20px;
    margin-top: 30px;
    .sidebar-home {
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
    .main-home {
      // background-color: aqua;
      .showcase-home {
      }

      .succession-activity-home {
        margin-top: 30px;
      }

      .file-succession-home {
        margin-top: 30px;
      }
    }
  }

  .footer-home {
    margin-top: 100px;
  }
}

@media (max-width: 1250px) {
  .home {
    .container-home {
      width: 90%;
    }
  }
}

@media (max-width: 750px) {
  .home {
    .container-home {
      width: 90%;
      display: block;
    }
    .sidebar-home {
      display: none;
    }

    .main-home {
      width: 100%;
    }
  }
}
</style>
