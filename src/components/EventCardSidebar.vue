<template>
  <div class="container">
    <div class="tab">
      <input class="sidebar-input" type="checkbox" id="chck1" />
      <label class="tab-label" for="chck1">Kegiatan Terkait</label>
      <div class="tab-content">
        <div class="boxes-events">
          <router-link class="evote-event" to="/RegisDPTPage">
            <i class="fas fa-user-friends"></i>
            <div class="content">
              <h4>Pendaftaran DPT</h4>
              <p>Daftarkan akun anda agar terdaftar sebagai DPT Suksesi HIMIT</p>
            </div>
          </router-link>
          <router-link class="evote-event" to="/ViolationReport">
            <i class="fas fa-volume-up"></i>
            <div class="content">
              <h4>Pelaporan kecurangan</h4>
              <p>Laporkan segala masalah yang terjadi dalam Suksesi HIMIT</p>
            </div>
          </router-link>
          <router-link class="evote-event" to="/ErrorPage">
            <i class="far fa-edit"></i>
            <div class="content">
              <h4>Kritik dan saran</h4>
              <p>Berikan kritik dan saran terkait suksesi HIMIT</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCardSidebar",
  components: {},
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "modules/variables";

//STYLING
.container {
  width: 100%;
  margin: 20px 0px;
  padding: 10px 5px;
  background: #ffffff;
  box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
  border-radius: 8px;
  overflow: hidden;
  .tab {
    width: 100%;
    color: #000;
    overflow: hidden;
    .sidebar-input {
      position: absolute;
      opacity: 0;
      z-index: -1;
    }

    &-label {
      display: flex;
      justify-content: space-between;
      padding: 5px 1em;
      font-weight: 300;
      cursor: pointer;
      display: flex;
      align-items: center;

      &:hover {
      }
      &::after {
        content: "\276F";
        width: 1em;
        height: 1em;
        padding: 8px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        transition: all 0.35s;
        background: #d5edfe;
      }
    }

    &-content {
      max-height: 0;
      padding: 0 1em;
      transition: all 0.35s;
      .boxes-events {
        border-top: 1px solid #f5f8fa;
        .evote-event {
          margin-top: 20px;
          margin-bottom: 15px;
          text-decoration: none;
          color: #000;
          display: flex;
          align-items: center;
          margin-top: 20px;
          &:hover {
            .fas,
            .far {
              background: #d5edfe;
            }
          }
          .fas,
          .far {
            padding: 20px;
            background: $secondary-300;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .content {
            margin-left: 10px;
            h4 {
              margin-bottom: 3px;
              color: $netral-500;
              font-size: 14px;
              font-weight: 400;
            }
            p {
              margin-bottom: 20px;
              font-size: 12px;
              color: $secondary-500;
              font-weight: 400;
            }
          }
        }
      }
    }
  }

  .sidebar-input:checked {
    + .tab-label {
      &::after {
        transform: rotate(90deg);
      }
    }
    ~ .tab-content {
      max-height: 100vh;
      padding: 1em;
    }
  }
}
</style>
