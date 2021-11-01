<template>
  <div class="file-succession-card">
    <div class="img-card">
      <img src="../assets/img/berkas-img.png" alt="" />
    </div>
    <div class="card-title">
      <h2>Petunjuk pelaksanaan Suksesi HIMIT PENS 2021</h2>
      <p>Ut imperdiet augue quis convallis finibus.</p>
    </div>
    <div class="look-all">
      <router-link class="p" to="/DetailFileViewPage">Lihat selengkapnya</router-link>
      <i class="fas fa-arrow-circle-right fa-1"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileSuccessionCard",
  components: {},
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "./modules/variables";

.file-succession-card {
  background: #ffffff;
  box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.5s;
  .img-card {
    overflow: hidden;

    img {
      width: 100%;
      transition: transform 0.5s ease-in-out;
      &:hover {
        transform: scale(1.5);
      }
    }
  }
  .card-title {
    padding: 0px 20px;
    margin-top: 10px;
    h2 {
      font-size: 18px;
      color: $netral-500;
      font-weight: 400;
      color: $netral-500;
    }
    p {
      font-size: 14px;
      color: $secondary-500;
    }
  }

  .look-all {
    padding: 0px 20px;
    display: flex;
    align-items: center;
    margin: 20px 0px;
    justify-content: flex-end;
    .p {
      margin-right: 10px;
      color: $primary-500;
      text-decoration: none;
    }
    i {
      color: $primary-500;
    }
  }

  &:hover {
    transform: scale(0.97);
  }
}
</style>
