<script setup lang="ts">
import { gsap } from 'gsap';
import { ref, onMounted, nextTick } from 'vue';
import { textSplit } from '../utils/textSplit';

const udElement = ref<HTMLElement | null>(null);

onMounted(async () => {
  await nextTick();
  textSplit(udElement.value, "ude")
  gsap.to(".ude", {y: "20px", ease: "sine.inOut", stagger: { each: 0.05, repeat: -1, yoyo: true}})

  gsap.timeline({scrollTrigger: {trigger: ".text1", start: "center 40%", toggleActions: "restart none none reverse"}})
    .to(".text1", {filter: "blur(0px)", opacity: 1, ease: "power4.in", duration:0.6 })
    .to(".text1Title", {scale: 0, ease: "power4.in", duration:0.6 }, "<")

  document.querySelectorAll('.text1').forEach(element => {
  const original = element.querySelector('.original');
  const hover = element.querySelector('.hover');
  
  // element.textContent = original?.textContent || '';
  
  element.addEventListener('mouseenter', () => {
    gsap.to(original, { opacity: 0, duration: 0.5 });
    gsap.to(hover, { opacity: 1, duration: 0.5 });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(original, { opacity: 1, duration: 0.5 });
    gsap.to(hover, { opacity: 0, duration: 0.5 });
  });
});

})



</script>

<template>
  <div class="introduction flex">
    <h2>zHyko!💤</h2>
    <p>读作 /ˈzaɪkoʊ/ 或 /ziːˈhaɪkoʊ/，是曾用名 zhyzx 和 空 的结合，也曾叫做 zDich<del>（再叫zDick我跟你爆了</del> </p>
    <p>（也许）是正常人</p>
    <div class="textCtn flex">
      <div class="text1Title absolute">以下信息面向我的<br><a href="https://x.com/zDichX" style="color: gray;">推特账号</a></div>
      <div class="text1">
        <span class="original">偶尔上推分享一些零碎的想法</span>
        <span class="hover">经常出现逆天言论（</span>
      </div>
      <div class="text1">
        <span class="original">中文 / English / Google Translate ✔️</span>
        <span class="hover">在中中国人</span>
      </div>
      <div class="text1">
        <span class="original">TETR.IO S段萌新</span>
        <span class="hover">定式批</span>
      </div>
      <div class="text1">
        <span class="original">休闲音游人，主玩俄亥俄州立大学，但各种移动端音游和类音游也都玩一点</span>
        <span class="hover">但是哪里典了</span>
      </div>
      <div class="text1">
        <span class="original">玩一款由鹰角网络自主开发运营的策略塔防类手游，但不玩一款开放世界冒险游戏</span>
        <span class="hover">官zDich#5421，欢迎互7（</span>
      </div>
      <div class="text1">
        <span class="original">看数码的 不会技术</span>
        <span class="hover">遥遥领先</span>
      </div>
      <div class="text1">
        <span class="original">几乎不键政，但是关注列表可能有</span>
        <span class="hover">骂谁罕见</span>
      </div>
      <div class="text1">
        <span class="original">LGBTQ+友好</span>
        <span class="hover">你们南通不要太荒谬</span>
      </div>
      <div class="text1">
        <span class="original">不会有NSFW内容</span>
        <span class="hover">自己去pixiv.net解决</span>
      </div>
      <div class="text1">
        <span class="original">淡推，有些消息不一定及时回</span>
        <span class="hover">还好根本没人理我😎👌</span>
      </div>
      <div class="text1">
        <span class="original">不太希望交朋友，但是关注回fo（限正常人，且有至少一次发推/转推）</span>
        <span class="hover">年度涨fo高达-2人</span>
      </div>
    </div>
    <div class="frienzTitle">🎉好朋友们🎉</div>
    <div class="textFrz flex">
      <div class="text2" data-text=" （？">ChatGPT</div>
      <div class="text2" data-text=" ">DiCH</div>
      <div class="text2" data-text=" ">bn</div>
      <div class="text2" data-text=" mug boss">极度美艳的</div>
      <div class="text2" data-text=" with tons of 😨">shft8</div>
      <div class="text2" data-text="：可爱猫娘">Lazer</div>
      <div class="text2" data-text=" daily daily neuro">神性</div>
      <div class="text2" data-text=" 高质量人类">Little Frost</div>
      <div class="text2" data-text=" 热情且非常可爱的">洸縁さんです</div>
      <div class="text2" data-text=" 古典二次元（？">予米子</div>
      <div class="text2" data-text=" ">飙车酱的好朋友</div>
      <div class="text2" data-text=" 认识了很长时间">Chako</div>
      <div class="text2" data-text="...">UPDATING</div>
    </div>

    <div class="ending flex" ref="udElement">UrPrettyCuteToday!</div>
      <div class="mobileText"><del>什么 你不知道每行介绍都可以点吗</del></div>

  </div>
</template>

<style scoped>
.introduction {
  height: 300vh;
  flex-direction: column;
  font-size: clamp(1.2rem, 2vw + 0.5rem, 1.5rem);
  overflow: hidden;
  padding: 10px;
}

.ending {
  font-size: 2.5rem;
  margin: auto 0;
}

a, a:visited, a:hover {
  color: white;
}

.textCtn, .textFrz {
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  border: 10px solid white;
  margin: 20px;
  padding: 20px;
  border-radius: 30px;
}

.text1Title {
  font-size: 2rem;
  text-align: center;
}

.text1 .hover {
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  opacity: 0;
  text-indent: 1em;
  color: gray;
}

.text1 {
  position: relative;
  margin: 2px;
  filter: blur(5px);
  opacity: 0.5;
}

.text2{
  position: relative;
  margin: 2px;
}
.text1::before, .text2::before{
    content: "• ";
    color: white;
    font-size: inherit;
}

.frienzTitle {
  font-size: 1.5rem;
  margin: 50px 0;
}


.text2::after {
  content: attr(data-text);
  color: gray;
}

.mobileText {
  display: none;
  color: gray;
  margin-bottom: 30px;
}

@media (pointer: coarse) {
  .mobileText {
    display: block;
  }
}


</style>
