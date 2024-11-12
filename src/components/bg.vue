<script setup lang='ts'>
import gsap from 'gsap';
import { onMounted, nextTick } from 'vue';
onMounted(async () => {
  await nextTick();
  gsap.to(".bg", { backgroundPositionY: "-200%", duration: 30, repeat: -1, ease: "none" });
})
</script>

<template>
  <div class="bg"></div>
</template>

<style scoped>
.bg {
  z-index: -9;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: radial-gradient(circle, #ffffff50 10%, transparent 10%);
  background-size: 35px 35px;
}
</style>
