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
  <div class="md:hidden" id="mobile-menu">
    <div
      id="navMobileMenu"
      class="px-2 pt-2 pb-3 space-y-1 sm:px-3"
      :class="[store.state.mobileMode ? '' : 'hidden']"
    >
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

      <a
        @click="setActiveComp(1)"
        class="
          text-gray-900
          bg-white
          hover:bg-gray-700 hover:text-white
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
          text-gray-900
          bg-white
          hover:bg-gray-700 hover:text-white
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
          text-gray-900
          bg-white
          hover:bg-gray-700 hover:text-white
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
          text-gray-900
          bg-white
          hover:bg-gray-700 hover:text-white
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
