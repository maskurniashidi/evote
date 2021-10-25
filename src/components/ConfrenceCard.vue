<template>
  <div class="confrence-card">
    <div class="top-conf">
      <img class="conf-profile" src="https://placeimg.com/50/50/people" alt="" />
      <div class="confrence-info">
        <h4>Maskurnia shidi</h4>
        <p>3 D4 Teknik Informatika A</p>
      </div>
      <a class="confrence-icon" href="https://us04web.zoom.us/j/9980118632?pwd=aGp2Y0tmWXdYZ3U1eElTRy9relZvZz09" target="_blank">
        <i class="fas fa-video" style="color: blue"></i>
      </a>
    </div>
    <router-link to="#" class="info-user">
      <h4>Anda belum terdaftar sebagai DPT</h4>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ConfrenceCard",
  components: {},
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "./modules/variables";
.confrence-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: #ffffff;
  box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
  border-radius: 8px;
  padding: 30px 15px;
  min-height: 150px;
  .top-conf {
    display: flex;
    align-items: center;
    .conf-profile {
      border-radius: 16px;
      margin-right: 10px;
    }
    .confrence-info {
      flex: 1;
      h4 {
        font-size: 18px;
        font-weight: 400;
        color: #1e272e;
      }
      p {
        font-size: 14px;
        font-weight: 400;
        color: $secondary-500;
      }
    }

    .confrence-icon {
      width: 50px;
      height: 50px;
      background: $primary-100;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }
  }

  .info-user {
    width: 100%;
    background: $warning-100;
    border-radius: 4px;
    padding: 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin-top: 20px;
    h4 {
      color: $warning-500;
      text-align: center;
      padding: 0px 5px;
      font-size: 14px;
    }

    &:hover {
      background: $warning-500;
      h4 {
        color: #fff;
      }
    }
  }
}
</style>
