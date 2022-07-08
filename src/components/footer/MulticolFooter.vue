<template>
  <div class="container">
    <div class="colA">
      <h3>Café</h3>
      <p>Um produto sem licença</p>
      <p>Nenhum direito reservado</p>
    </div>
    <div class="colB">
      <h3>About</h3>
      <router-link to="/download">Download</router-link>
      <router-link to="/overview">Overview</router-link>
      <router-link to="/examples">Examples</router-link>
      <router-link to="/blog">Blog</router-link>
    </div>
    <div class="colB">
      <h3>Resources</h3>
      <router-link to="/help">Help</router-link>
      <router-link to="/tour">Tour</router-link>
      <p>Contact</p>
      <p>Privacy</p>
    </div>
    <div class="colC">
      <button>
        <a href="https://google.com" target="_blank">
          <box-icon name="google" type="logo" color="#ffffff"></box-icon>
        </a>
      </button>
      <button>
        <a href="https://twitter.com" target="_blank">
          <box-icon name="twitter" type="logo" color="#ffffff"></box-icon>
        </a>
      </button>
      <button>
        <a href="https://youtube.com" target="_blank">
          <box-icon name="youtube" type="logo" color="#ffffff"></box-icon>
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

p {
  font-family: LabGrotesque, Helvetica, Arial, sans-serif;
  font-size: 1em;
  font-weight: 400;
  margin-bottom: 0.75em;
}

h3 {
  font-family: LabGrotesque, Helvetica, Arial, sans-serif;
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 0.75em;
}

a:hover {
  transform: scale(1.1);
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

.colB a {
  text-decoration: none;
  font-weight: 400;
  font-size: 1em;
  color: #333;
  margin-bottom: 0.75em;

  transition: 0.2s;
}

.colC {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  height: 25vh;
  width: 12vw;
}

button {
  width: 1.75em;
  height: 1.75em;
  border-radius: 50%;
  border: 0;
  margin-right: 0.5em;

  background-color: #916047;
  color: #ffffff;

  font-family: LabGrotesque, Helvetica, Arial, sans-serif;
  font-size: 1.5em;
  font-weight: 700;

  transition: 0.2s;
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
