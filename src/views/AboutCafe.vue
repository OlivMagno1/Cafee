<template>
  <div class="aboutContainer">
    <div class="textTitle">
      <h1>Sobre este <span class="textHighlight">projeto</span></h1>
    </div>
    <div class="imageContainer">
      <img src="@/assets/images/lobe.png" />
    </div>
    <div class="featureList">
      <p>
        <span class="textHighlight">Incrível Café</span> é uma Single Page
        Application desenvolvida em Vue.js. Apresentando um layout minimalista
        inspirado no website do
        <a href="https://www.lobe.ai" title="Visitar website" target="_blank">
          Lobe
        </a>
        , este site possui um menu translúcido e animações simples ao passar com
        o cursor em cima dos elementos. A interface é totalmente responsiva, se
        reajustando para todos os tamanhos de tela, mantendo a navegação de
        forma simples e intuitiva.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutCafe",
};
</script>

<style scoped>
@media screen and (max-width: 1000px) {
  p {
    font-size: 1.2rem;
  }

  .featureList {
    width: 80vw;
  }

  .imageContainer {
    width: 80vw;
    height: 42vw;
  }

  img {
    width: 64vw;
    height: 38vw;
  }
}

@media screen and (min-width: 1001px) {
  p {
    font-size: 1.4rem;
  }

  .featureList {
    width: 40vw;
  }

  .imageContainer {
    width: 30vw;
    height: 17.5vw;
  }

  img {
    width: 24vw;
    height: 15vw;
  }
}
a {
  text-decoration: none;
}

.aboutContainer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  width: 100vw;
  margin-top: 12vh;
}

.imageContainer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  background-color: #f0ece9;
}

img,
.imageContainer {
  border-radius: 1rem;
}

.textTitle {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  width: 45vw;
  height: 20vh;
}

.imageTitle {
  width: 45vw;
  height: 20vh;
}

.featureList {
  height: 20vh;

  margin: 2rem;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: justify;
}

.textHighlight {
  color: #916047;
}
</style>
