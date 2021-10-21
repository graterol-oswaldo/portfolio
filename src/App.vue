<script setup>
import NavBar from "./components/NavBar.vue";
import AboutMe from "./components/AboutMe.vue";
import Studies from "./components/Studies.vue";
import Skills from "./components/Skills.vue";
import Portfolio from "./components/Portfolio.vue";
import { useStore } from "vuex";

const store = useStore();
</script>

<template>
  <NavBar />

  <!-- <div class="absolute top-20 bottom-0 overflow-y-scroll w-100"> -->
  <transition name="bounce">
    <AboutMe v-if="store.state.activeComp == 1" />
  </transition>

  <transition name="bounce">
    <Studies v-if="store.state.activeComp == 2" />
  </transition>

  <transition name="bounce">
    <Skills v-if="store.state.activeComp == 3" />
  </transition>

  <transition name="bounce">
    <Portfolio v-if="store.state.activeComp == 4" />
  </transition>
  <!-- </div> -->
</template>
<style>
.bounce-enter-active {
  animation: bounce-in 0.4s;
}
.bounce-leave-active {
  animation: bounce-in 0.4s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
