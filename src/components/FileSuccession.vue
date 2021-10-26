<template>
  <div class="file-succession">
    <div class="file-succession-title">
      <h2>Berkas Suksesi</h2>
      <router-link to="#" class="btn-view-all">
        lihat semua
      </router-link>
    </div>
    <div class="main-card">
      <FileSuccessionCard />
      <FileSuccessionCard />
      <FileSuccessionCard />
      <FileSuccessionCard />
    </div>
  </div>
</template>

<script>
import FileSuccessionCard from "./FileSuccessionCard.vue";
export default {
  name: "FileSuccession",
  components: { FileSuccessionCard },
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "./modules/variables";
.file-succession {
  .file-succession-title {
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;
    margin-top: 10px;
  }
}
</style>
