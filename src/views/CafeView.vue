<template>
  <div class="viewContainer">
    <div class="textContainer">
      <h2>Incrível <span class="textHighlight">Café</span></h2>
      <h3>
        Nada como uma deliciosa xícara de café para começar o dia. O importante
        é acordar.
      </h3>
    </div>
    <div class="imageContainer">
      <img src="@/assets/images/coffee.jpg" />
    </div>
    <div class="textContainer">
      <h3>Clique abaixo para saber mais sobre este projeto</h3>
      <button>
        <a href="/index">Sobre</a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CafeView",
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 0.8rem;
  }
}

@media screen and (min-width: 601px) and (max-width: 800px) {
  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1rem;
  }
}

@media screen and (min-width: 801px) and (max-width: 1000px) {
  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 1.4rem;
  }
}

@media screen and (min-width: 1001px) {
  h2 {
    font-size: 4rem;
  }

  h3 {
    font-size: 1.6rem;
  }
}

.viewContainer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  width: 100vw;
  margin-top: 8.5vh;
}

.textContainer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  width: 40vw;
  height: 25vh;
}

.imageContainer {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60vw;
  height: 35vw;
  border-radius: 1rem;
  background-color: #f0ece9;
}

img {
  width: 48vw;
  height: 30vw;
  object-fit: cover;
  border-radius: 1rem;
}

.textHighlight {
  color: #916047;
}

button {
  width: 6rem;
  height: 2rem;
  border-radius: 1rem;
  border: 0;
  margin: 2rem;

  background-color: #916047;

  transition: 0.2s;
}

button a {
  font-family: LabGrotesque, Helvetica, Arial, sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
}

button:hover {
  transform: scale(1.1);
}
</style>
