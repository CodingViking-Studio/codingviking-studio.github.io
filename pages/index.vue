<script setup lang="js">
import { onMounted, ref } from 'vue'

  onMounted(() => {
    const para_scene = document.querySelector('[data-relative-input]')
    if (para_scene) {
      const parallaxInstance = new Parallax(para_scene, {
        hoverOnly: true,
        frictionX: 0.2,
        frictionY: 0.2
      })
      parallaxInstance.friction(0.2, 0.2)
    }
  })

</script>
<template>
  <section id="s1" class="flex flex-col justify-center items-center w-full min-h-screen">
    <div data-relative-input="true" id="para_scene" class="fade flex flex-1 justify-center items-center select-none opacity-100">
      <img data-depth="0.5" src="/static/pictures/CVS_Transparent_Logo.png" class="size-2/12 max-sm:size-4/12"></img>
    </div>
    <div id="scroll_arrow" class="fade flex justify-center items-center h-20 min-w-full select-none opacity-100">
      <a href="#s2" class="h-full w-20">
        <img src="/static/pictures/arrow-down-short.svg" class="size-full animate-bounce rounded-full transition-colors duration-300 hover:bg-zinc-800"></img>
      </a>
    </div>
  </section>
  
  <section id="s2" class="fade flex flex-col justify-center items-center w-full relative">
    <div class="mt-20 flex h-20 text-gray-100 font-mono text-2xl relative">
      <h1>w a l l p a p e r</h1>
    </div>
    <div class="p-10 flex flex-col justify-evenly content-evenly flex-1 gap-16 relative text-xl max-sm:text-sm text-white">
      <selWallpaper />
    </div>
  </section>
</template>