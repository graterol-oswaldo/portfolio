<script setup>
import { computed } from "@vue/reactivity";
import { studies_academic_data } from "../assets/data/studies_academic";
import { useStore } from "vuex";
const store = useStore();
const lang = computed(() => store.state.activeLang);
const sortStudies = computed(() => {
  const data = [...studies_academic_data[lang.value]];
  return data.sort((a, b) => {
    return b.end - a.end;
  });
});
</script>
<template>
  <div class="grid sm:grid-cols-1 sm:gap-2 md:grid-cols-2 md:gap-3 p-8 h-80">
    <div
      :class="[item.id == 1 ? 'pt-2 md:pt-2' : 'pt-4 md:pt-2']"
      v-for="item in sortStudies"
      :key="item.id"
    >
      <div class="flex flex-row">
        <div class="flex flex-row pt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-blue-700 h-5 w-5 flex-none mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
            />
          </svg>
        </div>
        <div class="flex-row text-gray-900 dark:text-white">
          <h3 class="text-lg font-bold">
            {{ item.program }}
          </h3>
          <h4 class="text-base font-thin">
            {{ item.institute }}
          </h4>
          <h5>{{ item.begin }}-{{ item.end }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>
