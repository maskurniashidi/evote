<template>
  <header>
    <nav class="container">
      <div class="branding">
        <img class="himit-logo" src="https://himitpens.com/img/HIMIT.png" alt="" />
        <div class="header">e<span class="vote-span">Vote</span> Himit</div>
      </div>
      <div class="nav-links">
        <router-link class="btn-masuk" to="#">Masuk</router-link>
      </div>
    </nav>
    <div class="showcase"></div>
  </header>
</template>

<script>
export default {
  name: "NavigationLp",
  components: {},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");

//variable
$base-font: "Poppins", sans-serif;
$base-color: #2f80ec;
$secondary-color: #0d397a;
$light-color: #ffffff;

header {
  background-color: $base-color;
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
      }
      .header {
        font-size: 36px;
        line-height: 72px;
        font-weight: normal;
        color: $light-color;
        margin-left: 10px;

        span {
          color: $secondary-color;
        }
      }
    }

    .nav-links {
      .btn-masuk {
        padding: 10px 40px;
        border: 1px solid $light-color;
        border-radius: 100px;
        font-size: 18px;
        color: $light-color;
        text-decoration: none;
      }
    }
  }
}

/*responsive breakpoints*/

/*tablet*/
@media (max-width: 750px) {
  header {
    height: 70px;
    nav {
      height: 70px;
      .branding {
        .himit-logo {
          width: 50px;
          height: auto;
        }
        .header {
          font-size: 32px;
          span {
          }
        }
      }

      .nav-links {
        .btn-masuk {
          font-size: 16px;
          padding: 7px 25px;
        }
      }
    }
  }
}

/*mobile*/
@media (max-width: 550px) {
  header {
    height: 60px;
    nav {
      height: 60px;
      .branding {
        .himit-logo {
          width: 30px;
          height: auto;
        }
        .header {
          font-size: 24px;
          span {
          }
        }
      }

      .nav-links {
        .btn-masuk {
          font-size: 10px;
          padding: 7px 25px;
        }
      }
    }
  }
}
</style>
