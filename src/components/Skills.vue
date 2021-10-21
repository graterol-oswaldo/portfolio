<script setup>
import { skills_data } from "../assets/data/skills";
const image_path = "/images/";
</script>
<template>
  <!-- Skill -->
  <main>
    <div id="skills" class="max-w-7xl mx-auto py-20 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="px-4 py-6 sm:px-0">
        <div
          id="skill"
          class="bg-white h-auto w-full opacity-95 rounded-xl shadow-sm"
        >
          <h2 class="text-3xl font-extrabold text-center py-3">Perfil</h2>
          <div class="mx-auto pt-1 border-b-2 border-blue-500 opacity-25"></div>
          <!-- frontend -->
          <div
            class="
              grid
              lg:grid-rows-1 lg:grid-cols-5
              md:grid-rows-2 md:grid-cols-3
              sm:grid-rows-3 sm:grid-cols-2
              justify-items-center
              text-center
              py-8
            "
          >
            <div
              :id="'skill-' + item.id"
              class="pt-3 text-center"
              v-for="item in skills_data"
              :key="item.id"
            >
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img
                  class="h-20 w-20 text-center mr-auto ml-auto"
                  :src="image_path + item.image_logo"
                  alt="html_logo"
                />
                <h3 class="text-center text-xl font-black">{{ item.name }}</h3>
              </a>
            </div>
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </div>
  </main>
</template>
