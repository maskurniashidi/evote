<template>
  <div class="jumbotron-timeline">
    <img src="https://placeimg.com/1000/600/tech" alt="" />
    <div class="card-dpt">
      <h3>Pemungutan suara Suksesi HIMIT PENS 2021</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales sit amet orci ac pulvinar. Ut imperdiet augue quis convallis finibus.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "JumbotronTimeline",
  components: {},
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "./modules/variables";
.jumbotron-timeline {
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
  }
}
</style>
