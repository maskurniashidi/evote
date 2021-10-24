<template>
  <div class="home">
    <MainNavigation />
    <div class="container">
      <div class="sidebar">
        <ProfileCardSidebar />
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
export default {
  name: "HomePage",
  components: { MainNavigation, ProfileCardSidebar },
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
</style>
