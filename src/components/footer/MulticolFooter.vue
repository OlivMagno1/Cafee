<template>
  <div class="container">
    <div class="colA">
      <p>texto</p>
    </div>
    <div class="colB">
      <p>texto</p>
    </div>
    <div class="colB">
      <p>texto</p>
    </div>
    <div class="colB">
      <p>texto</p>
    </div>
    <div class="colA">
      <p>texto</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MulticolFooter",
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  width: 70vw;
  padding-top: 12vh;
  margin-top: 5vh;
  margin-left: 15vw;
  margin-right: 15vw;
  margin-bottom: 5vh;
  border-top: 1px solid #cfcbc8;
}

.colA {
  background-color: red;
}

.colB {
  background-color: blue;
}
</style>
