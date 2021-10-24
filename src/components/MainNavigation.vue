<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link to="/">
          <img class="himit-logo" src="https://himitpens.com/img/HIMIT.png" alt="" />
        </router-link>
        <div class="header">e<span class="vote-span">Vote</span> Himit</div>
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" to="#"><i class="fas fa-home" style="color:white"></i></router-link>
          <router-link class="link" to="#"><i class="fas fa-book-open" style="color:white"></i></router-link>
          <router-link class="link" to="#"><i class="fas fa-stream" style="color:white"></i></router-link>
        </ul>
      </div>
      <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile" />
      <div v-show="!mobile" class="search-bar">
        <div class="search-field">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Cari sesuatu" />
        </div>
      </div>
    </nav>

    <!-- Mobile -->

    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile" />
        <div class="profile">
          <img src="https://placeimg.com/50/50/people" alt="" />
          <div class="info">
            <h4>Maskurnia Shidi</h4>
            <router-link class="btn-view" to="#">lihat profil</router-link>
          </div>
        </div>
        <hr class="line" />
        <div class="notification">
          <h5>Notifikasi</h5>
          <div class="box box-notif"></div>
        </div>
        <div class="myevent">
          <h5>Acara saya</h5>
          <div class="box box-event"></div>
        </div>
        <div class="evote-events">
          <div class="evote-event">
            <h4>Pendaftaran DPT</h4>
            <p>Daftarkan akun anda agar terdaftar sebagai DPT Suksesi HIMIT</p>
          </div>
          <div class="evote-event">
            <h4>Pelaporan kecurangan</h4>
            <p>Laporkan segala masalah yang terjadi dalam Suksesi HIMIT</p>
          </div>
          <div class="evote-event">
            <h4>Kritik dan saran</h4>
            <p>Berikan kritik dan saran terkait suksesi HIMIT</p>
          </div>
        </div>
        <div class="zoom">
          <div class="zoom-info">
            <h4>Maskurnia shidi</h4>
            <h3>3 D4 Teknik Informatika A</h3>
          </div>
          <div class="zoom-icon">
            <i class="fas fa-video" style="color: blue"></i>
          </div>
        </div>
        <div class="info-user">
          <h4>Anda belum terdaftar sebagai DPT</h4>
        </div>
        <div class="logout">
          <i class="fas fa-sign-out-alt" style="transform: rotate(180deg);"></i>
          <h4 class="logout-text">Keluar</h4>
        </div>
      </ul>
    </transition>
  </header>
</template>

<script>
import MenuIcon from "../assets/Icons/bars-regular.svg";
export default {
  name: "MainNavigation",
  components: {
    MenuIcon,
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windownWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windownWidth = window.innerWidth;
      if (this.windownWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "./modules/variables";

//STYLING
header {
  background-color: $primary-500;
  font-family: $base-font;
  widows: 100%;
  height: 90px;
  box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
  nav {
    width: 80%;
    height: 90px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .branding {
      flex: 1;
      //   background-color: greenyellow;
      display: flex;
      align-items: center;
      .himit-logo {
        width: 60px;
        height: auto;
        cursor: pointer;
      }
      .header {
        font-size: 36px;
        line-height: 72px;
        font-weight: normal;
        color: #fff;
        margin-left: 10px;
        cursor: pointer;

        span {
          color: $info-900;
        }
      }
    }

    .nav-links {
      ul {
        .link {
          margin-right: 40px;
        }
        .link:last-child {
          margin-right: 0;
        }
      }
    }

    .search-bar {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .search-field {
        width: 250px;
        background: white;
        display: flex;
        align-items: center;
        height: 30px;
        border-radius: 8px;
      }
      i {
        margin: 0px 10px;
        color: $primary-500;
        opacity: 0.8;
      }
      input {
        width: 100%;
        background: transparent;
        border: none;
        outline: none;
      }
      ::placeholder {
        color: $primary-500;
        opacity: 0.8;
      }
    }

    .menu-icon {
      cursor: pointer;
      height: 25px;
      width: auto;
      color: #fff;
    }
  }
}

@media (max-width: 1250px) {
  header {
    .container {
      width: 90%;
    }
  }
}

//MOBILE

.mobile-nav {
  padding: 20px;
  width: 70%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  background-color: #fff;
  top: 0;
  right: 0;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  .menu-icon {
    cursor: pointer;
    height: 25px;
    width: auto;
    align-self: flex-start;
    color: $primary-500;
  }

  .link {
    padding: 15px 0;
    color: #fff;
  }
}

::-webkit-scrollbar {
  display: none;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}

.mobile-nav-enter {
  transform: translateX(250px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}

.mobile-nav-leave-to {
  transform: translateX(250px);
}
</style>
