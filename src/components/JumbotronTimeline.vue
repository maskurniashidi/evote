<template>
  <div class="jumbotron-timeline">
    <div v-show="!mobile" class="jumbotron-timeline-container-desktop">
      <img src="https://placeimg.com/1000/600/tech" alt="" />
      <div class="card-token">
        <h2>Pemungutan suara suksesi HIMIT PENS 2021</h2>
        <div>
          <Countdown style="color: #fff" deadline="November 22, 2021"></Countdown>
          <Countdown style="display:none;" end="November 22, 2021s"></Countdown>
        </div>
        <div class="token-field">
          <h4>Masukkan token untuk vote</h4>
          <div class="token-input-field">
            <input class="token-input" type="text" name="token" id="token" />
            <router-link class="btn-token" to="#">
              Kirim
            </router-link>
          </div>
          <div class="petunjuk">
            <p>Petunjuk pelaksanaan</p>
            <i class="fas fa-chevron-circle-right"></i>
          </div>
        </div>
      </div>
    </div>
    <div v-show="mobileJumb" class="jumbotron-timeline-mobile">
      <img src="https://placeimg.com/1000/600/tech" alt="" />
      <div class="token-field">
        <h4>Masukkan token untuk vote</h4>
        <div class="token-input-field">
          <input class="token-input" type="text" name="token" id="token" />
          <router-link class="btn-token" to="#">
            Kirim
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from "vuejs-countdown";
export default {
  name: "JumbotronTimeline",
  components: { Countdown },
  data() {
    return {
      mobile: null,
      mobileJumb: null,
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
        this.mobileJumb = true;
        return;
      }
      this.mobile = false;
      this.mobileJumb = false;
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "./modules/variables";
.jumbotron-timeline {
  width: 100%;
  .jumbotron-timeline-container-desktop {
    position: relative;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
      border-radius: 8px;
    }
    .card-token {
      position: absolute;
      top: 0;
      width: 70%;
      margin-top: 40px;
      margin-left: 35px;
      padding: 20px;
      h2 {
        font-style: normal;
        font-weight: normal;
        font-size: 28px;
        color: #ffffff;
      }
      .token-field {
        width: 100%;
        margin-top: 10px;
        h4 {
          font-weight: normal;
          font-size: 18px;
          color: #ffffff;
        }
        .token-input-field {
          margin-top: 5px;
          background: #ffffff;
          display: flex;
          border-radius: 8px;
          height: 50px;
          align-items: center;
          padding: 0px 5px;
          .token-input {
            flex: 1;
            height: 50px;
            font-size: 20px;
            margin-right: 10px;
            background: transparent;
            border: none;
            outline: none;
          }
          .btn-token {
            padding: 10px 30px;
            background: #2f80ec;
            border-radius: 8px;
            text-decoration: none;
            color: #fff;
          }
        }

        .petunjuk {
          display: flex;
          align-items: center;
          margin-top: 5px;
          p {
            margin-right: 10px;
            font-size: 14px;
            color: #fff;
          }
          i {
            color: #fff;
          }
        }
      }
    }
  }
}

//RESPONSIVE BREAKPOINT
@media (max-width: 1028px) {
  .jumbotron-timeline {
    .jumbotron-timeline-container-desktop {
      .card-token {
        margin-top: 5px;
        width: 90%;
      }
    }
  }
}

//MOBILE
.jumbotron-timeline-mobile {
  overflow: hidden;
  img {
    width: 100%;
  }
  .token-field {
    background: #81bff9;
    border-radius: 4px;
    width: 100%;
    margin-top: 10px;
    padding: 20px 20px;
    h4 {
      font-weight: normal;
      font-size: 18px;
      color: #ffffff;
    }
    .token-input-field {
      margin-top: 5px;
      background: #ffffff;
      display: flex;
      border-radius: 8px;
      height: 50px;
      align-items: center;
      padding: 0px 5px;
      .token-input {
        flex: 1;
        height: 50px;
        font-size: 20px;
        margin-right: 10px;
        background: transparent;
        border: none;
        outline: none;
      }
      .btn-token {
        padding: 10px 50px;
        background: #2f80ec;
        border-radius: 8px;
        text-decoration: none;
        color: #fff;
      }
    }
  }
}
</style>
