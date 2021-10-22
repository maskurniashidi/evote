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
              <div class="form-group name">
                <label for="name">Nama</label>
                <input type="text" class="form-control" placeholder="masukkan nama anda" />
              </div>
              <div class="form-group email">
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
  width: 275px;
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

section {
  .contact-section {
    width: 80%;
    margin: 0px auto;
    font-family: $base-font;

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
      display: flex;
      margin-top: 20px;
      .left {
        flex: 1;
        display: flex;
        flex-direction: column;
        .top-card {
          display: flex;
          justify-content: space-between;
        }
        .bottom-card {
          margin-top: 30px;
        }
      }
      .right {
        flex: 1;
        .contact-form {
          width: 600px;
          height: 390px;
          margin-left: 20px;
          background: #ffffff;
          box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
          border-radius: 20px;
        }
      }
    }
  }
}
</style>
