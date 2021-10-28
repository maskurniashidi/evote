<template>
  <div class="card">
    <div class="profile">
      <img src="https://placeimg.com/50/50/people" alt="" />
      <div class="info">
        <h4>Maskurnia Shidi</h4>
        <router-link class="btn-view" to="/ProfilePage">lihat profil</router-link>
      </div>
    </div>
    <hr class="line" />
    <div class="notification">
      <h5>Notifikasi</h5>
      <div class="box box-notif">0</div>
    </div>
    <hr class="line" />
    <div class="myevent">
      <h5>Acara saya</h5>
      <div class="box box-event">0</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCardSidebar",
  components: {},
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "./modules/variables";
.card {
  width: 100%;
  min-height: 200px;
  padding: 10px 5px;
  background: #ffffff;
  box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
  border-radius: 8px;
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: $base-font;
  .profile {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    img {
      border: 2px solid black;
      border-radius: 50%;
    }

    .info {
      margin-left: 10px;
      flex: 1;
      h4 {
        font-size: 16px;
        color: $netral-500;
        font-weight: normal;
      }
      .btn-view {
        color: $primary-300;
        text-decoration: none;
        font-weight: 400;
        font-size: 12px;
        color: $primary-300;
        font-size: 16px;
      }
    }
  }

  hr {
    border: 0 none;
    height: 1.5px;
    background-color: #aec7d8;
    width: 100%;
  }

  .notification,
  .myevent {
    display: flex;
    align-items: center;
    margin: 7px 0px;
    h5 {
      flex: 1;
      font-size: 14px;
      font-weight: 300;
      color: $secondary-500;
    }
    .box {
      background-color: $secondary-100;
      border-radius: 4px;
      padding: 2px 20px;
    }

    .box-event {
      background: $primary-100;
      border-radius: 4px;
    }
  }
}
</style>
