<template>
  <div class="succession-activity">
    <div class="succession-activity-title">
      <h2>Kegiatan Suksesi</h2>
      <router-link to="#" class="btn-view-all">
        lihat semua
      </router-link>
    </div>
    <div class="main-card">
      <SuccessionActivityCard />
      <SuccessionActivityCard />
      <SuccessionActivityCard />
      <SuccessionActivityCard />
    </div>
  </div>
</template>

<script>
import SuccessionActivityCard from "./SuccessionActivityCard.vue";
export default {
  name: "SuccessionActivity",
  components: { SuccessionActivityCard },
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "./modules/variables";
.succession-activity {
  .succession-activity-title {
    display: flex;
    align-items: center;
    h2 {
      flex: 1;
    }
    .btn-view-all {
      text-decoration: none;
      color: $primary-500;
      font-weight: 300;
      &:hover {
        color: $primary-700;
      }
    }
  }
  .main-card {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    margin-top: 10px;
  }
}
</style>
