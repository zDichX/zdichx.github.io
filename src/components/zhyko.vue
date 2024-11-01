<script lang="ts" setup>
import { ref, nextTick, onMounted } from 'vue';
import { textSplitAnimation } from '../utils/textSplitAnimation';
const nameElement = ref<HTMLElement | null>(null);

onMounted(async () => {
    await nextTick();

    const fromParams = { opacity: 0.5, scale: 0, margin: 20};
    const toParams = { opacity: 1, scale: 1, stagger: 0.07, margin: 0,  ease: 'elastic.out(1,0.3)', duration: 2};
    textSplitAnimation(nameElement.value, fromParams, toParams);
});
</script>

<template>
<div class="name" ref="nameElement">ZHYKO</div>
</template>

<style scoped>
.name {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(8rem, 15vw, 16rem);
    font-weight: 900;
    z-index: 2;
    overflow: hidden;
}
</style>