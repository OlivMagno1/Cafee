<template>
  <div class="expressoContainer">
    <div class="headline">
      <div class="textTitle">
        <h1>Mais que <span class="textHighlight">café</span></h1>
        <p>Tudo o que você precisa no seu dia</p>
      </div>
      <img src="@/assets/images/latte.jpg" />
    </div>
    <div class="textParagraph">
      <p>
        Conhecido como Café au lait na França e como pingado no Brasil, o Latte
        traz toda a energia de um expresso em conjunto com o conforto de uma
        generosa espuma de leite, adicionada especificamente para aquecer o
        coração.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LatteView",
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
    width: 24vw;
    height: 16vw;
    object-fit: cover;
    border-radius: 2rem;
  }
}

.textHighlight {
  color: #916047;
}
</style>
