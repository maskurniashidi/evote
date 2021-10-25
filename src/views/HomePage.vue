<template>
  <div class="home">
    <MainNavigation />
    <div class="container-home">
      <div class="sidebar-home">
        <ProfileCardSidebar class="profile-card" />
        <EventCardSidebar class="event-card" />
      </div>
      <div class="main-home">
        <h1>halo</h1>
      </div>
    </div>
  </div>
</template>

<script>
import MainNavigation from "../components/MainNavigation.vue";
import ProfileCardSidebar from "../components/ProfileCardSidebar.vue";
import EventCardSidebar from "../components/EventCardSidebar.vue";
export default {
  name: "HomePage",
  components: { MainNavigation, ProfileCardSidebar, EventCardSidebar },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  .container-home {
    width: 80%;
    margin: 0px auto;
    // background: salmon;
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 20px;
    margin-top: 30px;
    height: 1400px;
    .sidebar-home {
      .profile-card {
      }

      .event-card {
        position: -webkit-sticky;
        position: sticky;
        top: 20px;
      }
    }
    .main-home {
      background-color: aqua;
    }
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
