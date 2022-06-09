<template>
  <div class="profile-main-card">
    <h2>Lihat Profile</h2>
    <div class="profile-card-container">
      <h3>Informasi personal</h3>
      <div class="profile-card-container-main">
        <div class="profile-card-container-main-left">
          <div class="profile-pic">
            <label class="-label" for="file">
              <span class="glyphicon glyphicon-camera"></span>
              <span>Ubah</span>
            </label>
            <input id="file" type="file" @change="loadFile" />
            <img src="https://cdn.pixabay.com/photo/2017/08/06/21/01/louvre-2596278_960_720.jpg" id="output" width="200" />
          </div>
        </div>
        <div class="profile-card-container-main-right">
          <div class="profile-form">
            <div class="profile-input-field">
              <label for="name">Nama Pengguna</label>
              <div class="profile-input-handler">
                <input type="text" value="Maskurnia Shidi" :disabled="disabled == 0" />
                <button @click="disabled = (disabled + 1) % 2">
                  <i class="fas fa-pencil-alt"></i>
                </button>
              </div>
            </div>
            <div class="profile-input-field">
              <label for="email">Email Pengguna</label>
              <div class="profile-input-handler">
                <input type="email" value="maskurshidi12@gmail.com" :disabled="disabled == 0" />
                <button @click="disabled = (disabled + 1) % 2">
                  <i class="fas fa-pencil-alt"></i>
                </button>
              </div>
            </div>
            <div class="profile-input-field">
              <label for="nrp">NRP</label>
              <div class="profile-input-handler">
                <input type="text" value="2110191026" :disabled="disabled == 0" />
                <button @click="disabled = (disabled + 1) % 2">
                  <i class="fas fa-pencil-alt"></i>
                </button>
              </div>
            </div>
            <div class="profile-input-field">
              <label for="class">Kelas Asal</label>
              <div class="profile-input-handler">
                <input type="text" value="3 D4 Teknik Informatika" :disabled="disabled == 0" />
                <button @click="disabled = (disabled + 1) % 2">
                  <i class="fas fa-pencil-alt"></i>
                </button>
              </div>
            </div>
            <div class="profile-input-field">
              <label for="password">Kata sandi</label>
              <div class="profile-input-handler">
                <input type="password" value="12345656767" :disabled="disabled == 0" />
                <button @click="disabled = (disabled + 1) % 2">
                  <i class="fas fa-pencil-alt"></i>
                </button>
              </div>
            </div>
            <button class="btn-edit-profile">Selesai</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  components: {},
  data() {
    return {
      disabled: 0,
    };
  },
  methods: {
    loadFile() {
      var image = document.getElementById("output");
      image.src = URL.createObjectURL(event.target.files[0]);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./modules/variables";

//Mixin
@mixin object-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

$circleSize: 150px;
$radius: 50%;
$shadow: 0 0 10px 0 rgba(255, 255, 255, 0.35);
$fontColor: rgb(250, 250, 250);

input:focus {
  outline: none;
}

.profile-main-card {
  .profile-card-container {
    background: #ffffff;
    box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
    border-radius: 8px;
    padding: 20px 50px;
    margin-top: 10px;
    .profile-card-container-main {
      display: flex;
      margin-top: 20px;
      &-left {
        h3 {
        }
        .profile-pic {
          color: transparent;
          transition: all 0.3s ease;
          @include object-center;
          position: relative;
          justify-content: flex-start;
          transition: all 0.3s ease;

          input {
            display: none;
          }

          img {
            position: absolute;
            object-fit: cover;
            width: $circleSize;
            height: $circleSize;
            box-shadow: $shadow;
            border-radius: $radius;
            z-index: 0;
          }

          .-label {
            cursor: pointer;
            height: $circleSize;
            width: $circleSize;
          }

          &:hover {
            .-label {
              @include object-center;
              background-color: rgba(0, 0, 0, 0.8);
              z-index: 10000;
              color: $fontColor;
              transition: background-color 0.2s ease-in-out;
              border-radius: $radius;
              margin-bottom: 0;
            }
          }

          span {
            display: inline-flex;
            padding: 0.2em;
            height: 2em;
          }
        }
      }

      &-right {
        flex: 1;
        .profile-form {
          display: flex;
          flex-direction: column;
          margin-left: 50px;
          .profile-input-field {
            width: 100%;
            margin-bottom: 10px;
            label {
            }
            .profile-input-handler {
              border: 1px solid #8f959d;
              box-sizing: border-box;
              border-radius: 8px;
              overflow: hidden;
              display: flex;
              align-items: center;
              padding: 5px 10px;
              input {
                flex: 1;
                background: transparent;
                border: none;
              }
              button {
                background: transparent;
                border: none;
                cursor: pointer;
                outline: none;
              }
            }
          }
          .btn-edit-profile {
            background: #2f80ec;
            border-radius: 8px;
            color: #ffffff;
            padding: 5px 30px;
            align-self: flex-end;
            border: none;
            cursor: pointer;
          }
        }
      }
    }
  }
}

@media (max-width: 750px) {
  .profile-main-card {
    .profile-card-container {
      h3 {
        text-align: center;
      }
      .profile-card-container-main {
        display: flex;
        flex-direction: column;
        &-left {
          width: 100%;
          @include object-center;
        }
        &-right {
          width: 100%;
          margin: 20px 0px;
          .profile-form {
            margin-left: 0px;
          }
        }
      }
    }
  }
}
</style>
