<script setup lang='ts'>
import gsap from 'gsap';
import { onMounted, nextTick } from 'vue';
onMounted(async () => {
  await nextTick();
  gsap.to(".bg", {
    backgroundPositionY: "-=35px",
    duration: 2,
    repeat: -1,
    ease: "none",
    modifiers: {
      backgroundPositionY: (y) => {
        const yValue = parseFloat(y.replace('px', ''));
        return `${yValue % 35}px`; // 通过取模让数值始终在[0,35)区间循环
      }
    }
  });
})
</script>

<template>
  <div class="bg"></div>
  <div class="vignette absolute"></div>
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

.vignette {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -8;
  background: radial-gradient(circle at center, 
    rgba(0,0,0,0) 0%, 
    rgba(0,0,0,0.7) 100%);
}
</style>
