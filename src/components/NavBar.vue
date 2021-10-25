<script setup>
import NavBarDesktop from "./NavBarDesktop.vue";
import NavBarMobile from "./NavBarMobile.vue";
</script>
<template>
  <!-- Nav Bar -->
  <div>
    <nav id="navbar" class="bg-white dark:bg-gray-900 w-full z-50">
      <NavBarDesktop />
      <!-- Mobile menu, show/hide based on menu state. -->
      <NavBarMobile />
    </nav>
  </div>
</template>
