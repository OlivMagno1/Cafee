<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/expresso">Expresso</router-link>
    <router-link to="/latte">Latte</router-link>
    <router-link to="/frappuccino">Frappuccino</router-link>
  </nav>
</template>

<script></script>

<style scoped>
@media screen and (min-width: 601px) and (max-width: 800px) {
  nav {
    width: 50vw;
    left: 25vw;
  }

  nav a {
    font-size: 0.8rem;
  }
}

@media screen and (min-width: 801px) and (max-width: 1000px) {
  nav {
    width: 40vw;
    left: 30vw;
  }

  nav a {
    font-size: 0.8rem;
  }
}

@media screen and (min-width: 1001px) {
  nav {
    width: 30vw;
    left: 35vw;
  }

  nav a {
    font-size: 1rem;
  }
}

nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;

  height: 8.5vh;
  position: fixed;
  top: 0;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: #767676;

  transition: 0.2s;
}

nav a:hover {
  transform: scale(1.1);
  color: #333;
}

nav a.router-link-exact-active {
  color: #333;
}
</style>
