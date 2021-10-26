<template>
  <div class="succession-activity-card">
    <img src="https://placeimg.com/640/600/tech" alt="" />
    <div class="card-title">
      <h4>Flooring KPU</h4>
      <p>Pengesahan juklak PPU</p>
    </div>
    <div class="card-btn">
      <div class="left">
        <i class="fas fa-map-marker-alt fa-xs"></i>
        <p>zoom meeting</p>
      </div>
      <router-link to="#" class="btn-view">
        Lihat
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessionActivityCard",
  components: {},
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "./modules/variables";

//STYLING
.succession-activity-card {
  background: #ffffff;
  box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
  border-radius: 8px;
  padding: 10px;
  img {
    width: 100%;
    border-radius: 8px;
  }
  .card-title {
    margin-top: 10px;
    h4 {
      font-size: 16px;
      color: $netral-500;
      font-weight: 500;
    }
    p {
      font-size: 12px;
      font-weight: 400;
      color: $secondary-500;
    }
  }
  .card-btn {
    display: flex;
    align-items: center;
    margin-top: 10px;
    .left {
      flex: 1;
      display: flex;
      align-items: center;
      i {
        width: 20px;
      }
      p {
        font-size: 12px;
      }
    }

    .btn-view {
      text-decoration: none;
      font-size: 12px;
      background: #2f80ec;
      border-radius: 4px;
      padding: 3px 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      &:hover {
        background: $primary-700;
      }
    }
  }
}
</style>
