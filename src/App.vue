<script setup lang='ts'>
// import { ref } from 'vue'
import gsap from 'gsap';
import { onMounted, nextTick } from 'vue';
import cards from './components/cards.vue';
import Introduction from './components/Introduction.vue';
import mtitle from './components/mtitle.vue';

// const showRbg = ref<boolean>(false)
// const showBg = ref<boolean>(false)
// const showCard = ref<boolean>(false)

// onMounted(() => {
//   const loadComponent = (refVar: { value: boolean }, delay: number): void => {
//   setTimeout(() => {
//     refVar.value = true
//   }, delay)
// }
//   loadComponent(showRbg, 500)
//   loadComponent(showBg, 1000)
//   loadComponent(showCard, 2000)
//   })
onMounted(async () => {
  await nextTick();
  gsap.to(".bg", { backgroundPositionY: "-200%", duration: 30, repeat: -1, ease: "none" });
})
</script>

<template>
  <mtitle />
  <cards />
  <introduction />
  <div class="bg"></div>
</template>

<style scoped>
.bg {
  z-index: -99;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: radial-gradient(circle, #ffffff50 10%, transparent 10%);
  background-size: 35px 35px;
}
</style>
