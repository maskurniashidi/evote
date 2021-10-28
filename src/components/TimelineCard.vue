<template>
  <div class="timeline-card">
    <h2 class="timeline-title">Timeline Suksesi HIMIT PENS 2021</h2>
    <hr class="line" />
    <div class="timeline-container">
      <div class="container-timeline left">
        <div class="date">14 - 15 Desember 2021</div>
        <div class="content">
          <h2>Pemungutan suara serentak</h2>
          <div class="content-card">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <hr class="line-content" />
            <div class="view-timeline">
              <p>Lihat Selengkapnya</p>
              <i class="fas fa-chevron-circle-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="container-timeline right">
        <div class="date">14 - 15 Desember 2021</div>
        <div class="content">
          <h2>Pemungutan suara serentak</h2>
          <div class="content-card">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <hr class="line-content" />
            <div class="view-timeline">
              <p>Lihat Selengkapnya</p>
              <i class="fas fa-chevron-circle-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="container-timeline left">
        <div class="date">14 - 15 Desember 2021</div>
        <div class="content">
          <h2>Pemungutan suara serentak</h2>
          <div class="content-card">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <hr class="line-content" />
            <div class="view-timeline">
              <p>Lihat Selengkapnya</p>
              <i class="fas fa-chevron-circle-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="container-timeline right">
        <div class="date">14 - 15 Desember 2021</div>
        <div class="content">
          <h2>Pemungutan suara serentak</h2>
          <div class="content-card">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <hr class="line-content" />
            <div class="view-timeline">
              <p>Lihat Selengkapnya</p>
              <i class="fas fa-chevron-circle-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="container-timeline left">
        <div class="date">14 - 15 Desember 2021</div>
        <div class="content">
          <h2>Pemungutan suara serentak</h2>
          <div class="content-card">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <hr class="line-content" />
            <div class="view-timeline">
              <p>Lihat Selengkapnya</p>
              <i class="fas fa-chevron-circle-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="container-timeline right">
        <div class="date">14 - 15 Desember 2021</div>
        <div class="content">
          <h2>Pemungutan suara serentak</h2>
          <div class="content-card">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <hr class="line-content" />
            <div class="view-timeline">
              <p>Lihat Selengkapnya</p>
              <i class="fas fa-chevron-circle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimelineCard",
  components: {},
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "modules/variables";
.timeline-card {
  background: #ffffff;
  box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
  border-radius: 8px;
  padding: 20px 0px;
  .timeline-title {
    text-align: center;
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
  .timeline-container {
    position: relative;
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    margin-top: 50px;
    padding: 15px 0;
    .container-timeline {
      padding: 0px 30px;
      position: relative;
      background: inherit;
      width: 50%;
      margin-top: 20px;
      .date {
        padding: 5px 20px;
        background: #2f80ec;
        top: 0px;
        color: #fff;
        border-radius: 8px;
      }
    }

    .container-timeline.left {
      left: 0;
      .date {
        right: -250px;
      }
    }

    .container-timeline.right {
      left: 50%;
      .date {
        left: -250px;
      }
    }

    .container-timeline::after {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      top: 0px;
      right: -17px;
      background: #2f80ec;
      border: 10px solid #e3f0f6;
      border-radius: 16px;
      z-index: 1;
    }

    .content {
      position: relative;
      h2 {
        font-size: 18px;
        font-weight: 500;
      }
      .content-card {
        margin-top: 20px;
        background: #ffffff;
        box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
        border-radius: 8px;
        padding: 10px 10px;
        p {
          font-size: 14px;
        }
        .line-content {
          border: none;
          display: block;
          width: 200px;
          height: 2px;
          background-color: $primary-500;
          margin: 10px 0px;
        }

        .view-timeline {
          display: flex;
          align-items: center;
          i {
            margin-left: 15px;
          }
        }
      }
    }
  }

  .timeline-container:after {
    content: "";
    position: absolute;
    width: 2px;
    background: #8f959d;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }

  .container-timeline.right::after {
    left: -17px;
  }

  .date {
    position: absolute;
    display: inline-block;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: #006e51;
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 1;
  }
}
</style>
