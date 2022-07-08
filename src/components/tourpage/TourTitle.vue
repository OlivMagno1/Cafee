<template>
  <div class="container">
    <div class="titlecard">
      <h2>Incrível <span class="textHighlight">Café</span></h2>
      <h3>
        Nada como uma deliciosa xícara de café para começar o dia. O importante
        é acordar.
      </h3>
    </div>
    <div class="imagecontainer">
      <img src="@/assets/images/coffee.jpg" />
    </div>
    <div class="titlecard">
      <h2>Faça já o seu café</h2>
      <button>
        <router-link to="/download">Download</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TourTitle",
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  width: 90vw;
  margin-top: 12vh;
  margin-left: 5vw;
  margin-right: 5vw;
}

.imagecontainer {
  width: 62vw;
  height: 70vh;
  margin-top: 8vh;
  margin-bottom: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0ece9;

  border-radius: 20px;
}

img {
  width: 40vw;
  height: 50vh;
  object-fit: cover;
  border-radius: 20px;
}

.titlecard {
  width: 40vw;
}

h2 {
  font-size: 5em;
  margin: 0.5em;
}

h3 {
  font-size: 2em;
  font-weight: 400;
}

.textHighlight {
  color: #916047;
}

button {
  width: 12em;
  height: 4em;
  border-radius: 30px;
  border: 0;
  margin-bottom: 2em;

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
