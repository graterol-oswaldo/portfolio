<script setup>
import { stringify } from "postcss";
import { ref } from "@vue/reactivity";
const props = defineProps({
  type: String,
  title: String,
  url: String,
  description: String,
  images: String,
  tech_stack: { type: Array, required: false, default: () => ["N/A"] },
});
</script>
<template>
  <div class="grid border-2">
    <div class="grid-cols-1 grid-rows-1 p-3">
      <span
        class="
          inline-flex
          items-center
          justify-center
          px-2
          py-1
          text-xs
          font-bold
          leading-none
          text-red-100
          bg-red-600
          rounded-full
        "
        >{{ type }}</span
      >
    </div>
    <div class="w-full md:inline-grid grid-cols-1 md:grid-cols-2 grid-rows-1">
      <div class="w-full p-2">
        <img class="border-4" :src="'/appscreenshots/' + images" alt="" />
      </div>
      <div class="w-full grid-cols-1 grid-rows-4">
        <div class="w-full grid-cols-1 grid-rows-1 p-4">
          <h2 class="text-lg md:text-xl font-bold">{{ title }}</h2>
        </div>
        <div class="w-full grid-cols-1 grid-rows-1 pl-4">
          <a
            v-if="url"
            class="text-xs md:text-sm text-blue-600 inline-grid"
            :href="url"
          >
            <span
              class="
                inline-flex
                items-center
                justify-center
                px-2
                py-1
                text-xs
                font-bold
                leading-none
                text-blue-100
                bg-blue-600
                rounded-full
              "
              >URL</span
            >
          </a>
        </div>
        <div class="w-full grid-cols-1 grid-rows-1 p-4">
          <p class="text-md font-sans font-light">
            {{ description }}
          </p>
        </div>
        <div class="grid-cols-1 grid-rows-1 p-4">
          <span
            class="
              inline-flex
              items-center
              justify-center
              px-2
              py-1
              text-xs
              font-bold
              leading-none
              text-blue-100
              bg-gray-600
              rounded-full
              mr-2
            "
            v-for="(item, index) in tech_stack"
            :key="index"
            >{{ item }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
