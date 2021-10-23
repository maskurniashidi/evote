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
        color: #092371;
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
        color: $light-white;
        font-size: 16px;
        cursor: pointer;
        i {
          margin-left: 5px;
        }
      }
    }
    .right {
      flex: 1;
      img {
        border-radius: 24px;
        max-width: 100%;
      }
    }
  }
}

//RESPONSIVE BREAKPOINT
//TABLET
@media (max-width: 1250px) {
  header {
    .jumbotron {
      width: 90%;
      // flex-direction: column;
      // background-color: red;
      .left {
        // background-color: salmon;
        // order: 2;
        // width: 100%;
      }
      .right {
        // background-color: lightblue;
        display: flex;
        align-items: center;
        // order: 1;
        // width: 100%;
        img {
          // margin-top: 40px;
        }
      }
    }
  }
}
@media (max-width: 1028px) {
  header {
    .jumbotron {
      flex-direction: column;
      .left {
        order: 2;
      }
      .right {
        // display: flex;
        // align-items: center;
        order: 1;
        img {
          margin-top: 40px;
        }
      }
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
    .jumbotron {
      flex-direction: column;
      .left {
        margin-top: 20px;
      }
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
      width: 95%;
      .left {
        margin-top: 20px;
        h2 {
          font-size: 28px;
          line-height: 36px;
        }
        p {
          font-size: 16px;
          line-height: 25px;
        }
      }
    }
  }
}
</style>
