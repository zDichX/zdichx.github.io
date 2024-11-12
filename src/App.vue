<script setup lang='ts'>
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue';
import cards from './components/cards.vue';
import Introduction from './components/Introduction.vue';
import mtitle from './components/mtitle.vue';
import bg from './components/bg.vue';

const showDiv = ref(true);

const handleResize = async () => {
  // console.log("Window resized! New dimensions:", window.innerWidth, "x", window.innerHeight);
  showDiv.value = false;
  await nextTick();
  showDiv.value = true;
};

// 在组件挂载时添加事件监听器
onMounted(() => {
  window.addEventListener("resize", handleResize);
});

// 在组件卸载前移除事件监听器
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <div v-if="showDiv">
    <mtitle />
    <cards />
    <introduction />
    <bg />
  </div>
</template>