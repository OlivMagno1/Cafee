<template>
  <div class="expressoContainer">
    <div class="headline">
      <div class="textTitle">
        <h1>
          Uma dose concentrada de <span class="textHighlight">cafeína</span>
        </h1>
        <p>O punch perfeito para levantar a moral</p>
      </div>
      <img src="@/assets/images/expresso.jpg" />
    </div>
    <div class="textParagraph">
      <p>
        Um café expresso bem tirado possui três partes principais: coração,
        corpo e espuma — sua característica mais marcante: a espuma de cor
        semelhante ao <span class="textHighlight">caramelo-escuro</span> que
        permanece sobre a superfície do expresso.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpressoView",
};
</script>

<style scoped>
@media screen and (max-width: 1000px) {
  .expressoContainer {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;

    width: 90vw;
    margin-top: 12vh;
    margin-left: 5vw;
    margin-right: 5vw;
  }

  .textTitle {
    width: 90vw;
    margin: 2rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  img {
    width: 50vw;
    height: 50vw;
    object-fit: cover;

    border-radius: 2rem;
    margin: 2rem;
  }

  .textParagraph {
    width: 80vw;
    margin: 2rem;
    text-align: justify;

    font-size: 1.2rem;
  }
}

@media screen and (min-width: 1001px) {
  .expressoContainer {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
  }

  .headline {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    width: 60vw;
    margin: 12vh 20vw;
  }

  .textTitle {
    width: 20vw;
    margin: 2rem;
  }

  .textParagraph {
    width: 40vw;
    margin: 2rem;
    text-align: justify;

    font-size: 1.4rem;
  }

  h1 {
    font-size: 3rem;
    margin: 1rem;
  }

  img {
    width: 20vw;
    height: 20vw;
    object-fit: cover;
    border-radius: 2rem;
  }
}

.textHighlight {
  color: #916047;
}
</style>
