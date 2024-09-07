<script setup lang='ts'>
import { ref, onMounted } from 'vue'

import rbg from './components/rbg.vue';
import bg from './components/bg.vue';
import card from './components/card.vue';


const showRbg = ref<boolean>(false)
const showBg = ref<boolean>(false)
const showCard = ref<boolean>(false)

onMounted(() => {
  const loadComponent = (refVar: { value: boolean }, delay: number): void => {
  setTimeout(() => {
    refVar.value = true
  }, delay)
}
  loadComponent(showRbg, 500)
  loadComponent(showBg, 1000)
  loadComponent(showCard, 2000)
  })
</script>

<template>
    <rbg v-if="showRbg" />
    <bg v-if="showBg" />
    <card v-if="showCard" />

</template>

<style scoped>
</style>
