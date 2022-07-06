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
}
</style>
