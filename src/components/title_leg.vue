<script lang="ts" setup>
import { ref, nextTick, onMounted } from 'vue';
import { textSplitAnimation } from '../utils/textSplitAnimation';
const nameElement = ref<HTMLElement | null>(null);
const containerElement = ref<HTMLElement | null>(null);

onMounted(async () => {
    await nextTick();

    const fromParams = { opacity: 0, scale: 0, margin: 20};
    const toParams = { opacity: 1, scale: 1, margin: 0,  ease: 'elastic.out(1,0.3)', duration: 2, stagger: 0.07, };
    textSplitAnimation(containerElement.value, fromParams, toParams);
});
</script>

<template>
    <div class="container" ref="containerElement">
        <div class="name" ref="nameElement">ZHYKO</div>
    </div>

</template>

<style scoped>
.container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(6rem, 15vw, 16rem);
    font-weight: 900;
    z-index: 2;
    overflow: hidden;
}

.name {
    color: transparent;
    position: relative;
}

/* .name::after {
    content: 'ZHYKO';
    position: absolute;
    top: 0;
    left: 0;
    -webkit-text-stroke: 5px;
    -webkit-text-stroke-color: white;
    -webkit-text-fill-color: transparent;
} */
</style>