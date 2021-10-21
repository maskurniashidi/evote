<template>
  <main>
    <div class="info-section">
      <h2 class="header"><span>Pengembang</span> Aplikasi</h2>
      <hr class="line" />
      <div class="main-section">
        <div class="left">
          <img src="../assets/img/vote-character.png" alt="" />
        </div>
        <div class="right">
          <h2>Himpunan Mahasiswa Teknik Informatika Politeknik Elektronika Negeri Surabaya</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p class="p-bottom">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div class="sosmed-link">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Youtube</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "InfoSectionLp",
  components: {},
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "modules/variables";

//STYLING
main {
  //   background-color: antiquewhite;
  height: 545px;
  .info-section {
    width: 80%;
    margin: 0px auto;
    font-family: $base-font;
    font-size: 18px;
    // background-color: aqua;
    .header {
      text-align: center;
      font-weight: medium;
      font-size: 32px;
    }
    .line {
      border: none;
      display: block;
      width: 100px;
      height: 2px;
      background-color: $primary-500;
      margin: 0px auto;
      margin-top: 10px;
    }
    .main-section {
      display: flex;
      margin-top: 20px;
      .left {
        // background-color: lawngreen;
        flex: 1;
        img {
          width: 500px;
          height: auto;
        }
      }
      .right {
        // background-color: salmon;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h2 {
          margin-bottom: 30px;
          color: $primary-500;
        }
        p {
          color: #858585;
          font-weight: light;
        }

        .p-bottom {
          margin-top: 15px;
        }
        .sosmed-link {
          display: flex;
          margin-top: 30px;
          a {
            border: 1px solid $primary-500;
            width: 110px;
            height: 30px;
            border-radius: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: $primary-500;
            margin-right: 20px;
          }
        }
      }
    }
  }
}
</style>
