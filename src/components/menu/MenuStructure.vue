<template>
  <div class="container">
    <router-link to="/">
      <box-icon name="coffee" type="logo" color="#916047"></box-icon>
    </router-link>
    <MenuNav />
    <button>
      <router-link to="/download">Download</router-link>
    </button>
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
  width: 10em;
  height: 3em;
  border-radius: 30px;
  border: 0;

  background-color: #916047;

  transition: 0.2s;
}

button a {
  font-family: LabGrotesque, Helvetica, Arial, sans-serif;
  font-size: 1.2em;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
}

button:hover {
  transform: scale(1.1);
}
</style>
