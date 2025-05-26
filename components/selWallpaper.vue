<script setup lang="ts">
const wallpapers = wallpaper()
</script>
<template>
    <a v-for='wall in wallpapers' :href="wall.path" class="relative shadow-xl shadow-gray-100/25 hover:shadow-orange-500/50 hover:scale-105 duration-500">
        <div class="absolute opacity-0 hover:opacity-100 h-full w-full flex flex-column justify-center items-center hover:backdrop-blur-sm hover:backdrop-filter brightness-75">
          <svg xmlns="http://www.w3.org/2000/svg"
            class="fill-white h-11 w-11 mb-4 max-sm:mb-0 max-sm:h-8 max-sm:w-8"
            viewBox="0 0 512 512">
            <path
              d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
          </svg>
          <p>{{ wall.displayname }}</p>
        </div>
        <NuxtImg
          :src="wall.path"
          class="h-56"
          :alt='wall.displayname' />
      </a>
</template>