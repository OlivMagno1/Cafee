<template>
  <div class="expressoContainer">
    <div class="headline">
      <div class="textTitle">
        <h1>Para os amantes do <span class="textHighlight">gelado</span></h1>
        <p>O encontro mágico do sorvete com o café</p>
      </div>
      <img src="@/assets/images/frape.jpg" />
    </div>
    <div class="textParagraph">
      <p>
        Derivado do francês "Frappé" (que significa "bater"), O Frappuccino é
        uma batida de sorvete com capuccino. A receita pode ser variada com
        diversos adicionais, sendo as mais comuns a adição de chocolate,
        chantilly ou até uma dose extra de café.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrappuccinoView",
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
    width: 16vw;
    height: 24vw;
    object-fit: cover;
    border-radius: 2rem;
  }
}

.textHighlight {
  color: #916047;
}
</style>
