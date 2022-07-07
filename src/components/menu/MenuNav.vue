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
  line-height: 3em;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  font-size: 1em;
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
