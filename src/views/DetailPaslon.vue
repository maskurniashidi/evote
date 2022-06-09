<template>
  <div class="detail-paslon">
    <MainNavigation class="nav-detail-paslon" />
    <div class="container-detail-paslon">
      <div class="sidebar-detail-paslon">
        <ProfileCardSidebar class="profile-card" />
        <EventCardSidebar class="event-card" />
        <div class="sticky-sidebar">
          <ConfrenceCard class="conf-card" />
          <LogoutBtn class="logout-card" />
        </div>
      </div>
      <div class="main-detail-paslon">
        <DetailPaslonCard />
      </div>
    </div>
    <Footer class="footer-detail-paslon" />
  </div>
</template>

<script>
import MainNavigation from "../components/MainNavigation.vue";
import ProfileCardSidebar from "../components/ProfileCardSidebar.vue";
import EventCardSidebar from "../components/EventCardSidebar.vue";
import ConfrenceCard from "../components/ConfrenceCard.vue";
import LogoutBtn from "../components/LogoutBtn.vue";
import Footer from "../components/Footer.vue";
import DetailPaslonCard from "../components/DetailPaslonCard.vue";
export default {
  name: "DetailPaslon",
  components: { DetailPaslonCard, MainNavigation, ProfileCardSidebar, EventCardSidebar, ConfrenceCard, LogoutBtn, Footer },
};
</script>

<style lang="scss" scoped>
.detail-paslon {
  width: 100%;
  background: #f5f8fa;
  .nav-detail-paslon {
    position: relative;
    z-index: 99;
  }

  .container-detail-paslon {
    width: 80%;
    margin: 0px auto;
    // background: salmon;
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 20px;
    margin-top: 30px;
    .sidebar-detail-paslon {
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
    .main-detail-paslon {
      // background-color: aqua;
      .section-detail-paslon {
      }
    }
  }

  .footer-detail-paslon {
    margin-top: 100px;
  }
}

@media (max-width: 1250px) {
  .detail-paslon {
    .container-detail-paslon {
      width: 90%;
    }
  }
}

@media (max-width: 750px) {
  .detail-paslon {
    .container-detail-paslon {
      width: 90%;
      display: block;
    }
    .sidebar-detail-paslon {
      display: none;
    }

    .main-detail-paslon {
      width: 100%;
    }
  }
}
</style>
