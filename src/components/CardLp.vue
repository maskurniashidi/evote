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
  width: 300px;
  height: 300px;
  background: #ffffff;
  box-shadow: -16px 28px 50px rgba(229, 233, 246, 0.4);
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(0.95, 0.95);
    transition: 0.4s;
  }

  .card-title {
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: $base-font;
    font-weight: 500;
  }
  .card-text {
    text-align: center;
    padding: 0px 30px;
    font-family: $base-font;
    color: #858585;
  }
}

//RESPONSIVE
@media (max-width: 1250px) {
}
@media (max-width: 1028px) {
  .card {
    width: 300px;
    height: 300px;
    .card-title {
    }
    .card-text {
    }
  }
}
@media (max-width: 750px) {
}
@media (max-width: 550px) {
  .card {
    .card-title {
    }
    .card-text {
      font-size: 14px;
    }
  }
}
</style>
