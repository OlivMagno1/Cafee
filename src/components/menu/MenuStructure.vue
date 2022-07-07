<template>
  <div class="container">
    <img src="@/assets/icons/coffee.svg" />
    <MenuNav />
    <button>Download</button>
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

button {
  width: 7em;
  height: 2.5em;
  border-radius: 30px;
  border: 0;

  background-color: #916047;
  color: #ffffff;

  font-family: LabGrotesque, Helvetica, Arial, sans-serif;
  font-size: 1.2em;

  transition: 0.2s;
}

button:hover {
  transform: scale(1.1);
}
</style>
