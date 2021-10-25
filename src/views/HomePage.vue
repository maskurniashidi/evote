<template>
  <div class="home">
    <MainNavigation />
    <div class="container">
      <div class="sidebar">
        <ProfileCardSidebar class="profil-card" />
        <EventCardSidebar class="event-card" />
      </div>
      <div class="main">
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
  .container {
    width: 80%;
    margin: 0px auto;
    // background: salmon;
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 20px;
    margin-top: 30px;
    .sidebar {
      //   background-color: bisque;
      .profile-card {
      }

      .event-card {
        margin-top: 30px;
      }
    }
    .main {
      background-color: aqua;
    }
  }
}

@media (max-width: 1250px) {
  .home {
    .container {
      width: 90%;
    }
  }
}

@media (max-width: 750px) {
  .home {
    .container {
      width: 90%;
      display: block;
    }
    .sidebar {
      display: none;
    }

    .main {
      width: 100%;
    }
  }
}
</style>
