<template>
  <footer>
    <div class="container">
      <!-- LEFT FOOTER -->
      <div class="left-footer">
        <div class="branding">
          <img class="logo-himit" src="https://himitpens.com/img/HIMIT.png" alt="logo himit" />
          <h3 class="header">e<span class="vote-span">Vote</span> Himit</h3>
        </div>
        <p class="left-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        <p class="copyright">&copy;copyright 2021 All rights reserved</p>
      </div>

      <!-- MID FOOTER -->
      <div class="mid-footer">
        <h3 class="mid-title">Website</h3>
        <ul>
          <li>
            <router-link class="link" to="#">Pengembang aplikasi</router-link>
          </li>
          <li>
            <router-link class="link" to="#">Fitur aplikasi</router-link>
          </li>
          <li>
            <router-link class="link" to="#">Kontak Kami</router-link>
          </li>
        </ul>
      </div>

      <!-- RIGHT FOOTER -->
      <div class="right-footer">
        <h3>Media sosial kami</h3>
        <div class="social-media-list">
          <ul>
            <li>
              <i class="fab fa-twitter"></i>
              <router-link class="link" to="#">Himit PENS</router-link>
            </li>
            <li>
              <i class="fab fa-instagram"></i>
              <router-link class="link" to="#">Himit PENS</router-link>
            </li>
          </ul>
          <ul>
            <li>
              <i class="fab fa-youtube"></i>
              <router-link class="link" to="#">Himit PENS</router-link>
            </li>
            <li>
              <i class="fab fa-facebook"></i>
              <router-link class="link" to="#">Himit PENS</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
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

//GLOBAL
li {
  list-style: none;
  margin: 25px 0px;
}

.link {
  color: $light-color;
  font-size: 18px;
  transform: to-lower-case($string: "");
  text-transform: capitalize;
  &:hover {
    color: $secondary-color;
    font-weight: 500;
  }
}

h3 {
  font-size: 20px;
  font-weight: 500;
}

//STYLING
footer {
  margin-top: 100px;
  width: 100%;
  background: linear-gradient(183.41deg, $third-color -8.57%, $base-color 82.96%);
  font-family: $base-font;
  color: $light-color;
  .container {
    width: 80%;
    height: 484px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    .left-footer {
      height: 223px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .branding {
        display: flex;
        .logo-himit {
          width: 44px;
          height: auto;
        }
        .header {
          font-weight: 500;
          font-size: 24px;
          line-height: 36px;
          color: $light-color;
          margin-left: 10px;

          span {
            color: $secondary-color;
          }
        }
      }
      .left-description {
        font-size: 18px;
      }
      .copyright {
        font-size: 16px;
      }
    }

    .mid-footer {
      height: 223px;
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: 30px;
      h3 {
      }
    }

    .right-footer {
      height: 223px;
      flex: 1;
      height: 223px;
      flex-direction: column;
      .social-media-list {
        display: flex;
        ul {
          flex: 1;
          li {
            display: flex;
            align-items: center;
            .link {
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
}

//RESPONSIVE BREAKPOINT
//TABLET/MOBILE
@media (max-width: 750px) {
  .link {
    font-size: 14px;
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
  }
  footer {
    .container {
      width: 90%;
      flex-direction: column;
      align-items: flex-start;
      height: 484px;
      .left-footer {
        width: 100%;
        justify-content: flex-start;
        margin-top: 20px;
        .branding {
          .logo-himit {
          }
          .header {
            font-weight: 700;
            font-size: 18px;
            span {
            }
          }
        }
        .left-description {
          margin-top: 15px;
          font-size: 14px;
        }
        .copyright {
          font-size: 14px;
          margin-top: 15px;
        }
      }

      .mid-footer {
        width: 100%;
        margin-left: 0px;
        h3 {
          margin-top: 20px;
        }
      }

      .right-footer {
        width: 100%;
        .social-media-list {
          ul {
            li {
              .link {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
