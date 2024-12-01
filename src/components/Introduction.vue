<script setup lang="ts">
import { gsap } from 'gsap';
import { ref, onMounted, nextTick } from 'vue';
import { textSplit } from '../utils/textSplit';

const udElement = ref<HTMLElement | null>(null);

onMounted(async () => {
  await nextTick();
  textSplit(udElement.value, "ude")
  gsap.to(".ude", {y: "20px", ease: "sine.inOut", stagger: { each: 0.05, repeat: -1, yoyo: true}})
  // gsap.fromTo(".text1:hover::before", {width: 0}, {width: 100})
})
</script>

<template>
  <div class="introduction flex">
    <h2>zHyko!💤</h2>
    <p>读作 /ˈzaɪkoʊ/ 或 /ziːˈhaɪkoʊ/，是曾用名 zhyzx 和 空 的结合，也曾叫做 zDich<del>（再叫zDick我跟你爆了</del> </p>
    <p>（也许）是正常人</p>
    <div class="textCtn flex">
      <div class="text1" data-text="经常出现逆天言论">偶尔上推分享一些零碎的想法</div>  
      <div class="text1" data-text="在中中国人">中文 / English / Google Translate ✔️</div>
      <div class="text1" data-text="（不是乌蒙吃！！！">移动端音游人 各种音游都玩一点（买不起板子和曲包</div>
      <div class="text1"><a href="https://osu.ppy.sh/users/16943258">>>>俄亥俄州立大学休闲玩家>>></a></div>
      <div class="text1" data-text="官zDich#5421，欢迎互7（">玩一款由鹰角网络自主开发运营的策略塔防类手游，但不玩一款开放世界冒险游戏</div>
      <div class="text1" data-text="遥遥领先">看数码的 不会技术</div>
      <div class="text1" data-text="（你们南通不要太荒谬">LGBTQ+友好</div>
      <div class="text1" data-text="自己去pixiv.net解决">不会有NSFW内容</div>
      <div class="text1" data-text="还好根本没人理我😎👌">淡推，有些消息不一定及时回</div>
      <div class="text1" data-text="因为缺乏表达能力（">不太希望交朋友，但是关注回fo（限正常人，且有至少一次发推/转推）</div>
    </div>
    <!-- <ul>
      <li>偶尔分享一些零碎的想法</li>
      <li>中文 / English / Google Translate ✔️</li>
      <li>移动端音游人 各种音游都玩一点<del>（买不起板子和曲包</del></li>
      <ul>
        <li><del>不是乌蒙池！！！</del></li>
      </ul>
      <li><a href="https://osu.ppy.sh/users/16943258">俄亥俄州立大学休闲玩家</a></li>
      <li>玩一款由鹰角网络自主开发运营的策略塔防类手游（官zDich#5421），但不玩一款开放世界冒险游戏</li>
      <li>看数码的 不会技术</li>
      <li>LGBTQ+友好<del>（你们南通不要太荒谬</del></li>
      <li>几乎不键政，但是关注/转推可能有</li>
      <li>淡推，有些消息不一定及时回</li>
      <li>不会有NSFW内容</li>
      <li>缺乏表达能力，经常出现逆天言论（</li>
      <li>不太希望交朋友，但是关注回fo（限正常人，且有至少一次发推/转推）</li>
    </ul> -->
    <div class="ending flex" ref="udElement">under construction...</div>
    <div class="mobileText"><del>什么，你不知道每行文字都可以点吗</del></div>
  </div>
</template>

<style scoped>
.introduction {
  height: 100vh;
  flex-direction: column;
  font-size: clamp(0.5rem, 2vw + 0.5rem, 1.5rem);
  overflow: hidden;
  padding: 10px;
}

.ending {
  font-size: clamp(1rem, 2vw + 1rem, 2.5rem);
  margin: auto 0;
}

a, a:visited, a:hover {
  color: white;
}

.textCtn {
  flex-direction: column;
  align-items: flex-start;
}

.text1 {
  position: relative;
  margin: 2px;
  transition: 0.5s;
}
.text1:hover {
  color: transparent;
}

.text1::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 10px;
  overflow: hidden;
  white-space: nowrap;
  color: transparent;
  transition: 0.5s;
}

.text1:hover::after {
  color: gray;
}

.text1::before {
    content: "• ";
    color: white;
    font-size: inherit;
}

.mobileText {
  display: none;
  color: gray;
}

@media (pointer: coarse) {
  .mobileText {
    display: block;
  }
}
</style>