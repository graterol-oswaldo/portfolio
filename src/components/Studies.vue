<script setup>
import StudiesAcademic from "./StudiesAcademic.vue";
import StudiesCourses from "./StudiesCourses.vue";
import { lang_data } from "../assets/data/lang";
import { useStore } from "vuex";
import { ref, computed } from "vue";
const store = useStore();
const lang = computed(() => store.state.activeLang);
const tabStudies = ref(true);
function swtichTabStudies(value) {
  tabStudies.value = value;
}
</script>
<template>
  <!-- Academic Studies -->
  <main>
    <div class="max-w-7xl mx-auto my-auto py-10 lg:py-20 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="px-4 py-6 sm:px-0">
        <div
          id="studies"
          class="
            bg-white
            dark:bg-gray-900
            text-gray-900
            dark:text-white
            h-auto
            w-full
            opacity-95
            rounded-xl
            shadow-sm
          "
        >
          <h2 class="text-3xl font-extrabold text-center py-3">
            {{ lang_data[lang].studies }}
          </h2>
          <div class="bg-white dark:bg-gray-900">
            <nav class="flex flex-col sm:flex-row">
              <button
                @click="swtichTabStudies(true)"
                class="
                  py-2
                  px-6
                  mx-auto
                  block
                  text-md
                  focus:outline-none
                  font-semibold
                "
                :class="[
                  tabStudies
                    ? 'text-purple-500 hover:text-gray-600'
                    : 'text-gray-600 hover:text-purple-500',
                ]"
              >
                {{ lang_data[lang].academics }}</button
              ><button
                @click="swtichTabStudies(false)"
                class="
                  py-2
                  px-6
                  mx-auto
                  block
                  text-md
                  focus:outline-none
                  font-semibold
                "
                :class="[
                  !tabStudies
                    ? 'hover:text-gray-600 text-purple-500'
                    : ' hover:text-purple-500 text-gray-600',
                ]"
              >
                {{ lang_data[lang].courses }}
              </button>
            </nav>
          </div>
          <div class="mx-auto pt-1 border-b-2 border-blue-500 opacity-25"></div>
          <div class="max-h-96 overflow-auto">
          <transition name="fade" mode="out-in">
            <StudiesAcademic v-if="tabStudies" />
            <StudiesCourses v-else />
          </transition>
          </div>
        </div>
      </div>
      <!-- /End replace -->
    </div>
  </main>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
