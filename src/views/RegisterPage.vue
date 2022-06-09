<template>
  <div class="container">
    <div class="left">
      <img src="../assets/img/login-bg.png" alt="" />
      <h2>e<span>Vote</span> Suksesi HIMIT PENS 2021</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="right">
      <div class="nav-login">
        <router-link class="btn-nav btn-masuk" to="/LoginPage">Masuk</router-link>
        <router-link class="btn-nav btn-daftar" to="/RegisterPage">Daftar</router-link>
      </div>
      <div class="branding">
        <router-link to="/">
          <img class="himit-logo" src="https://himitpens.com/img/HIMIT.png" alt="" />
        </router-link>
        <div class="header">e<span class="vote-span">Vote</span> Himit</div>
      </div>
      <div class="login-form">
        <h2 class="form-title">Selamat datang !</h2>
        <p class="form-text">Buat akun anda sekarang</p>
        <form class="main-form">
          <div class="form-group form-name">
            <label for="name">Nama pengguna</label>
            <div class="input-field">
              <i class="far fa-envelope"></i>
              <input type="text" class="form-control" placeholder="Masukkan nama anda" />
            </div>
          </div>
          <div class="form-group form-email">
            <label for="email">Email Pengguna</label>
            <div class="input-field">
              <i class="far fa-envelope"></i>
              <input type="email" class="form-control" placeholder="Masukkan email anda" />
            </div>
          </div>
          <div class="form-group form-nrp">
            <label for="nrp">NRP pengguna</label>
            <div class="input-field">
              <i class="fas fa-th-large"></i>
              <input type="text" class="form-control" placeholder="Masukkan NRP anda" />
            </div>
          </div>
          <div class="form-password">
            <div class="form-group form-first-password">
              <label for="email">Kata sandi</label>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" class="form-control" placeholder="Buat kata sandi" />
                <i class="far fa-eye"></i>
              </div>
            </div>
            <div class="form-group form-confirm-password">
              <label for="email">Ulangi kata sandi</label>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" class="form-control" placeholder="Ulangi kata sandi" />
                <i class="far fa-eye"></i>
              </div>
            </div>
          </div>
          <router-link to="/ErrorPage">
            <button class="btn-submit">Daftar</button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
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
  margin-bottom: 10px;
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
      margin: 50px 50px 30px 0px;
      .btn-nav {
        text-decoration: none;
        color: #fff;
        padding: 5px 20px;
        border-radius: 100px;
        background: $primary-700;
        margin-left: 10px;
      }
      .btn-masuk {
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
      width: 80%;
      margin: 0px auto;
      .form-title {
      }
      .form-text {
        margin-bottom: 10px;
      }
      .main-form {
        .form-password {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          column-gap: 10px;
          // background-color: salmon;
          .form-first-password {
            // background-color: aqua;
          }
          .form-confirm-password {
            // background-color: greenyellow;
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
          margin: 20px 0px;
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
@media (max-width: 1028px) {
  .container {
    .left {
      width: 50%;
      padding: 0px 40px;
    }
    .right {
      width: 50%;
      .login-form {
        width: 80%;
      }
    }
  }
}

@media (max-width: 750px) {
  .container {
    .left {
      display: none;
    }
    .right {
      width: 100%;
    }
  }
}
</style>
