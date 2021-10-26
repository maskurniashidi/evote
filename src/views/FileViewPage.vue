<template>
  <div class="file-view-page">
    <MainNavigation class="nav-file-view-page" />
    <div class="container-file-view-page">
      <div class="sidebar-file-view-page">
        <ProfileCardSidebar class="profile-card" />
        <EventCardSidebar class="event-card" />
        <div class="sticky-sidebar">
          <ConfrenceCard class="conf-card" />
          <LogoutBtn class="logout-card" />
        </div>
      </div>
      <div class="main-file-view-page">
        <FileSuccession class="section-file-view-page" />
      </div>
    </div>
    <Footer class="footer-file-view-page" />
  </div>
</template>

<script>
import MainNavigation from "../components/MainNavigation.vue";
import ProfileCardSidebar from "../components/ProfileCardSidebar.vue";
import EventCardSidebar from "../components/EventCardSidebar.vue";
import ConfrenceCard from "../components/ConfrenceCard.vue";
import LogoutBtn from "../components/LogoutBtn.vue";
import FileSuccession from "../components/FileSuccession.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "FileViewPage",
  components: { MainNavigation, ProfileCardSidebar, EventCardSidebar, ConfrenceCard, LogoutBtn, FileSuccession, Footer },
};
</script>

<style lang="scss" scoped>
.file-view-page {
  width: 100%;
  background: #f5f8fa;
  .nav-file-view-page {
    position: relative;
    z-index: 99;
  }

  .container-file-view-page {
    width: 80%;
    margin: 0px auto;
    // background: salmon;
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 20px;
    margin-top: 30px;
    .sidebar-file-view-page {
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
    .main-file-view-page {
      // background-color: aqua;
      .section-file-view-page {
      }
    }
  }

  .footer-file-view-page {
    margin-top: 100px;
  }
}

@media (max-width: 1250px) {
  .file-view-page {
    .container-file-view-page {
      width: 90%;
    }
  }
}

@media (max-width: 750px) {
  .file-view-page {
    .container-file-view-page {
      width: 90%;
      display: block;
    }
    .sidebar-file-view-page {
      display: none;
    }

    .main-file-view-page {
      width: 100%;
    }
  }
}
</style>
