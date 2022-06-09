<template>
  <div class="detail-file-card">
    <div class="detail-file-card-top">
      <h2>Detail berkas suksesi</h2>
    </div>
    <div class="detail-file-card-bottom">
      <div class="bottom-left-card">
        <img src="../assets/img/berkas-img.png" alt="" />
        <div class="card-title">
          <h4>Technical meeting</h4>
          <p>Pasangan calon kahima dan wakahima</p>
        </div>
        <div class="card-detail">
          <div class="card-detail-top">
            <div class="date">
              <i class="fas fa-table"></i>
              <p>18 Oktober 2021</p>
            </div>
            <div class="clock">
              <i class="far fa-clock"></i>
              <p>19.00 - Selesai</p>
            </div>
          </div>
          <div class="card-detail-bottom">
            <div class="conf">
              <i class="fas fa-video"></i>
              <p>Zoom meeting</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-right">
        <h3>Deskripsi Acara</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <div class="berkas-card">
          <div class="left-card">
            <i class="fas fa-folder" style="color:blue"></i>
            <p>Berkas technical meeting</p>
          </div>
          <i class="fas fa-chevron-circle-right"></i>
        </div>
        <div class="notulensi-card">
          <div class="left-card">
            <i class="fas fa-file" style="color:orange"></i>
            <p>Notulensi Acara</p>
          </div>
          <i class="fas fa-chevron-circle-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailFileCard",
  components: {},
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "./modules/variables";
.detail-file-card {
  width: 100%;
  &-top {
    margin-bottom: 20px;
    h2 {
    }
  }

  &-bottom {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    .bottom-left-card {
      overflow: hidden;
      background: #ffffff;
      box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
      border-radius: 8px;
      padding: 10px;
      img {
        width: 100%;
        border-radius: 8px;
      }
      .card-title {
        margin: 10px 0px;
      }
      .card-detail-top {
        display: flex;
        .date {
          display: flex;
          align-items: center;
          p {
            margin-left: 5px;
          }
        }
        .clock {
          display: flex;
          align-items: center;
          margin-left: 20px;
          p {
            margin-left: 5px;
          }
        }
      }

      .card-detail-bottom {
        width: 50%;
        margin-top: 15px;
        .conf {
          display: flex;
          align-items: center;
          p {
            margin-left: 5px;
          }
        }
      }
    }
    .bottom-right {
      h3 {
      }
      p {
        margin-top: 10px;
      }
      .berkas-card,
      .notulensi-card {
        background: green;
        display: flex;
        align-items: center;
        padding: 10px;
        background: #d5edfe;
        border-radius: 4px;
        margin-top: 20px;
        .left-card {
          flex: 1;
          display: flex;
          align-items: center;
          p {
            margin-left: 20px;
          }
        }
      }

      .notulensi-card {
        background: #fff4db;
        margin-top: 10px;
      }
    }
  }
}

@media (max-width: 750px) {
  .detail-file-card {
    width: 100%;
    &-top {
    }

    &-bottom {
      display: flex;
      flex-direction: column;
      .bottom-right {
        margin-top: 20px;
      }
    }
  }
}
</style>
