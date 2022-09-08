<script setup>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import { lang_data } from "../assets/data/lang";

const store = useStore();
const setActiveComp = (value) => {
  store.commit("setActiveComp", value);
};
const swMobileMode = () => {
  const modeMobile = !store.state.mobileMode;
  store.commit("setMobileMode", modeMobile);
};
const swDarkMode = () => {
  const modeDark = !store.state.darkMode;
  store.commit("setDarkMode", modeDark);
};
const currentLang = computed(() => store.state.activeLang);
const setActiveLang = () => {
  store.commit("setActiveLang");
};
const flagIconLang = computed(() => {
  return currentLang.value == "es" ? "united-kingdom.svg" : "spain.svg";
});
const darkMode = computed(() => store.state.darkMode);
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <img
            class="h-8 w-8"
            src="./images/Mr_Smiley_Face.svg"
            alt="Workflow"
          />
        </div>
        <div class="hidden md:block">
          <div id="navbar-item" class="ml-10 flex items-baseline space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

            <button
              @click="setActiveComp(1)"
              class="
                text-gray-900
                dark:text-white
                hover:bg-gray-700 hover:text-white
                dark:hover:bg-white dark:hover:text-gray-900
                px-3
                py-2
                rounded-md
                text-md
                font-bold
              "
            >
              {{ lang_data[currentLang].aboutme }}
            </button>

            <button
              @click="setActiveComp(2)"
              class="
                text-gray-900
                dark:text-white
                hover:bg-gray-700 hover:text-white
                dark:hover:bg-white dark:hover:text-gray-900
                px-3
                py-2
                rounded-md
                text-md
                font-bold
              "
            >
              {{ lang_data[currentLang].studies }}
            </button>

            <button
              @click="setActiveComp(3)"
              class="
                text-gray-900
                dark:text-white
                hover:bg-gray-700 hover:text-white
                dark:hover:bg-white dark:hover:text-gray-900
                px-3
                py-2
                rounded-md
                text-md
                font-bold
              "
            >
              {{ lang_data[currentLang].skills }}
            </button>

            <button
              @click="setActiveComp(4)"
              class="
                text-gray-900
                dark:text-white
                hover:bg-gray-700 hover:text-white
                dark:hover:bg-white dark:hover:text-gray-900
                px-3
                py-2
                rounded-md
                text-md
                font-bold
              "
            >
              {{ lang_data[currentLang].portfolio }}
            </button>
          </div>
        </div>
        <!-- Pin to top right corner -->
        <!-- class="absolute top-0 right-1/4 h-12 w-18 p-4 z-20" -->
        <div class="flex absolute right-1/4 md:right-10">
          <div class="flex mr-10">
            <!-- <button @click="setActiveLang()">{{ currentLang }}</button> -->
            <button @click="setActiveLang()">
              <img
                class="h-6 w-6 text-center mr-auto ml-auto"
                :src="'./images/' + flagIconLang"
                alt="html_logo"
              />
            </button>
          </div>
          <!-- <button class="js-change-theme focus:outline-none hidden">🌙</button> -->
          <!-- Swtich Dark Mode -->
          <svg
            class="w-5 h-5 mr-2 text-blue-600"
            :class="[darkMode ? ' dark:text-white' : ' dark:text-blue-600']"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>

          <div
            class="
              relative
              inline-block
              w-10
              mr-2
              align-middle
              select-none
              transition
              duration-200
              ease-in
            "
          >
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              class="
                toggle-checkbox
                absolute
                block
                w-6
                h-6
                rounded-full
                bg-white
                border-4
                appearance-none
                cursor-pointer
              "
              :checked="darkMode"
              @click="swDarkMode()"
            />
            <label
              for="toggle"
              class="
                toggle-label
                block
                overflow-hidden
                h-6
                rounded-full
                bg-gray-300
                cursor-pointer
              "
            ></label>
          </div>
          <svg
            class="w-5 h-5 text-gray-900"
            :class="[darkMode ? 'dark:text-blue-600' : 'dark:text-gray-900']"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>

          <!-- <label for="toggle" class="text-xs text-gray-700">toggle m3!</label> -->
        </div>
      </div>
      <div class="mr-2 flex md:hidden">
        <!-- Mobile menu button -->
        <button
          class="
            bg-gray-800
            inline-flex
            items-center
            justify-center
            p-2
            rounded-md
            text-gray-400
            hover:text-white hover:bg-gray-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-offset-gray-800
            focus:ring-white
          "
          aria-controls="mobile-menu"
          aria-expanded="false"
          @click="swMobileMode()"
        >
          <span class="sr-only">Open main menu</span>
          <!--
				Heroicon name: outline/menu
  
				Menu open: "hidden", Menu closed: "block"
			  -->
          <svg
            class="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <!--
				Heroicon name: outline/x
  
				Menu open: "block", Menu closed: "hidden"
			  -->
          <svg
            class="hidden h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<style>
/* CHECKBOX TOGGLE SWITCH */
/* @apply rules for documentation, these do not work as inline style */
.toggle-checkbox:checked {
  @apply: right-0 border-blue-400;
  right: 0;
  border-color: #5a7cd8;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-blue-400;
  background-color: #5a7cd8;
}
</style>
