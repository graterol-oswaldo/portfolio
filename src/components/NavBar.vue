<script setup>
import NavBarDesktop from "./NavBarDesktop.vue";
import NavBarMobile from "./NavBarMobile.vue";
</script>
<template>
  <!-- Nav Bar -->
  <div>
    <nav id="navbar" class="bg-white w-full z-10">
      <NavBarDesktop />
      <!-- Mobile menu, show/hide based on menu state. -->
      <NavBarMobile />
    </nav>
  </div>
</template>
