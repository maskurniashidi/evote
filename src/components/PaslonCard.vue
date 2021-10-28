<template>
  <div class="paslon-cards">
    <div class="paslon-cards-top">
      <router-link to="/DetailPaslon" class="paslon-card">
        <div class="img-card">
          <img src="https://placeimg.com/640/300/tech" alt="" />
        </div>
        <div class="card-title">
          <h2>Pasangan calon 01 HIMIT PENS 2021</h2>
          <p>Ut imperdiet augue quis convallis finibus.</p>
        </div>
        <div class="look-all">
          <p>Lihat selengkapnya</p>
          <i class="fas fa-arrow-circle-right fa-1"></i>
        </div>
      </router-link>
      <router-link to="/DetailPaslon" class="paslon-card">
        <div class="img-card">
          <img src="https://placeimg.com/640/301/tech" alt="" />
        </div>
        <div class="card-title">
          <h2>Pasangan calon 02 HIMIT PENS 2021</h2>
          <p>Ut imperdiet augue quis convallis finibus.</p>
        </div>
        <div class="look-all">
          <p>Lihat selengkapnya</p>
          <i class="fas fa-arrow-circle-right fa-1"></i>
        </div>
      </router-link>
    </div>

    <div class="paslon-card-bottom">
      <div class="file-card">
        <div class="card-title">
          <div class="card-title-left">
            <i class="fas fa-briefcase"></i>
            <h3>Kegiatan suksesi</h3>
          </div>
          <h3>15</h3>
        </div>
        <div class="look-all">
          <p>Lihat selengkapnya</p>
          <i class="fas fa-arrow-circle-right fa-1"></i>
        </div>
      </div>
      <div class="file-card">
        <div class="card-title">
          <div class="card-title-left">
            <i class="fas fa-briefcase"></i>
            <h3>Berkas suksesi</h3>
          </div>
          <h3>15</h3>
        </div>
        <div class="look-all">
          <p>Lihat selengkapnya</p>
          <i class="fas fa-arrow-circle-right fa-1"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaslonCard",
  components: {},
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "./modules/variables";

//GLOBAL

.paslon-cards {
  width: 100%;
  &-top {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;
    margin-top: 10px;
    .paslon-card {
      background: #ffffff;
      box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.5s;
      text-decoration: none;
      .img-card {
        overflow: hidden;

        img {
          width: 100%;
          transition: transform 0.5s ease-in-out;
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
        p {
          margin-right: 10px;
          color: $primary-500;
        }
        i {
          color: $primary-500;
        }
      }

      &:hover {
        transform: scale(0.97);
      }
    }
  }
  .paslon-card-bottom {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;
    margin-top: 20px;
    .file-card {
      background: #ffffff;
      box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.5s;
      .card-title {
        padding: 0px 20px;
        margin-top: 10px;
        display: flex;
        &-left {
          flex: 1;
          display: flex;
          align-items: center;
          h3 {
            margin-left: 10px;
            font-size: 18px;
            color: $netral-500;
            font-weight: 400;
            color: $netral-500;
          }
        }
      }

      .look-all {
        padding: 0px 20px;
        display: flex;
        align-items: center;
        margin: 20px 0px;
        justify-content: flex-end;
        p {
          margin-right: 10px;
          color: $primary-500;
        }
        i {
          color: $primary-500;
        }
      }

      &:hover {
        transform: scale(0.97);
      }
    }
  }
}
</style>
