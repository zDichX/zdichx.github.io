<script setup lang='ts'>
// import { ref } from 'vue'

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
</script>

<template>
  <mtitle />
  <cards />
  <introduction />
</template>

<style scoped>

</style>
