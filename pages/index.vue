<script setup lang="js">
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
  <div class="z-10 cursor"></div>
  <section id="s1" class="flex flex-col justify-center items-center w-full min-h-screen">
    <div data-relative-input="true" ref="para_scene" class="fade flex flex-1 justify-center items-center select-none opacity-100">
      <img data-depth="0.5" src="/static/pictures/CVS_Transparent_Logo.png" class="size-2/12 max-sm:size-4/12"></img>
    </div>
    <div id="scroll_arrow" class="fade flex justify-center items-center h-20 min-w-full select-none opacity-100">
      <a href="#s2" class="h-full w-20">
        <img src="/static/pictures/arrow-down-short.svg" class="size-full animate-bounce rounded-full transition-colors duration-300 hover:bg-zinc-800"></img>
      </a>
    </div>
  </section>
  
  <section id="s2" class="fade flex flex-col justify-center items-center w-full relative opacity-0">
    <div class="mt-20 flex h-20 text-gray-100 font-mono text-2xl relative">
      <h1>w a l l p a p e r</h1>
    </div>
    <div class="p-10 flex flex-col justify-evenly content-evenly flex-1 gap-16 relative text-xl max-sm:text-sm text-white">
      <a href="/static/downloads/Wallpaper_UW_green.png" class="relative shadow-xl shadow-gray-100/25 hover:shadow-cvs-orange hover:scale-105 duration-500">
        <div class="absolute optest h-100 w-100 flex flex-column justify-center items-center hover:backdrop-blur-sm hover:backdrop-filter brightness-75">
          <svg xmlns="http://www.w3.org/2000/svg"
            class="fill-white h-11 w-11 mb-4 max-sm:mb-0 max-sm:h-8 max-sm:w-8"
            viewBox="0 0 512 512">
            <path
              d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
          </svg>
          <p>49" Ultra Wide Wallpaper WQHD "Green"</p>
        </div>
        <img src="/static/pictures/Wallpaper_UW_green_Small.jpg" class="h-30"></img>
      </a>
      <a href="/static/downloads/Wallpaper_UW_V1.png" class="relative shadow-xl shadow-gray-100/25 hover:shadow-cvs-orange hover:scale-105 duration-500">
        <div
          class="absolute optest h-100 w-100 flex flex-column justify-center items-center hover:backdrop-blur-sm hover:backdrop-filter brightness-75">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-white h-11 w-11 mb-4 max-sm:mb-0 max-sm:h-8 max-sm:w-8"
            viewBox="0 0 512 512">
            <path
              d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
          </svg>
          <p>49" Ultra Wide Wallpaper WQHD "Standard"</p>
        </div>
        <img src="/static/pictures/Wallpaper_UW_V1_Small.jpg" class="h-30"></img>
      </a>
      <a href="/static/downloads/Wallpaper_UW_V2.png" class="relative shadow-xl shadow-gray-100/25 hover:shadow-cvs-orange hover:scale-105 duration-500">
        <div
          class="absolute optest h-100 w-100 flex flex-column justify-center items-center hover:backdrop-blur-sm hover:backdrop-filter brightness-75">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-white h-11 w-11 mb-4 max-sm:mb-0 max-sm:h-8 max-sm:w-8"
            viewBox="0 0 512 512">
            <path
              d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
          </svg>
          <p>49" Ultra Wide Wallpaper WQHD "Standard Mirrored"</p>
        </div>
        <img src="/static/pictures/Wallpaper_UW_V2_Small.jpg" class="h-30"></img>
      </a>
      <a href="/static/downloads/Wallpaper_UW_warm.png" class="relative shadow-xl shadow-gray-100/25 hover:shadow-cvs-orange hover:scale-105 duration-500">
        <div
          class="absolute optest h-100 w-100 flex flex-column justify-center items-center hover:backdrop-blur-sm hover:backdrop-filter brightness-75">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-white h-11 w-11 mb-4 max-sm:mb-0 max-sm:h-8 max-sm:w-8"
            viewBox="0 0 512 512">
            <path
              d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
          </svg>
          <p>49" Ultra Wide Wallpaper WQHD "Warm"</p>
        </div>
        <img src="/static/pictures/Wallpaper_UW_warm_Small.jpg" class="h-30"></img>
      </a>
      <a href="/static/downloads/Wallpaper_Colors_Coffee_dark.jpg"
        class="relative shadow-xl shadow-gray-100/25 hover:shadow-cvs-orange hover:scale-105 duration-500">
        <div
          class="absolute optest h-100 w-100 flex flex-column justify-center items-center hover:backdrop-blur-sm hover:backdrop-filter brightness-75">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-white h-11 w-11 mb-4 max-sm:mb-0 max-sm:h-8 max-sm:w-8"
            viewBox="0 0 512 512">
            <path
              d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
          </svg>
          <p>49" Ultra Wide Wallpaper WQHD Coffee palette "dark"</p>
        </div>
        <img src="/static/pictures/Wallpaper_Colors_Coffee_dark_small.jpg" class="h-30"></img>
      </a>
      <a href="/static/downloads/Wallpaper_Colors_Coffee_light.png"
        class="relative shadow-xl shadow-gray-100/25 hover:shadow-cvs-orange hover:scale-105 duration-500">
        <div
          class="absolute optest h-100 w-100 flex flex-column justify-center items-center hover:backdrop-blur-sm hover:backdrop-filter brightness-75">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-white h-11 w-11 mb-4 max-sm:mb-0 max-sm:h-8 max-sm:w-8"
            viewBox="0 0 512 512">
            <path
              d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
          </svg>
          <p>49" Ultra Wide Wallpaper WQHD Coffee palette "light"</p>
        </div>
        <img src="/static/pictures/Wallpaper_Colors_Coffee_light_small.png" class="h-30"></img>
      </a>
      <a href="/static/downloads/MissionR-1.jpg"
        class="relative shadow-xl shadow-gray-100/25 hover:shadow-cvs-orange hover:scale-105 duration-500">
        <div
          class="absolute optest h-100 w-100 flex flex-column justify-center items-center hover:backdrop-blur-sm hover:backdrop-filter brightness-75">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-white h-11 w-11 mb-4 max-sm:mb-0 max-sm:h-8 max-sm:w-8"
            viewBox="0 0 512 512">
            <path
              d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
          </svg>
          <p>49" Ultra Wide Wallpaper WQHD Porsche Mission R 1</p>
        </div>
        <img src="/static/pictures/MissionR-1_small.jpg" class="h-30"></img>
      </a>
      <a href="/static/downloads/MissionR-2.jpg"
        class="relative shadow-xl shadow-gray-100/25 hover:shadow-cvs-orange hover:scale-105 duration-500">
        <div
          class="absolute optest h-100 w-100 flex flex-column justify-center items-center hover:backdrop-blur-sm hover:backdrop-filter brightness-75">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-white h-11 w-11 mb-4 max-sm:mb-0 max-sm:h-8 max-sm:w-8"
            viewBox="0 0 512 512">
            <path
              d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
          </svg>
          <p>49" Ultra Wide Wallpaper WQHD Porsche Mission R 2</p>
        </div>
        <img src="/static/pictures/MissionR-2_small.jpg" class="h-30"></img>
      </a>
      <a href="/static/downloads/MissionR-3.jpg"
        class="relative shadow-xl shadow-gray-100/25 hover:shadow-cvs-orange hover:scale-105 duration-500">
        <div
          class="absolute optest h-100 w-100 flex flex-column justify-center items-center hover:backdrop-blur-sm hover:backdrop-filter brightness-75">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-white h-11 w-11 mb-4 max-sm:mb-0 max-sm:h-8 max-sm:w-8"
            viewBox="0 0 512 512">
            <path
              d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
          </svg>
          <p>49" Ultra Wide Wallpaper WQHD Porsche Mission R 3</p>
        </div>
        <img src="/static/pictures/MissionR-3_small.jpg" class="h-30"></img>
      </a>
    </div>
  </section>
</template>