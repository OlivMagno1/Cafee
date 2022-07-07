<template>
  <div class="container">
    <h1>LOGO</h1>
    <MenuNav />
    <h1>BUTTON</h1>
  </div>
</template>

<script>
import MenuNav from "./MenuNav.vue";

export default {
  name: "MenuStructure",
  components: {
    MenuNav,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  width: 90vw;
  height: 8.5vh;
  margin-left: 5vw;
  margin-right: 5vw;

  backdrop-filter: blur(50px) grayscale(30%);
}
</style>
