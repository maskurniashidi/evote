<template>
  <header>
    <div class="jumbotron">
      <div class="left">
        <h2>Selamat datang di eVote Suksesi HIMIT PENS 2021</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales sit amet orci ac pulvinar. Ut imperdiet augue quis convallis finibus.</p>
        <router-link class="btn-readmore" to="#">
          Learn more
          <i class="far fa-arrow-alt-circle-down"></i>
        </router-link>
      </div>
      <div class="right">
        <img src="../assets/img/jumbotron-img2.png" alt="" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "JumbotronLp",
  components: {},
};
</script>

<style lang="scss" scoped>
//IMPORT
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");

//VARIABLE
$base-font: "Poppins", sans-serif;
$base-color: #2f80ec;
$light-color: #ffffff;
$secondary-color: #0d397a;
$third-color: #6888c8;

//IMPORT
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");

//VARIABLE
$base-font: "Poppins", sans-serif;
$primary-500: #2f80ec;
$secondary-700: #485671;
$netral-500: #1e272e;
$light-white: #fff;

//STYLING
header {
  background-image: url("../assets/img/header-bg.png");
  background-repeat: no-repeat;
  width: 100%;
  height: 700px;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: $base-font;
  .jumbotron {
    width: 80%;
    margin: 0px auto;
    display: flex;
    .left {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 10px;
      h2 {
        font-size: 42px;
        color: $netral-500;
        font-weight: 500;
      }
      p {
        font-size: 18px;
        color: $secondary-700;
        font-weight: 300;
        line-height: 36px;
        margin: 10px 0px;
        padding-right: 60px;
      }

      .btn-readmore {
        width: 143px;
        height: 40px;
        background: $primary-500;
        box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: $light-color;
        font-size: 16px;
        i {
          margin-left: 5px;
        }
        &:hover {
          background: $secondary-color;
          box-shadow: -2px 4px 10px rgba($secondary-color, 0.4);
          font-weight: bold;
        }
      }
    }
    .right {
      flex: 1;
      img {
        border-radius: 24px;
      }
    }
  }
}

//RESPONSIVE BREAKPOINT
//TABLET
@media (max-width: 1250px) {
  .jumbotron {
    flex-direction: column;
    margin-top: 50px;
    .left {
      order: 2;
      width: 100%;
    }
    .right {
      order: 1;
      width: 100%;
    }
  }
}

//MOBILE
@media (max-width: 750px) {
  header {
    background-image: url("../assets/img/header-bg-mobile.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 375px;
    margin-top: 50px;
    .jumbotron {
      flex-direction: column;
      .right {
        display: none;
      }
    }
  }
}

@media (max-width: 550px) {
  header {
    background-image: url("../assets/img/header-bg-mobile2.png");
    .jumbotron {
      margin-top: 50px;
      .left {
        h2 {
          font-size: 28px;
          line-height: 36px;
        }
        p {
          font-size: 18px;
          line-height: 25px;
        }
      }
    }
  }
}
</style>
