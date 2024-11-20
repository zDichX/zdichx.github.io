<script setup lang="ts">
import { gsap } from 'gsap';
import { ref, onMounted, nextTick } from 'vue';
import { textSplit } from '../utils/textSplit';

const udElement = ref<HTMLElement | null>(null);

onMounted(async () => {
  await nextTick();
  textSplit(udElement.value, "ude")
  gsap.to(".ude", {y: "5vw", ease: "sine.inOut", stagger: { each: 0.05, repeat: -1, yoyo: true}})
})
</script>

<template>
  <div class="text flex">
    <h2>zHyko!💤</h2>
    <p>读作 /ˈzaɪkoʊ/ 或 /ziːˈhaɪkoʊ/，是曾用名 zhyzx 和 空 的结合，也曾叫做 zDich </p>
    <p>（也许）是正常人</p>
    <ul>
      <li>偶尔分享一些零碎的想法</li>
      <li>中文 / English / Google Translate ✔️</li>
      <li>移动端音游人 各种音游都玩一点<del>（买不起板子和曲包</del></li>
      <ul>
        <li><del>不是乌蒙池！！！</del></li>
      </ul>
      <li><a href="https://osu.ppy.sh/users/16943258">俄亥俄州立大学休闲玩家🔗</a></li>
      <li>玩一款由鹰角网络自主开发运营的策略塔防类手游，但不玩一款开放世界冒险游戏</li>
      <li>看数码的 不会技术</li>
      <li>LGBTQ+友好<del>（你们南通不要太荒谬</del></li>
      <li>几乎不键政，但是关注/转推可能有</li>
      <li>淡推，有些消息不一定及时回</li>
      <li>不会有NSFW内容</li>
      <li>缺乏表达能力，经常出现逆天言论（</li>
      <li>不太希望交朋友，但是关注回fo（限正常人，且有至少一次发推/转推）</li>
    </ul>
    <div class="comming flex" ref="udElement">under construction...</div>
  </div>
</template>

<style scoped>
.text {
  height: 200vh;
  flex-direction: column;
  font-size: 20px;
  overflow: hidden;
  padding: 10px;
}

.comming {
  font-size: 8vw;
  margin: 170px 0;
}

a, a:visited, a:hover {
  color: white;
}
</style>