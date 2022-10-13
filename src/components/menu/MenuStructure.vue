<template>
  <div class="MenuBarDesktop">
    <div v-if="!show" class="glassBackdrop" />
    <router-link to="/cafe/" class="logo">
      <i class="fa-solid fa-mug-saucer"></i>
    </router-link>
    <MenuNav />
    <button class="filled">
      <router-link to="/aboutcafe/">Sobre</router-link>
    </button>
  </div>
  <div class="MenuBarMobile">
    <router-link to="/cafe/" class="logo">
      <i class="fa-solid fa-mug-saucer"></i>
    </router-link>
    <button @click="show = !show" class="hollow">
      <Transition name="fade">
        <i v-if="!show" class="fa-solid fa-bars"></i>
      </Transition>
      <Transition name="fade">
        <i v-if="show" class="fa-solid fa-plus"></i>
      </Transition>
    </button>
    <div v-if="!show" class="glassBackdrop" />
    <div v-if="show" class="glassBackdropMenu" />
    <div v-if="show" @click="show = !show" class="outsideMenu" />
    <Transition name="slide" class="test">
      <CollapsableMenuNav v-if="show" @click="show = false" />
    </Transition>
  </div>
</template>

<script>
import MenuNav from "./MenuNav.vue";
import CollapsableMenuNav from "./CollapsableMenuNav.vue";

export default {
  name: "MenuStructure",
  components: {
    MenuNav,
    CollapsableMenuNav,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .MenuBarDesktop {
    display: none;
  }

  .MenuBarMobile {
    display: flex;
  }

  .fa-solid {
    position: absolute;
  }
}

@media screen and (min-width: 601px) and (max-width: 800px) {
  .MenuBarDesktop {
    display: flex;
  }

  .MenuBarMobile {
    display: none;
  }

  button a {
    font-size: 0.8rem;
  }
}

@media screen and (min-width: 801px) {
  .MenuBarDesktop {
    display: flex;
  }

  .MenuBarMobile {
    display: none;
  }
}

.MenuBarMobile,
.MenuBarDesktop {
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  width: 100vw;
  height: 8.5vh;
}

button {
  width: 6rem;
  height: 2rem;
  border-radius: 1rem;
  border: 0;
  margin: 0 5vw;

  background-color: #916047;

  transition: 0.2s;
  cursor: pointer;
}

button:hover {
  transform: scale(1.1);
}

.hollow {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: #fafafa;
  border: 0;
  margin: 0 1.25rem;

  cursor: pointer;
}

a {
  font-family: LabGrotesque, Helvetica, Arial, sans-serif;
  font-weight: 700;
  color: #916047;
  text-decoration: none;
  margin: 0 1.25rem;
}

button a {
  color: #ffffff;
}

/*Effect for backdrop*/
.glassBackdrop {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 8.5vh;
  z-index: -1;
  transition: 0.2s;
  backdrop-filter: blur(8px);
}
.glassBackdropMenu {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 46.5vh;
  z-index: -1;
  transition: 0.2s;
  backdrop-filter: blur(8px);
}

.outsideMenu {
  position: fixed;
  top: 46.5vh;

  height: 53.5vh;
  width: 100vw;
}

/* Transition effects */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-1em);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
