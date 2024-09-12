<script setup lang='ts'>
import { gsap } from 'gsap';
import { onMounted, nextTick, ref, computed } from 'vue';

const backgroundElement = ref<HTMLElement | null>(null);
const currentHour = new Date().getHours();

const imageUrl = ref<string>('');

if (currentHour >= 6 && currentHour < 18) {
  imageUrl.value = new URL('../assets/bg.webp', import.meta.url).href;
} else {
  imageUrl.value = new URL('../assets/bg_dark.webp', import.meta.url).href;
}

const setBackgroundImage = computed(() => ({
  backgroundImage: `url(${imageUrl.value})`,
}));

// const updateBackground = () => {
//     const now = new Date();
//     const hour = now.getHours();

//     const dayImage = new URL('../assets/bg.webp', import.meta.url).href;
//     const nightImage = new URL('../assets/bg_dark.webp', import.meta.url).href;

//     if (backgroundElement.value) {
//         backgroundElement.value.style.backgroundImage = hour >= 6 && hour < 18
//             ? `url(${dayImage})`
//             : `url(${nightImage})`;
//     }
// };

onMounted(async () => {
    await nextTick();
    backgroundElement.value = document.querySelector('.background') as HTMLElement;
    
    if (backgroundElement.value) {
        const tl = gsap.timeline();
        tl.to(backgroundElement.value, { 
            duration: 2, 
            marginTop: 0, 
            clipPath: 'inset(0% 0 0 0)',
            ease: 'power4.inOut' 
        })
        .to(backgroundElement.value, { 
            duration: 2, 
            filter: 'brightness(0.3)',
            ease: 'quad.out' 
        }, '-=1');

        // updateBackground();
        // setInterval(updateBackground, 3600000);
    }
    
});
</script>

<template>
    <div class='background' :style="setBackgroundImage"></div>
</template>

<style scoped>
.background {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-position: center;
    background-size: cover;
    clip-path: inset(100% 0 0 0);
    margin-top: 30vh;
    filter: brightness(1);
    /* will-change: margin-top, filter, clip-path; */
}
</style>
