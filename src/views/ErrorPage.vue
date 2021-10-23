<template>
  <div class="container">
    <div class="left">
      <img src="../assets/img/error-bg.png" alt="" />
      <h2>e<span>Vote</span> Suksesi HIMIT PENS 2022</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="right">
      <div class="branding">
        <router-link to="/">
          <img class="himit-logo" src="https://himitpens.com/img/HIMIT.png" alt="" />
        </router-link>
        <div class="header">e<span class="vote-span">Vote</span> Himit</div>
      </div>
      <h3>OPPPSSSS...</h3>
      <h4>Sabar, tenangkan diri anda. Server dalam masa perbaikan !</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales sit amet orci ac pulvinar. Ut imperdiet augue quis convallis finibus.</p>
      <h4>Silahkan kembali lagi nanti.</h4>
      <hr class="line" />
      <h5>Media sosial kami</h5>
      <div class="social-media-list">
        <ul>
          <li>
            <i class="fab fa-twitter"></i>
            <a class="link" target="_blank" href="https://twitter.com/himitpens">Himit PENS</a>
          </li>
          <li>
            <i class="fab fa-instagram"></i>
            <a class="link" target="_blank" href="https://www.instagram.com/himitpens/">Himit PENS</a>
          </li>
        </ul>
        <ul>
          <li>
            <i class="fab fa-youtube"></i>
            <a class="link" target="_blank" href="https://www.youtube.com/c/HIMITPENS">Himit PENS</a>
          </li>
          <li>
            <i class="fab fa-facebook"></i>
            <a class="link" target="_blank" href="https://www.facebook.com/himitpens">Himit PENS</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  components: {},
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "../components/modules/variables";

//GLOBAL

//STYLING
.container {
  width: 100%;
  max-height: 100vh;
  display: flex;
  .left {
    width: 60%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      max-width: 600px;
      height: auto;
    }
    h2 {
      font-size: 36px;
      font-weight: 300;
      color: $primary-500;
      span {
        color: $primary-900;
      }
    }
    p {
      font-size: 16px;
      color: $secondary-500;
    }
  }
  .right {
    width: 40%;
    height: 100vh;
    background: $primary-500;
    box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 40px;
    font-family: $base-font;
    color: #fff;
    .branding {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      .himit-logo {
        width: 60px;
        height: auto;
        cursor: pointer;
      }
      .header {
        font-size: 24px;
        font-weight: normal;
        color: #fff;
        cursor: pointer;
      }
      span {
        color: $info-900;
      }
    }
    h3 {
      font-size: 32px;
      font-weight: 300;
    }

    h4 {
      font-size: 20px;
      font-weight: 300;
    }

    p {
      font-size: 14px;
      font-weight: 300;
      margin: 10px 0px;
    }

    .line {
      margin: 10px 0px;
    }

    h5 {
      font-size: 16px;
      font-weight: 400;
    }
    .social-media-list {
      display: flex;
      ul {
        flex: 1;
        list-style: none;
        li {
          display: flex;
          align-items: center;
          margin-top: 5px;
          .link {
            color: #fff;
            margin-left: 10px;
            &:hover {
              color: $info-900;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}
</style>
