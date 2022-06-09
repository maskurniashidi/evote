<template>
  <div class="detail-paslon-card">
    <div class="detail-paslon-card-left">
      <div class="left-top">
        <img src="../assets/img/paslon2.png" alt="" />
        <h3>Pasangan calon 02</h3>
        <p>Kampanye</p>
        <div class="progress-campaign">
          <div class="progress-field field-1">
            <p>Safari</p>
            <div class="progress-border">
              <div class="progress-fill">10</div>
            </div>
          </div>
          <div class="progress-field field-2">
            <p>Media</p>
            <div class="progress-border">
              <div class="progress-fill">4</div>
            </div>
          </div>
          <div class="progress-field field-3">
            <p>Komunitas</p>
            <div class="progress-border">
              <div class="progress-fill">12</div>
            </div>
          </div>
        </div>
      </div>

      <div class="left-mid">
        <h2>Rifki yudha dan george mattew</h2>
        <div class="tab">
          <input type="checkbox" id="chck2" />
          <label class="tab-label" for="chck2">Visi Paslon</label>
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
          <input type="checkbox" id="chck3" />
          <label class="tab-label" for="chck3">Misi Paslon</label>
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
      <div class="left-bottom">
        <div class="berkas-card">
          <div class="left-card">
            <i class="fas fa-folder" style="color:blue"></i>
            <p>Curriculum Vitae</p>
          </div>
          <i class="fas fa-chevron-circle-right"></i>
        </div>
        <div class="notulensi-card">
          <div class="left-card">
            <i class="fas fa-file" style="color:orange"></i>
            <p>Rancangan Strategis</p>
          </div>
          <i class="fas fa-chevron-circle-right"></i>
        </div>
      </div>
    </div>

    <div class="detail-paslon-card-right">
      <div class="right-top">
        <div class="profile">
          <img src="../assets/img/paslon1-profile.png" alt="" />
          <div class="profile-info">
            <h3>Rifki yudha asmara rindu</h3>
            <p>3 D4 Teknik Informatika A</p>
          </div>
        </div>
        <div class="education">
          <h4>Riwayat Pendidikan</h4>
          <div class="years-education">
            <p>2013-2016</p>
            <p>2016-2019</p>
            <p>2019-saat ini</p>
          </div>
        </div>
        <div class="organisation">
          <h4>Pengalaman Organisasi</h4>
          <div class="list-organisation">
            <p>Staf muda departemen PSDM HIMIT PENS 2019</p>
            <p>Staf ahli departemen PSDM HIMIT PENS 2020</p>
            <p>PJ online bounding HIMIT PENS 2020</p>
          </div>
        </div>
      </div>
      <div class="right-bottom">
        <div class="profile">
          <img src="../assets/img/paslon2-profile.png" alt="" />
          <div class="profile-info">
            <h3>Rifki yudha asmara rindu</h3>
            <p>3 D4 Teknik Informatika A</p>
          </div>
        </div>
        <div class="education">
          <h4>Riwayat Pendidikan</h4>
          <div class="years-education">
            <p>2013-2016</p>
            <p>2016-2019</p>
            <p>2019-saat ini</p>
          </div>
        </div>
        <div class="organisation">
          <h4>Pengalaman Organisasi</h4>
          <div class="list-organisation">
            <p>Staf muda departemen PSDM HIMIT PENS 2019</p>
            <p>Staf ahli departemen PSDM HIMIT PENS 2020</p>
            <p>PJ online bounding HIMIT PENS 2020</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailPaslonCard2",
  components: {},
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "../components/modules/variables";

//GLOBAL

//STYLING
.detail-paslon-card {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  &-left {
    .left-top {
      overflow: hidden;
      background: #ffffff;
      box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
      border-radius: 8px;
      padding: 10px;
      img {
        width: 100%;
        border-radius: 8px;
      }
      h3 {
      }
      p {
      }
      .progress-campaign {
        margin-top: 20px;
        background: #f5f8fa;
        border-radius: 8px;
        padding: 10px;
        .progress-field:nth-child(2) {
          margin: 10px 0px;
        }
        .progress-field {
          p {
          }
          .progress-border {
            width: 100%;
            height: 20px;
            background: blue;
            background: #d5dbe1;
            border-radius: 4px;
            overflow: hidden;
            .progress-fill {
            }
          }
        }

        .progress-field.field-1 {
          .progress-border {
            display: flex;
            align-items: center;
            .progress-fill {
              background: #31bf31;
              display: flex;
              align-items: center;
              justify-content: flex-end;
              color: #ffffff;
              padding-right: 5px;
              width: 50%;
            }
          }
        }
        .progress-field.field-2 {
          .progress-border {
            display: flex;
            align-items: center;
            .progress-fill {
              background: #47c1ff;
              display: flex;
              align-items: center;
              justify-content: flex-end;
              color: #ffffff;
              padding-right: 5px;
              width: 30%;
            }
          }
        }
        .progress-field.field-3 {
          .progress-border {
            display: flex;
            align-items: center;
            .progress-fill {
              background: #ffab4c;
              display: flex;
              align-items: center;
              justify-content: flex-end;
              color: #ffffff;
              padding-right: 5px;
              width: 75%;
            }
          }
        }
      }
    }

    .left-mid {
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

    .left-bottom {
      .berkas-card,
      .notulensi-card {
        background: green;
        display: flex;
        align-items: center;
        padding: 15px 10px;
        background: #d5edfe;
        border-radius: 4px;
        margin-top: 20px;
        .left-card {
          flex: 1;
          display: flex;
          align-items: center;
          p {
            margin-left: 20px;
          }
        }
      }

      .notulensi-card {
        background: #fff4db;
        margin-top: 10px;
      }
    }
  }
  &-right {
    .right-top,
    .right-bottom {
      padding: 15px;
      width: 100%;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      .profile {
        display: flex;
        align-items: center;
        img {
          border-radius: 16px;
        }
        .profile-info {
          margin-left: 10px;
          h3 {
            font-size: 18px;
            font-weight: 400;
          }
          p {
            font-size: 14px;
            font-weight: 300;
          }
        }
      }
      .education {
        margin-top: 20px;
        .years-education {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          column-gap: 10px;
          margin-top: 5px;
          p {
            flex: 1;
            background: #2f80ec;
            border-radius: 4px;
            font-size: 14px;
            color: #ffffff;
            text-align: center;
            padding: 5px 0px;
          }
        }
      }

      .organisation {
        margin-top: 20px;
        .list-organisation {
          border: 0.5px solid #d5dbe1;
          border-radius: 4px;
          margin-top: 5px;
          p {
            padding: 5px 10px;
          }
          p:nth-child(even) {
            background: #f5f8fa;
          }
        }
      }
    }

    .right-bottom {
      margin-top: 20px;
    }
  }
}

@media (max-width: 750px) {
  .detail-paslon-card {
    display: flex;
    flex-direction: column;
    &-right {
      margin-top: 20px;
    }
  }
}
</style>
