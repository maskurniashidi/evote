<template>
  <div class="carousel-container">
    <img src="../assets/img/bg-home.png" alt="" />
    <div class="card-dpt">
      <h3>Suarakan suaramu dalam Suksesi HIMIT PENS 2021</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales sit amet orci ac pulvinar. Ut imperdiet augue quis convallis finibus.</p>
      <router-link to="#" class="btn-dpt">
        Daftar DPT
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselImg",
  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "./modules/variables";
.carousel-container {
  width: 100%;
  position: relative;
  img {
    max-width: 100%;
    height: auto;
    box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
    border-radius: 8px;
  }
  .card-dpt {
    position: absolute;
    top: 0;
    width: 60%;
    margin-top: 40px;
    margin-left: 35px;
    background: #ffffff;
    border-radius: 8px;
    padding: 20px;
    h3 {
      color: $primary-500;
      font-weight: 500;
      font-size: 20px;
    }
    p {
      margin: 15px 0px;
      font-size: 12px;
      font-weight: 300;
      color: $secondary-500;
    }
    .btn-dpt {
      text-decoration: none;
      background: #2f80ec;
      border-radius: 4px;
      padding: 5px 10px;
      color: #ffffff;
      &:hover {
        background: #2165be;
      }
    }
  }
}

@media (max-width: 1028px) {
  .carousel-container {
    img {
    }
    .card-dpt {
      h3 {
        margin-bottom: 20px;
      }
      p {
        display: none;
      }
      .btn-dpt {
        &:hover {
        }
      }
    }
  }
}
</style>
