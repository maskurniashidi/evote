<template>
  <section class="feature-section">
    <div class="card-content">
      <div class="card-title">
        <h2 class="header"><span>Fitur</span> Aplikasi</h2>
        <hr class="line" />
      </div>
      <div class="card-group">
        <CardLp />
        <CardLp />
        <CardLp />
        <CardLp />
        <CardLp />
        <CardLp />
      </div>
    </div>
  </section>
</template>

<script>
import CardLp from "./CardLp.vue";
export default {
  name: "InfoSectionLp",
  components: { CardLp },
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "modules/variables";

//STYLING
.feature-section {
  .card-content {
    width: 80%;
    margin: 0px auto;
    font-family: $base-font;
    .card-title {
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
    }

    .card-group {
      margin-top: 20px;
      //   background-color: salmon;
      display: grid;
      row-gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
      justify-items: center;
    }
  }
}

@media (max-width: 1250px) {
  .feature-section {
    .card-content {
      width: 90%;
    }
  }
}
@media (max-width: 1028px) {
  .card-group {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}
@media (max-width: 750px) {
}
@media (max-width: 550px) {
  .feature-section {
    width: 95%;
    .card-content {
      .card-title {
        .header {
          font-size: 28px;
          span {
          }
        }
        .line {
        }
      }

      .card-group {
      }
    }
  }
}
</style>
