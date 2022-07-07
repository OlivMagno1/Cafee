<template>
  <div id="container">
    <MenuStructure />
    <router-view />
  </div>
</template>

<script>
import MenuStructure from "./components/menu/MenuStructure.vue";

export default {
  name: "App",
  components: {
    MenuStructure,
  },
};
</script>

<style>
* {
  margin: 0;
}

@font-face {
  font-family: LabGrotesque;
  src: "@/assets/fonts/Lab-Grotesque-Regular.ttf";
  font-weight: 700;
}
@font-face {
  font-family: LabGrotesque;
  src: "@/assets/fonts/Lab-Grotesque-Light.ttf";
  font-weight: 400;
}

#container {
  display: flex;
  flex-flow: column nowrap;
}

#app {
  font-family: LabGrotesque, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}
</style>
