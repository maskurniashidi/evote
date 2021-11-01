<template>
  <div class="modal">
    <div class="modal-dialog">
      <img src="http://cdn.onlinewebfonts.com/svg/img_129610.png" style="width:50px; height:auto" alt="" />
      <h3>Apakah anda yakin ?</h3>
      <p>data akan disimpan sebagai pilihan anda</p>
      <div class="modal-footer">
        <button type="button" class="btn-close" v-on:click="closeModal">Batal</button>
        <button type="button" class="btn btn-primary" v-on:click="closeModal">Yakin</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal",
  data() {
    return {
      //
    };
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: block;
  overflow: hidden;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  .modal-dialog {
    width: 30%;
    background: #ffffff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0px;
    h3 {
      font-weight: 400;
      margin-top: 10px;
    }
    p {
      margin: 1px 0px 10px;
    }
    button {
      background: #2f80ec;
      border-radius: 8px;
      color: #ffffff;
      border: none;
      outline: none;
      padding: 5px 10px;
      cursor: pointer;
    }
    .btn-close {
      background: #d5dbe1;
      border-radius: 8px;
      color: #000;
      margin-right: 20px;
    }
  }
}
</style>
