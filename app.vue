<script setup lang="ts">
// import { onMounted, onBeforeUnmount, ref } from 'vue';
// 
// const cursor = ref<HTMLElement | null>(null);
// 
// function move(e: MouseEvent) {
//   if (!cursor.value) return;
//   const x = e.clientX;
//   const y = e.clientY;
//   cursor.value.style.left = x + 'px';
//   cursor.value.style.top = y + 'px';
// }
// 
// function handleMouseOver() {
//   if (cursor.value) cursor.value.style.opacity = '1';
// }
// 
// function handleMouseOut() {
//   if (cursor.value) cursor.value.style.opacity = '0';
// }
// 
// function handleMouseDown() {
//   if (cursor.value) cursor.value.classList.add('click');
// }
// 
// function handleMouseUp() {
//   if (cursor.value) cursor.value.classList.remove('click');
// }
// 
// function handleLinkMouseOver() {
//   if (cursor.value) {
//     cursor.value.classList.remove('outa');
//     cursor.value.classList.add('ina');
//   }
// }
// 
// function handleLinkMouseLeave() {
//   if (cursor.value) {
//     cursor.value.classList.remove('ina');
//     cursor.value.classList.add('outa');
//   }
// }
// 
// onMounted(() => {
//   cursor.value = document.querySelector('.cursor') as HTMLElement | null;
// 
//   window.addEventListener('mousemove', move);
//   document.addEventListener('mouseover', handleMouseOver);
//   document.addEventListener('mouseout', handleMouseOut);
//   document.addEventListener('mousedown', handleMouseDown);
//   document.addEventListener('mouseup', handleMouseUp);
// 
//   const aElems = Array.from(document.querySelectorAll('a'));
//   aElems.forEach(elem => {
//     elem.addEventListener('mouseover', handleLinkMouseOver);
//     elem.addEventListener('mouseleave', handleLinkMouseLeave);
//   });
// });
// 
// onBeforeUnmount(() => {
//   window.removeEventListener('mousemove', move);
//   document.removeEventListener('mouseover', handleMouseOver);
//   document.removeEventListener('mouseout', handleMouseOut);
//   document.removeEventListener('mousedown', handleMouseDown);
//   document.removeEventListener('mouseup', handleMouseUp);
// 
//   const aElems = Array.from(document.querySelectorAll('a'));
//   aElems.forEach(elem => {
//     elem.removeEventListener('mouseover', handleLinkMouseOver);
//     elem.removeEventListener('mouseleave', handleLinkMouseLeave);
//   });
// });
</script>
<template>
  <!--<div class="z-10 cursor"></div>-->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>