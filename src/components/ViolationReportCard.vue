<template>
  <div class="violation-report-main-card">
    <h2>Laporkan pelanggaran</h2>
    <div class="violation-report-card-container">
      <h3>Informasi pelanggaran</h3>
      <div class="violation-report-card-container-main">
        <div class="violation-report-card-container-main-left">
          <div class="violation-report-pic">
            <label class="-label" for="file">
              <span class="glyphicon glyphicon-camera"></span>
              <span>Ubah</span>
            </label>
            <input id="file" type="file" @change="loadFile" />
            <img src="../assets/img/upload-img.png" id="output" width="200" />
          </div>
        </div>
        <div class="violation-report-card-container-main-right">
          <div class="violation-report-form">
            <div class="violation-report-input-field">
              <label for="name">Nama Pengguna</label>
              <div class="violation-report-input-handler">
                <input type="text" placeholder="Masukkan nama anda" />
              </div>
            </div>
            <div class="violation-report-input-field">
              <label for="pihak">Pihak terlapor</label>
              <div class="violation-report-input-handler">
                <input type="text" placeholder="Masukkan nama pihak terlapor" />
              </div>
            </div>
            <div class="violation-report-input-field">
              <label for="nrp">Kontak</label>
              <div class="violation-report-input-handler">
                <input type="text" placeholder="Masukkan kontak yang dapat dihubungi" />
              </div>
            </div>
            <div class="violation-report-input-field">
              <label for="des-pelanggaran">Deskripsi pelanggaran</label>
              <div class="violation-report-input-handler">
                <textarea name="message" id="message" class="form-control" placeholder="Masukkan detail informasi pelanggaran"></textarea>
              </div>
            </div>
            <button class="btn-edit-violation-report">Selesai</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViolationReportCard",
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

input:focus,
textarea:focus {
  outline: none;
}

textarea {
  width: 100%;
  height: 120px;
  resize: none;
  border: none;
}

.violation-report-main-card {
  .violation-report-card-container {
    background: #ffffff;
    box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
    border-radius: 8px;
    padding: 20px 50px;
    margin-top: 10px;
    .violation-report-card-container-main {
      display: flex;
      margin-top: 20px;
      &-left {
        h3 {
        }
        .violation-report-pic {
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
      }

      &-right {
        flex: 1;
        .violation-report-form {
          display: flex;
          flex-direction: column;
          margin-left: 50px;
          .violation-report-input-field {
            width: 100%;
            margin-bottom: 10px;
            label {
            }
            .violation-report-input-handler {
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
          .btn-edit-violation-report {
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
  .violation-report-main-card {
    .violation-report-card-container {
      h3 {
        text-align: center;
      }
      .violation-report-card-container-main {
        display: flex;
        flex-direction: column;
        &-left {
          width: 100%;
          @include object-center;
        }
        &-right {
          width: 100%;
          margin: 20px 0px;
          .violation-report-form {
            margin-left: 0px;
          }
        }
      }
    }
  }
}
</style>
