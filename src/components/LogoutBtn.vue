<template>
  <router-link to="/" class="logout-btn">
    <i class="fas fa-sign-out-alt" style="transform: rotate(180deg);"></i>
    <h4 class="logout-text">Keluar</h4>
  </router-link>
</template>

<script>
export default {
  name: "LogoutBtn",
  components: {},
};
</script>

<style lang="scss" scoped>
.logout-btn {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
  background: #e23647;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 20px;
  .fa-sign-out-alt {
    color: #fff;
    margin-left: 20px;
  }
  .logout-text {
    flex: 1;
    margin-left: 15px;
    color: #fff;
  }

  &:hover {
    background: #ad0c1c;
  }
}
</style>
