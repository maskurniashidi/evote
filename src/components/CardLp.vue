<template>
  <div class="card">
    <searchIcon class="card-icon" />
    <h3 class="card-title">Masuk Flooring</h3>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
  </div>
</template>

<script>
import searchIcon from "../assets/img/search-icon.svg";
export default {
  name: "CardLp",
  components: { searchIcon },
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "modules/variables";

//STYLING
.card {
  width: 350px;
  height: 354px;
  background: #ffffff;
  box-shadow: -16px 28px 50px rgba(229, 233, 246, 0.4);
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .card-title {
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: $base-font;
  }
  .card-text {
    text-align: center;
    padding: 0px 30px;
    font-family: $base-font;
  }
}
</style>
