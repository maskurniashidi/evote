<template>
  <div class="select-paslon-view">
    <header>
      <nav class="container">
        <div class="branding">
          <router-link to="/">
            <img class="himit-logo" src="https://himitpens.com/img/HIMIT.png" alt="" />
          </router-link>
          <div class="header">e<span class="vote-span">Vote</span> Himit</div>
        </div>
      </nav>
    </header>

    <div class="paslon-view-content">
      <div class="paslon-view-content-top">
        <h2>Pemungutan suara Suksesi HIMIT PENS 2021</h2>
      </div>
      <div class="timer-select">
        <h3>Waktu tersisa</h3>
        <h4>05:00</h4>
      </div>

      <div class="paslon-view-content-bottom">
        <div class="left-paslon">
          <div class="picture-paslon">
            <img src="../assets/img/paslon1-select.png" alt="" />
          </div>
          <div class="visi-misi">
            <h2>Rifki yudha dan george mattew</h2>
            <div class="tab">
              <input type="checkbox" id="chck4" />
              <label class="tab-label" for="chck4">Visi Paslon</label>
              <div class="tab-content">
                <ul class="lists-visi">
                  <li>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
              </div>
            </div>
            <div class="tab">
              <input type="checkbox" id="chck5" />
              <label class="tab-label" for="chck5">Misi Paslon</label>
              <div class="tab-content">
                <ul class="lists-visi">
                  <li>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="right-paslon">
          <div class="picture-paslon">
            <img src="../assets/img/paslon2-select.png" alt="" />
          </div>
          <div class="visi-misi">
            <h2>Rifki yudha dan george mattew</h2>
            <div class="tab">
              <input type="checkbox" id="chck6" />
              <label class="tab-label" for="chck6">Visi Paslon</label>
              <div class="tab-content">
                <ul class="lists-visi">
                  <li>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
              </div>
            </div>
            <div class="tab">
              <input type="checkbox" id="chck7" />
              <label class="tab-label" for="chck7">Misi Paslon</label>
              <div class="tab-content">
                <ul class="lists-visi">
                  <li>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button type="submit" class="btn-pilih" @click="openModal">Selesai</button>
    <modal v-show="isModalVisible" @close-modal="closeModal" />
    <button v-on:click="countDownTimer()">{{ countDown }}</button>
  </div>
</template>

<script>
import modal from "../components/Modal.vue";
export default {
  name: "SelectPaslon",
  components: { modal },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "../components/modules/variables";
//variable
$base-font: "Poppins", sans-serif;
$base-color: #2f80ec;
$secondary-color: #0d397a;
$light-color: #ffffff;
.select-paslon-view {
  background: #f5f8fa;
  header {
    background-color: $base-color;
    font-family: $base-font;
    width: 100%;
    height: 90px;
    box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
    nav {
      width: 80%;
      height: 90px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      .branding {
        flex: 1;
        //   background-color: greenyellow;
        display: flex;
        align-items: center;
        .himit-logo {
          width: 60px;
          height: auto;
          cursor: pointer;
        }
        .header {
          font-size: 36px;
          line-height: 72px;
          font-weight: normal;
          color: $light-color;
          margin-left: 10px;
          cursor: pointer;

          span {
            color: $secondary-color;
          }
        }
      }
    }
  }

  .paslon-view-content {
    width: 100%;
    margin: 0px auto;
    &-top {
      display: flex;
      align-items: center;
      margin-top: 20px;
      h2 {
        flex: 1;
        text-align: center;
      }
    }

    .timer-select {
      display: flex;
      width: 150px;
      position: relative;
      left: 70%;
      flex-direction: column;
      align-items: center;
      margin: 20px 0px;
      background: #eaeaea;
      border-radius: 8px;
      overflow: hidden;
      h3 {
        background: #ffd693;
        width: 100%;
        text-align: center;
        padding: 10px 0px;
        color: white;
      }
      h4 {
        padding: 5px 0px;
      }
    }

    &-bottom {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 50px;
      width: 80%;
      margin: 0px auto;
      margin: 0px auto;
      margin-bottom: 50px;
      .left-paslon {
        flex: 1;
        justify-self: center;
        .picture-paslon {
          img {
            width: 80%;
            height: auto;
          }
        }
        .visi-misi {
          width: 80%;
          margin-top: 20px;
          background: #ffffff;
          box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
          border-radius: 8px;
          overflow: hidden;
          h2 {
            padding: 10px 0px;
            background: #81bff9;
            color: #fff;
            font-size: 18px;
            text-align: center;
          }
          .tab {
            width: 100%;
            color: #000;
            overflow: hidden;
            input {
              position: absolute;
              opacity: 0;
              z-index: -1;
            }

            &-label {
              display: flex;
              justify-content: space-between;
              padding: 1em;
              font-weight: 300;
              cursor: pointer;
              display: flex;
              align-items: center;
              &:hover {
              }
              &::after {
                content: "\276F";
                width: 1em;
                height: 1em;
                padding: 8px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                transition: all 0.35s;
                background: #d5edfe;
              }
            }

            &-content {
              max-height: 0;
              transition: all 0.35s;
              border-top: 1px solid #f5f8fa;
              ul {
                list-style: none;
                padding: 0px 10px;
                li {
                  margin: 5px 0px;
                }
              }
            }
          }

          input:checked {
            + .tab-label {
              &::after {
                transform: rotate(90deg);
              }
            }
            ~ .tab-content {
              max-height: 100vh;
              padding: 1em;
            }
          }
        }
      }
      .right-paslon {
        justify-self: center;
        overflow: hidden;
        .picture-paslon {
          img {
            width: 80%;
            height: auto;
          }
        }
        .visi-misi {
          width: 80%;
          margin-top: 20px;
          background: #ffffff;
          /* Shadow */

          box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
          border-radius: 8px;
          overflow: hidden;
          h2 {
            padding: 10px 0px;
            background: #81bff9;
            color: #fff;
            font-size: 18px;
            text-align: center;
          }
          .tab {
            width: 100%;
            color: #000;
            overflow: hidden;
            input {
              position: absolute;
              opacity: 0;
              z-index: -1;
            }

            &-label {
              display: flex;
              justify-content: space-between;
              padding: 1em;
              font-weight: 300;
              cursor: pointer;
              display: flex;
              align-items: center;
              &:hover {
              }
              &::after {
                content: "\276F";
                width: 1em;
                height: 1em;
                padding: 8px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                transition: all 0.35s;
                background: #d5edfe;
              }
            }

            &-content {
              max-height: 0;
              transition: all 0.35s;
              border-top: 1px solid #f5f8fa;
              ul {
                list-style: none;
                padding: 0px 10px;
                li {
                  margin: 5px 0px;
                }
              }
            }
          }

          input:checked {
            + .tab-label {
              &::after {
                transform: rotate(90deg);
              }
            }
            ~ .tab-content {
              max-height: 100vh;
              padding: 1em;
            }
          }
        }
      }
    }
  }
  .btn-pilih {
    background: $primary-500;
    color: #fff;
    text-decoration: none;
    border-radius: 40px;
    width: 30%;
    margin: 0px auto;
    display: flex;
    padding: 10px 0px;
    justify-content: center;
    margin-bottom: 50px;
    font-family: $base-font;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    border: none;
  }
}
</style>
