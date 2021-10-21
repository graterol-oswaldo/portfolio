<script setup>
import { studies_courses_data } from "../assets/data/studies_courses";
import { computed } from "@vue/reactivity";
const sortStudies = computed(() => {
  return studies_courses_data.sort((a, b) => {
    return b.year - a.year;
  });
});
</script>
<template>
  <div class="grid sm:grid-cols-1 sm:gap-2 md:grid-cols-2 md:gap-3 p-8">
    <div
      :class="[item.id == 1 ? 'sm: pt - 6' : '']"
      v-for="item in sortStudies"
      :key="item.id"
    >
      <div class="flex flex-row">
        <div class="pt-2">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            ></path>
          </svg>
        </div>
        <div>
          <div>
            <h4 class="text-md font-bold inline-flex mr-2 pt-2">
              {{ item.course }}
            </h4>
          </div>
          <div class="flex flex-row">
            <h3 class="text-sm font-thin">
              {{ item.institute }}
            </h3>
          </div>
          <div class="flex flex-row">
            <h3 class="text-sm font-thin">
              {{ item.year }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
