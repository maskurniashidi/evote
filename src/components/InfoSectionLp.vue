<template>
  <main>
    <div class="info-section">
      <h2 class="header"><span>Pengembang</span> Aplikasi</h2>
      <hr class="line" />
      <div class="main-section">
        <div class="left">
          <img src="../assets/img/vote-character.png" alt="" width="600" height="400" />
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
            <a class="sosmed-link-1" target="_blank" href="https://www.instagram.com/himitpens/">Instagram</a>
            <a class="sosmed-link-2" target="_blank" href="https://www.facebook.com/himitpens">Facebook</a>
            <a class="sosmed-link-3" target="_blank" href="https://www.youtube.com/c/HIMITPENS">Youtube</a>
            <a class="sosmed-link-4" target="_blank" href="https://twitter.com/himitpens">Twitter</a>
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
  .info-section {
    width: 80%;
    margin: 0px auto;
    font-family: $base-font;
    font-size: 16px;
    // background-color: aqua;
    .header {
      text-align: center;
      font-weight: medium;
      font-size: 32px;
      span {
        color: $primary-500;
      }
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
          max-width: 100%;
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
            &:hover {
              background: $primary-500;
              color: whitesmoke;
              box-shadow: 0 5px 12px 0 rgba($color: $primary-500, $alpha: 0.5);
            }
          }
        }
      }
    }
  }
}

//RESPONSIVE BREAKPOINT
@media (max-width: 1250px) {
  main {
    .info-section {
      width: 90%;
      .header {
      }
      .line {
      }
      .main-section {
        .left {
          img {
          }
        }
        .right {
          h2 {
          }
          p {
          }

          .p-bottom {
          }
          .sosmed-link {
            a {
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1028px) {
  main {
    .info-section {
      .header {
      }
      .line {
      }
      .main-section {
        flex-direction: column;
        .left {
          display: flex;
          justify-content: center;
          img {
          }
        }
        .right {
          h2 {
            text-align: center;
          }
          p {
            text-align: center;
          }
          .p-bottom {
          }

          .sosmed-link {
            justify-content: center;
            a {
            }
          }
        }
      }
    }
  }
}

@media (max-width: 750px) {
  main {
    .info-section {
      .header {
      }
      .line {
      }
      .main-section {
        .left {
          img {
            display: none;
          }
        }
        .right {
          h2 {
            text-align: start;
          }
          p {
            text-align: start;
          }

          .p-bottom {
          }
          .sosmed-link {
            display: grid;
            grid-template-columns: repeat(2, 120px);
            gap: 20px;
            justify-content: start;
            a {
            }
          }
        }
      }
    }
  }
}

@media (max-width: 550px) {
  main {
    .info-section {
      width: 95%;
      .header {
        font-size: 28px;
      }
      .line {
      }
      .main-section {
        .left {
          img {
          }
        }
        .right {
          h2 {
            font-size: 20px;
            font-weight: 500;
          }
          p {
            font-size: 14px;
          }

          .p-bottom {
          }
          .sosmed-link {
            a {
            }
          }
        }
      }
    }
  }
}
</style>
