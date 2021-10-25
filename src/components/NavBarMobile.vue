<script setup>
import { useStore } from "vuex";
const store = useStore();
const setActiveComp = (value) => {
  store.commit("setActiveComp", value);
  swMobileMode();
};
const swMobileMode = () => {
  const mode = !store.state.mobileMode;
  store.commit("setMobileMode", mode);
};
</script>
<template>
  <div class="md:hidden absolute w-full z-50" id="mobile-menu">
    <div
      id="navMobileMenu"
      class="
        px-2
        pt-2
        pb-3
        space-y-1
        sm:px-3
        bg-white
        dark:bg-gray-900
        text-gray-900
        dark:text-white
      "
      :class="[store.state.mobileMode ? '' : 'hidden']"
    >
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-900 hover:text-white" -->

      <a
        @click="setActiveComp(1)"
        class="
          hover:bg-gray-900 hover:text-white
          dark:hover:bg-white dark:hover:text-gray-900
          block
          px-3
          py-2
          rounded-md
          text-base
          font-bold
        "
        >Sobre mí</a
      >

      <a
        @click="setActiveComp(2)"
        class="
          hover:bg-gray-900 hover:text-white
          dark:hover:bg-white dark:hover:text-gray-900
          block
          px-3
          py-2
          rounded-md
          text-base
          font-bold
        "
        >Estudios</a
      >

      <a
        @click="setActiveComp(3)"
        class="
          hover:bg-gray-900 hover:text-white
          dark:hover:bg-white dark:hover:text-gray-900
          block
          px-3
          py-2
          rounded-md
          text-base
          font-bold
        "
        >Perfil</a
      >

      <a
        @click="setActiveComp(4)"
        class="
          hover:bg-gray-900 hover:text-white
          dark:hover:bg-white dark:hover:text-gray-900
          block
          px-3
          py-2
          rounded-md
          text-base
          font-bold
        "
        >Portafolio</a
      >
    </div>
  </div>
</template>
