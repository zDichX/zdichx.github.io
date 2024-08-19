<script setup lang="ts">
import { gsap } from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
    const backgroundElement = document.querySelector('.background') as HTMLElement;
    if(backgroundElement) {
        gsap.to(backgroundElement, { 
            duration: 1, 
            delay: 0,
            marginTop: 0, 
            ease: 'quint.inOut' 
        });

        gsap.to(backgroundElement, { 
            duration: 2, 
            delay: 0,
            filter: "brightness(0.3)",
            ease: 'quad.out' 
        });
    }
    function updateBackground(): void {
        const now: Date = new Date();
        const hour: number = now.getHours();

        const dayImage = new URL('../assets/bg.png', import.meta.url).href;
        const nightImage = new URL('../assets/bg_dark.png', import.meta.url).href;

        if (backgroundElement) {
            if (hour >= 6 && hour < 18) {
                backgroundElement.style.backgroundImage = `url(${dayImage})`;
            } else {
                backgroundElement.style.backgroundImage = `url(${nightImage})`;
            }
        }
    }

    updateBackground();
    setInterval(updateBackground, 3600000);
})
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
