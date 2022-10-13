<template>
  <div class="container">
    <div class="colA">
      <h3>Café</h3>
      <p>Um produto sem licença</p>
      <p>Nenhum direito reservado</p>
    </div>
    <div class="colB">
      <h3>Páginas</h3>
      <router-link to="/cafe">Home</router-link>
      <router-link to="/cafe/expresso">Expresso</router-link>
      <router-link to="/cafe/latte">Latte</router-link>
      <router-link to="/cafe/frappuccino">Frappuccino</router-link>
    </div>
    <div class="colB">
      <h3>Sobre</h3>
      <router-link to="/aboutcafe">Sobre este projeto</router-link>
    </div>
    <div class="colC">
      <button>
        <a href="https://google.com" target="_blank">
          <i class="fa-brands fa-google"></i>
        </a>
      </button>
      <button>
        <a href="https://twitter.com" target="_blank">
          <i class="fa-brands fa-twitter"></i>
        </a>
      </button>
      <button>
        <a href="https://youtube.com" target="_blank">
          <i class="fa-brands fa-youtube"></i>
        </a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MulticolFooter",
};
</script>

<style scoped>
@media screen and (min-width: 721px) {
  .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: flex-start;

    width: 70vw;
    padding-top: 17vh;
    margin-top: 10vh;
    margin-left: 15vw;
    margin-right: 15vw;
    margin-bottom: 15vh;
    border-top: 1px solid #cfcbc8;
  }

  .colA {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;

    height: 25vh;
    width: 16vw;
  }

  .colB {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;

    height: 25vh;
    width: 12vw;
  }

  .colC {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    height: 25vh;
    width: 12vw;
  }

  .colB a {
    text-decoration: none;
    font-weight: 400;
    font-size: 1em;
    color: #333;
    margin-bottom: 0.75rem;

    transition: 0.2s;
  }

  p {
    font-family: LabGrotesque, Helvetica, Arial, sans-serif;
    font-size: 1em;
    font-weight: 400;
    margin-bottom: 0.75rem;
  }

  h3 {
    font-family: LabGrotesque, Helvetica, Arial, sans-serif;
    font-size: 1.2em;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }
}

@media screen and (max-width: 720px) {
  .container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: flex-start;

    width: 70vw;
    padding-top: 5vh;
    margin: 5vh 5vw;
    border-top: 1px solid #cfcbc8;
  }

  .colA {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    margin: 0.75rem 0;
  }

  .colB {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    margin: 0.75rem 0;
  }

  .colC {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    margin: 0.75rem;
  }

  .colB a {
    text-decoration: none;
    font-weight: 400;
    font-size: 1em;
    color: #333;
    margin: 0 0.75rem;

    transition: 0.2s;
  }

  p {
    font-family: LabGrotesque, Helvetica, Arial, sans-serif;
    font-size: 1em;
    font-weight: 400;
    margin: 0 0.75rem;
  }

  h3 {
    font-family: LabGrotesque, Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0 0.75rem;
    padding-right: 70vw;
  }
}

a:hover {
  transform: scale(1.1);
}

button {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 0;
  margin-right: 0.5rem;

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

button a {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
