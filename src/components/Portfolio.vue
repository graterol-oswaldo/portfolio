<script setup>
import PortfolioCard from "./PortfolioCard.vue";
import { portfolio_data } from "../assets/data/portfolio";
import { lang_data } from "../assets/data/lang";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

const store = useStore();
const lang = computed(() => store.state.activeLang);
const portfolio = computed(() => portfolio_data[lang.value]);
</script>
<template>
  <!-- Skill -->
  <main>
    <div
      id="portfolio"
      class="max-w-7xl mx-auto py-10 lg:py-20 sm:px-6 lg:px-8"
    >
      <!-- Replace with your content -->
      <div class="px-4 py-6 sm:px-0">
        <div
          id="skill"
          class="
            bg-white
            dark:bg-gray-900
            text-gray-900
            dark:text-white
            
            w-full
            opacity-95
            rounded-xl
            shadow-sm
          "
        >
          <h2 class="text-3xl font-extrabold text-center py-3">
            {{ lang_data[lang].portfolio }}
          </h2>
          <div class="mx-auto pt-1 border-b-2 border-blue-500 opacity-25"></div>
          <!-- frontend -->
          <div class="max-h-96 overflow-auto">
            <PortfolioCard
              v-for="item in portfolio"
              :key="item.id"
              :type="item.type"
              :title="item.title"
              :url="item.url"
              :description="item.description"
              :images="item.images"
              :tech_stack="item.tech_stack"
            >
            </PortfolioCard>
          </div>
        </div>
      </div>
      <!-- /End replace -->
    </div>
  </main>
</template>
