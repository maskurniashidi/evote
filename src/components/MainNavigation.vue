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
          <router-link class="link" to="/HomePage"><i class="fas fa-home" style="color:white"></i></router-link>
          <router-link class="link" to="/PaslonPage"><i class="fas fa-book-open" style="color:white"></i></router-link>
          <router-link class="link" to="/TimelinePage"><i class="fas fa-stream" style="color:white"></i></router-link>
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
      <div class="mobile-nav" v-show="mobileNav">
        <i @click="toggleMobileNav" v-show="mobile" class="fas fa-bars fa-2x"></i>
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
        <div class="evote-events">
          <h4>Kegiatan Terkait</h4>
          <div class="boxes-events">
            <router-link class="evote-event" to="#">
              <h4>Pendaftaran DPT</h4>
              <p>Daftarkan akun anda agar terdaftar sebagai DPT Suksesi HIMIT</p>
            </router-link>
            <router-link class="evote-event" to="/ViolationReport">
              <h4>Pelaporan kecurangan</h4>
              <p>Laporkan segala masalah yang terjadi dalam Suksesi HIMIT</p>
            </router-link>
            <router-link class="evote-event" to="#">
              <h4>Kritik dan saran</h4>
              <p>Berikan kritik dan saran terkait suksesi HIMIT</p>
            </router-link>
          </div>
        </div>
        <div class="confrence">
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
        <router-link to="/" class="logout">
          <i class="fas fa-sign-out-alt" style="transform: rotate(180deg);"></i>
          <h4 class="logout-text">Keluar</h4>
        </router-link>
      </div>
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
  height: 100vh;
  background-color: #fff;
  top: 0;
  right: 0;
  overflow-y: auto;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.13);
  -ms-overflow-style: none;
  scrollbar-width: none;

  //global
  h4 {
    font-weight: 400;
    font-size: 14px;
    color: $netral-500;
    font-size: 18px;
  }

  h5 {
    font-weight: 400;
    font-size: 16px;
    color: $secondary-500;
  }

  p {
    font-weight: 400;
    font-size: 15px;
    color: $secondary-500;
  }

  //not-global
  .fas.fa-bars {
    cursor: pointer;
    align-self: flex-start;
    color: $primary-500;
    -webkit-text-stroke: 1px white;
  }

  .profile {
    margin: 50px 0px 40px;
    display: flex;
    align-items: center;
    img {
      border: 2px solid black;
      border-radius: 50%;
    }
    .info {
      margin-left: 10px;
      flex: 1;
      .btn-view {
        color: $primary-300;
        text-decoration: none;
        font-weight: 400;
        font-size: 12px;
        color: $primary-300;
        font-size: 18px;
      }
    }
  }

  .line {
    border: 0.5px solid #f5f8fa;
  }

  .notification,
  .myevent {
    display: flex;
    align-items: center;
    margin: 10px 0px;
    h5 {
      flex: 1;
    }
    .box {
      background-color: $secondary-100;
      border-radius: 4px;
      padding: 5px 15px;
    }

    .box-event {
      background: $primary-100;
      border-radius: 4px;
    }
  }

  .evote-events {
    margin-top: 20px;
    h4 {
    }

    .boxes-events {
      margin-top: 15px;
      padding-left: 15px;
      .evote-event {
        margin-bottom: 15px;
        text-decoration: none;
        h4 {
          margin-bottom: 3px;
        }
        p {
          margin-bottom: 20px;
        }
      }
    }
  }

  .confrence {
    display: flex;
    align-items: center;
    .confrence-info {
      flex: 1;
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
    margin: 20px 0px 40px;
    text-decoration: none;
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

  .logout {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 0px;
    background: #e23647;
    border-radius: 4px;
    text-decoration: none;
    margin-bottom: 50px;
    .fa-sign-out-alt {
      color: #fff;
      margin-left: 20px;
    }
    .logout-text {
      flex: 1;
      margin-left: 15px;
      color: #fff;
    }

    &:hover {
      background: #ad0c1c;
    }
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
  transform: translateX(400px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}

.mobile-nav-leave-to {
  transform: translateX(400px);
}
</style>
