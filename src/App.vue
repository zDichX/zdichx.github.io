<script setup lang='ts'>
import { ref, onMounted, nextTick, Ref } from 'vue';
import cards from './components/cards.vue';
import Introduction from './components/Introduction.vue';
import mtitle from './components/mtitle.vue';
import bg from './components/bg.vue';

const showDiv = ref(true);
const showBg = ref(true);

const handleResize = async (element: Ref<boolean, boolean>) => {
  // console.log("Window resized! New dimensions:", window.innerWidth, "x", window.innerHeight);
  element.value = false;
  await nextTick();
  element.value = true;
};

const handleRefresh = () => {
  window.location.href = window.location.href;
};


// 在组件挂载时添加事件监听器
onMounted(() => {
  let previousWidth = window.innerWidth;
  let previousHeight = window.innerHeight;

  window.addEventListener("resize", () => {
    if (window.innerWidth !== previousWidth) {
      handleResize(showDiv);
      previousWidth = window.innerWidth;
    }
    else if (window.innerHeight !== previousHeight) {
      handleResize(showBg);
      previousHeight = window.innerHeight;
    }
  })
});

</script>

<template>
  <div v-if="showDiv">
    <mtitle />
    <cards @destroy="handleRefresh" />
    <introduction />
    <bg v-if="showBg"/>
  </div>
</template>