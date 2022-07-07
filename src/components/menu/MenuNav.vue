<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/examples">Examples</router-link>
    <router-link to="/tour">Tour</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/help">Help</router-link>
  </nav>
</template>

<script></script>

<style scoped>
nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  width: 25vw;
  padding: 30px;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  font-size: 1em;
  color: #767676;
}

nav a:hover {
  font-size: 1.1em;
  color: #333;
}

nav a.router-link-exact-active {
  color: #333;
}
</style>
