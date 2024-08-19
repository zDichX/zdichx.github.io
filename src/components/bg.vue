<script setup lang="ts">
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';

const backgroundElement = ref<HTMLElement | null>(null);

const updateBackground = () => {
    const now = new Date();
    const hour = now.getHours();

    const dayImage = new URL('../assets/bg.png', import.meta.url).href;
    const nightImage = new URL('../assets/bg_dark.png', import.meta.url).href;

    if (backgroundElement.value) {
        backgroundElement.value.style.backgroundImage = hour >= 6 && hour < 18
            ? `url(${dayImage})`
            : `url(${nightImage})`;
    }
};

onMounted(() => {
    backgroundElement.value = document.querySelector('.background') as HTMLElement;

    window.onload = () => {
        if (backgroundElement.value) {
            const tl = gsap.timeline();
            tl.to(backgroundElement.value, { 
                duration: 1, 
                marginTop: 0, 
                ease: 'quint.inOut' 
            })
            .to(backgroundElement.value, { 
                duration: 2, 
                filter: "brightness(0.3)",
                ease: 'quad.out' 
            }, "-=0.5");

            updateBackground();
            setInterval(updateBackground, 3600000);
        }
    }
});
</script>

<template>
    <div class="background"></div>
</template>

<style scoped>
.background {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-position: center;
    background-size: cover;
    margin-top: 100vh;
    filter: brightness(100%);
    will-change: margin-top, filter;
}
</style>
