<template>
  <section>
    <div class="contact-section">
      <h2 class="header"><span>Kontak</span> Kami</h2>
      <hr class="line" />
      <div class="main-form">
        <div class="left">
          <div class="top-card">
            <div class="card">
              <mapIcon class="card-icon" />
              <h3 class="card-title">Alamat resmi</h3>
              <p class="card-text">Jl. Raya ITS, Keputih, Kec. Sukolilo, Kota SBY, Jawa Timur 6011</p>
            </div>
            <div class="card">
              <phoneIcon class="phone-icon" />
              <h3 class="card-title">Telepon</h3>
              <p class="card-text">(+62)878-5555-6898</p>
            </div>
          </div>
          <div class="bottom-card">
            <div class="card">
              <emailIcon class="card-icon" />
              <h3 class="card-title">Email</h3>
              <p class="card-text">himitpens@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="right">
          <form class="contact-form">
            <div class="data-form">
              <div class="form-group form-name">
                <label for="name">Nama</label>
                <input type="text" class="form-control" placeholder="masukkan nama anda" />
              </div>
              <div class="form-group form-email">
                <label for="email">Email</label>
                <input type="email" class="form-control" placeholder="masukkan email anda" />
              </div>
            </div>
            <div class="form-group subject">
              <label for="subject">Subject</label>
              <input type="text" class="form-control" placeholder="subjek pesan" />
            </div>
            <div class="form-group message">
              <label for="message">Pesan</label>
              <textarea name="message" id="message" class="form-control" placeholder="isi pesan anda disini..."></textarea>
            </div>
            <div class="btn-group">
              <button class="btn-send">Kirim</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emailIcon from "../assets/img/email-icon.svg";
import phoneIcon from "../assets/img/phone-icon.svg";
import mapIcon from "../assets/img/map-icon.svg";
export default {
  name: "ContactSectionLp",
  components: { emailIcon, phoneIcon, mapIcon },
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "modules/variables";

//GLOBAL
.card {
  width: 225px;
  height: 170px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;
  cursor: pointer;

  &:hover {
    transform: scale(0.95, 0.95);
    transition: 0.4s;
  }
}

textarea:focus,
input:focus {
  outline: none;
  border: darkturquoise;
  box-shadow: 0 0 4px 0 $primary-500;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  label {
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    height: 30px;
    border: 0.5px solid #d5edfe;
    box-sizing: border-box;
    border-radius: 8px;
    padding-left: 10px;
  }

  textarea {
    width: 100%;
    height: 120px;
    resize: none;
    padding-top: 5px;
    padding-left: 10px;
    border: 0.5px solid #d5edfe;
    border-radius: 8px;
  }
}

//STYLING
section {
  .contact-section {
    width: 80%;
    margin: 0px auto;
    font-family: $base-font;
    font-size: 14px;

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

    .main-form {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      margin-top: 20px;
      gap: 20px;
      .left {
        display: flex;
        flex-direction: column;
        .top-card {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          row-gap: 20px;
        }
        .bottom-card {
          margin-top: 30px;
        }
      }
      .right {
        .contact-form {
          width: 500px;
          height: 390px;
          background: #ffffff;
          box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          padding: 20px 20px;
          .data-form {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            .form-name {
              flex: 1;
            }
            .form-email {
              flex: 1;
            }
          }
          .btn-group {
            width: 100%;
            display: flex;
            justify-content: center;
            .btn-send {
              padding: 7px 45px;
              text-align: center;
              border: none;
              display: inline-block;
              font-size: 16px;
              cursor: pointer;
              background: $primary-500;
              border-radius: 9px;
              color: #fff;
              &:hover {
                transform: scale(0.95, 0.95);
                transition: 0.4s;
                box-shadow: 0 5px 12px 0 rgba($color: $primary-500, $alpha: 0.5);
              }
            }
          }
        }
      }
    }
  }
}

//RESPOSIVE BREAKPOINT
@media (max-width: 1250px) {
}
@media (max-width: 1028px) {
  section {
    .contact-section {
      width: 90;
    }
  }
}
@media (max-width: 750px) {
}
@media (max-width: 550px) {
  section {
    width: 95%;

    .contact-section {
      .main-form {
        .left {
          place-self: center;
        }
        .right {
          place-self: center;
          .contact-form {
            width: 350px;
            height: 500px;
            .data-form {
              display: flex;
              flex-direction: column;
              gap: 0;
            }
          }
        }
      }
    }
  }
}
</style>
