<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/expresso">Expresso</router-link>
    <router-link to="/latte">Latte</router-link>
    <router-link to="/frappuccino">Frappuccino</router-link>
    <button>
      <router-link to="/aboutcafe/">Sobre este projeto</router-link>
    </button>
  </nav>
</template>

<script>
export default {
  name: "CollapsableMenuNav",
};
</script>

<style scoped>
nav {
  transition: 0.2s;
  position: fixed;
  top: 8.5vh;
  left: 0;

  height: 38vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  width: 100vw;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  color: #767676;
  padding: 1rem 0.75rem;

  transition: 0.2s;
}

button {
  width: 90vw;
  height: 3rem;
  border-radius: 1.5rem;
  border: 0;
  margin: 1rem 5vw;

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
</style>
