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
  margin-left: 5vw;
  margin-right: 5vw;
}
</style>
