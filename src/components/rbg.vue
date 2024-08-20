<script setup lang='ts'>
import { gsap } from 'gsap';
import { onMounted, nextTick, ref } from 'vue';

const rootbgElement = ref<HTMLElement | null>(null);

onMounted(async () => {
    await nextTick();

    rootbgElement.value = document.querySelector('.rbgcontainer') as HTMLElement;

    if (rootbgElement.value) {
        gsap.to(rootbgElement.value, { 
            duration: 1, 
            delay: 0.5,
            scale: 0.5,
            filter: 'blur(20px)',
            ease: 'power4.inOut',
        });
    }
});
</script>
<template>
    <div class="rbgcontainer">
        <img src='../assets/title.png' alt='rootbg' class='rootbg'>
    </div>
    
</template>
<style>
.rbgcontainer {
    position: fixed;
    height: 100vh;
    width: 100vw;
}
.rootbg {
    position: absolute;
    overflow: hidden;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    max-width: 80vw;
    max-height: 20vh;
    z-index: -1;
    /* will-change: transform,filter; */

}
</style>