<template>
  <div class="container">
    <div class="left">
      <img src="../assets/img/login-bg.png" alt="" />
      <h2>e<span>Vote</span> Suksesi HIMIT PENS 2022</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="right">
      <div class="nav-login">
        <router-link class="btn-nav btn-masuk" to="/LoginPage">Masuk</router-link>
        <router-link class="btn-nav btn-daftar" to="/LoginPage">Daftar</router-link>
      </div>
      <div class="branding">
        <router-link to="/">
          <img class="himit-logo" src="https://himitpens.com/img/HIMIT.png" alt="" />
        </router-link>
        <div class="header">e<span class="vote-span">Vote</span> Himit</div>
      </div>
      <div class="login-form">
        <h2 class="form-title">Selamat datang !</h2>
        <p class="form-text">Masuk ke akun anda</p>
        <form class="main-form">
          <div class="form-group form-email">
            <label for="email">Email</label>
            <div class="input-field">
              <i class="far fa-envelope"></i>
              <input type="email" class="form-control" placeholder="masukkan email anda" />
            </div>
          </div>
          <div class="form-group form-password">
            <label for="email">Password</label>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" class="form-control" placeholder="masukkan password anda" />
              <i class="far fa-eye"></i>
            </div>
            <router-link class="forget-password" to="/ErrorPage">Lupa kata sandi ?</router-link>
          </div>
          <router-link to="/ErrorPage">
            <button class="btn-submit">Masuk</button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  components: {},
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "../components/modules/variables";

//GLOBAL
input:focus {
  outline: none;
}

::-webkit-input-placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: $secondary-300;
  opacity: 0.8;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  label {
    margin-bottom: 5px;
  }
  .input-field {
    width: 100%;
    background: $primary-700;
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 8px;
    i {
      margin: 0px 10px;
    }
    input {
      width: 100%;
      background: transparent;
      border: none;
      outline: none;
      color: $secondary-300;
    }
    input:hover {
    }
  }
}

//STYLING
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  .left {
    width: 60%;
    min-height: 100vh;
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
      text-align: center;
      span {
        color: $primary-900;
      }
    }
    p {
      font-size: 16px;
      text-align: center;
      color: $secondary-500;
    }
  }

  .right {
    width: 40%;
    min-height: 100vh;
    background: $primary-500;
    box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
    display: flex;
    flex-direction: column;
    font-family: $base-font;
    color: #fff;
    .nav-login {
      align-self: flex-end;
      margin: 50px;
      .btn-nav {
        text-decoration: none;
        color: #fff;
        padding: 5px 20px;
        border-radius: 100px;
        background: $primary-700;
        margin-left: 10px;
      }
      .btn-daftar {
        background-color: transparent;
        border: 1.5px solid #fff;
        padding: 3.5px 18.5px;
        &:hover {
          text-decoration: none;
          color: #fff;
          padding: 5px 20px;
          border-radius: 100px;
          background: $primary-700;
          margin-left: 10px;
          border: none;
        }
      }
    }
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

    .login-form {
      width: 60%;
      margin: 0px auto;
      .form-title {
      }
      .form-text {
        margin-bottom: 10px;
      }
      .main-form {
        .form-password {
          .forget-password {
            align-self: flex-end;
            margin-top: 10px;
            text-decoration: none;
            color: #fff;
            &:hover {
              color: $primary-700;
            }
          }
        }
        .btn-submit {
          width: 100%;
          text-align: center;
          border: none;
          display: inline-block;
          font-size: 16px;
          cursor: pointer;
          background: $netral-100;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 40px;
          color: $primary-700;
          padding: 7px 0px;
          &:hover {
            transition: 0.2s;
            box-shadow: 0 5px 12px 0 rgba($color: $primary-500, $alpha: 0.5);
            background: $primary-700;
            color: #fff;
          }
        }
      }
    }
  }
}

//RESPONSIVE BREAKPOINT
@media (max-width: 1250px) {
  //STYLING
  .container {
    .left {
      img {
      }
      h2 {
        span {
        }
      }
      p {
      }
    }

    .right {
      .nav-login {
        .btn-nav {
        }
        .btn-daftar {
          &:hover {
          }
        }
      }
      .branding {
        .himit-logo {
        }
        .header {
        }
        span {
        }
      }

      .login-form {
        .form-title {
        }
        .form-text {
        }
        .main-form {
          .form-password {
            .forget-password {
              &:hover {
              }
            }
          }
          .btn-submit {
            &:hover {
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1028px) {
  .container {
    .left {
      width: 50%;
      padding: 0px 40px;
      img {
      }
      h2 {
        span {
        }
      }
      p {
      }
    }

    .right {
      width: 50%;
      .nav-login {
        .btn-nav {
        }
        .btn-daftar {
          &:hover {
          }
        }
      }
      .branding {
        .himit-logo {
        }
        .header {
        }
        span {
        }
      }

      .login-form {
        width: 80%;
        .form-title {
        }
        .form-text {
        }
        .main-form {
          .form-password {
            .forget-password {
              &:hover {
              }
            }
          }
          .btn-submit {
            &:hover {
            }
          }
        }
      }
    }
  }
}
@media (max-width: 750px) {
  .container {
    .left {
      display: none;
      img {
      }
      h2 {
        span {
        }
      }
      p {
      }
    }

    .right {
      width: 100%;
      .nav-login {
        .btn-nav {
        }
        .btn-daftar {
          &:hover {
          }
        }
      }
      .branding {
        .himit-logo {
        }
        .header {
        }
        span {
        }
      }

      .login-form {
        .form-title {
        }
        .form-text {
        }
        .main-form {
          .form-password {
            .forget-password {
              &:hover {
              }
            }
          }
          .btn-submit {
            &:hover {
            }
          }
        }
      }
    }
  }
}
@media (max-width: 550px) {
  .container {
    .left {
      img {
      }
      h2 {
        span {
        }
      }
      p {
      }
    }

    .right {
      .nav-login {
        .btn-nav {
        }
        .btn-daftar {
          &:hover {
          }
        }
      }
      .branding {
        .himit-logo {
        }
        .header {
        }
        span {
        }
      }

      .login-form {
        .form-title {
        }
        .form-text {
        }
        .main-form {
          .form-password {
            .forget-password {
              &:hover {
              }
            }
          }
          .btn-submit {
            &:hover {
            }
          }
        }
      }
    }
  }
}
</style>
