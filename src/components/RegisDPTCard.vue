<template>
  <div class="regis-dpt-main-card">
    <h2>Pendaftaran DPT</h2>
    <div class="regis-dpt-card-container">
      <h3>Registrasi Pemilihan</h3>
      <div class="regis-dpt-card-container-main">
        <div class="regis-dpt-card-container-main-left">
          <div class="regis-dpt-pic">
            <label class="-label" for="file">
              <span class="glyphicon glyphicon-camera"></span>
              <span>Ubah</span>
            </label>
            <input id="file" type="file" @change="loadFile" />
            <img src="../assets/img/upload-img-ktm.png" id="output" width="200" />
          </div>
          <div class="info-left-regis-dpt">
            <h3>Hal yang disiapkan</h3>
            <ul>
              <li>Kartu tanda mahasiswa (KTM)</li>
              <li>PENS Attendance</li>
              <li>Webcam</li>
            </ul>
          </div>
        </div>
        <div class="regis-dpt-card-container-main-right">
          <div class="regis-dpt-form">
            <div class="regis-dpt-input-field">
              <label for="name">Nama Pemilih</label>
              <div class="regis-dpt-input-handler">
                <input type="text" placeholder="Masukkan nama anda" />
              </div>
            </div>
            <div class="regis-dpt-input-field">
              <label for="pihak">Asal kelas</label>
              <div class="regis-dpt-input-handler">
                <input type="text" placeholder="Asal kelas anda" />
              </div>
            </div>
            <div class="regis-dpt-input-field">
              <label for="nrp">Kontak</label>
              <div class="regis-dpt-input-handler">
                <input type="text" placeholder="Masukkan kontak yang dapat dihubungi" />
              </div>
            </div>
            <div class="regis-dpt-input-field checkbox-dpt">
              <input type="checkbox" />
              <label for="privacy">Dengan ini saya menyatakan siap menjadi daftar pemilih tetap dalam Suksesi HIMIT PENS 2021, dan menerima segala kebijakan yang telah ditentukan.</label>
            </div>
            <button class="btn-edit-regis-dpt">Selesai</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisDPTCard",
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
$shadow: 0 0 10px 0 rgba(255, 255, 255, 0.35);
$fontColor: rgb(250, 250, 250);

input:focus {
  outline: none;
}

textarea {
  width: 100%;
  height: 120px;
  resize: none;
  border: none;
}

.regis-dpt-main-card {
  .regis-dpt-card-container {
    background: #ffffff;
    box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
    border-radius: 8px;
    padding: 20px 50px;
    margin-top: 10px;
    .regis-dpt-card-container-main {
      display: flex;
      margin-top: 20px;
      &-left {
        h3 {
        }
        .regis-dpt-pic {
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
              margin-bottom: 0;
            }
          }

          span {
            display: inline-flex;
            padding: 0.2em;
            height: 2em;
          }
        }

        .info-left-regis-dpt {
          margin-top: 20px;
          margin-left: 20px;
          h3 {
            font-size: 18px;
          }
          ul {
            li {
              font-size: 14px;
            }
          }
        }
      }

      &-right {
        flex: 1;
        .regis-dpt-form {
          display: flex;
          flex-direction: column;
          margin-left: 50px;
          .regis-dpt-input-field {
            width: 100%;
            margin-bottom: 10px;
            label {
            }
            .regis-dpt-input-handler {
              border: 1px solid #8f959d;
              box-sizing: border-box;
              border-radius: 8px;
              overflow: hidden;
              padding: 5px 10px;
              input {
                background: transparent;
                border: none;
                width: 100%;
              }
            }
          }

          .checkbox-dpt {
            input {
            }
            label {
              margin-left: 10px;
              font-size: 14px;
            }
          }
          .btn-edit-regis-dpt {
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
  .regis-dpt-main-card {
    .regis-dpt-card-container {
      h3 {
        text-align: center;
      }
      .regis-dpt-card-container-main {
        display: flex;
        flex-direction: column;
        &-left {
          width: 100%;
          @include object-center;
          display: flex;
          flex-direction: column;
        }
        &-right {
          width: 100%;
          margin: 20px 0px;
          .regis-dpt-form {
            margin-left: 0px;
          }
        }
      }
    }
  }
}
</style>
