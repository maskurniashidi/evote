<template>
  <div class="confrence-card">
    <div class="confrence-info">
      <h4>Maskurnia shidi</h4>
      <p>3 D4 Teknik Informatika A</p>
    </div>
    <a class="confrence-icon" href="https://us04web.zoom.us/j/9980118632?pwd=aGp2Y0tmWXdYZ3U1eElTRy9relZvZz09" target="_blank">
      <i class="fas fa-video" style="color: blue"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "ConfrenceCard",
  components: {},
};
</script>

<style lang="scss" scoped>
//IMPORT
@import "./modules/variables";
.confrence-card {
  display: flex;
  align-items: center;
  width: 100%;
  background: #ffffff;
  box-shadow: -2px 4px 10px rgba(47, 128, 236, 0.4);
  border-radius: 8px;
  min-height: 100px;
  padding: 0px 15px;
  .confrence-info {
    flex: 1;
  }

  .confrence-icon {
    width: 50px;
    height: 50px;
    background: $primary-100;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
}
</style>
