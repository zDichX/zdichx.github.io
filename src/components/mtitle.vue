<script setup lang='ts'>
import { gsap } from 'gsap';
import { onMounted, nextTick, ref } from 'vue';
import { textSplit } from '../utils/textSplit';
import handwriting from '../components/handwriting.vue';

const signatureElement = ref<HTMLElement | null>(null);
const nameElement = ref<HTMLElement | null>(null);
const stripesContainerElement = ref<HTMLElement | null>(null);
// const emit = defineEmits<{
//   (e: 'messageSent', message: string): void;
//   (e: 'destroy', message: string): void;
// }>();

onMounted(async () => {
  await nextTick();

  // timeline
  const tl = gsap.timeline();

  textSplit(nameElement.value, "char1")
  tl.to(signatureElement.value, { opacity: 0.5, duration: 0.5, ease: "power4.in", delay: 1 })
    .to(stripesContainerElement.value, { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "power4.inOut" }, "<")
    .set(signatureElement.value, { display: "none" })
    .to(stripesContainerElement.value, { clipPath: "inset(0% 0% 0% 100%)", duration: 1, ease: "power4.in" })
    .set(nameElement.value, { display: "flex" })
    .fromTo(".char1", { opacity: 0.5, y: (i) => (i % 2 === 0 ? -250 : 250) },
      { opacity: 1,  y: 0, stagger: 0.05, ease: 'power4.out', duration: 0.6 })
    .to(nameElement.value, { letterSpacing: "10px", duration: 2, ease: "power4.out" }, "<")
    .to(".cornerBox", { height: () => `${nameElement.value?.offsetHeight}px`, duration: 1, ease: "power4.inOut" }, "-=2")
    .to(".cornerBox", { width: () => `${(nameElement.value?.offsetHeight ?? 0) * 2.8}px`, duration: 2, ease: "power4.inOut" }, "<")
    .to(".cornerBox", { backgroundColor: "#FFFFFF80", duration: 0.2}, "-=1.25")
    .to(".cornerBox", { backgroundColor: "#FFFFFF30", duration: 0.6}, "-=1.1")
    // .to(".char1", { rotate: 0, duration: 1, ease: "power4.out" }, "<")
    .to(nameElement.value, { scale: 0.8, duration: 1, ease: "power4.out" }, "<")
    ;

  const paths = document.querySelectorAll('.draw');

  paths.forEach((path, index) => {
    const svgPath = path as SVGPathElement;
    const length = svgPath.getTotalLength();

    // 设置初始状态
    svgPath.style.strokeDasharray = length.toString();
    svgPath.style.strokeDashoffset = length.toString();

    // console.log(index, -0.05 * index ** 2 + 0.4 * index)

    gsap.fromTo(svgPath,
      { strokeDasharray: length, strokeDashoffset: length, },
      { strokeDashoffset: 0, duration: 1, ease: 'power2.inOut', delay: -0.03125 * index ** 2 + 0.25 * index }
    );
  });


  // stripes
  gsap.to(".stripes", { x: "-42.5%", duration: 2, repeat: -1, ease: "none" });
  // gsap.to(".rbgcontainer", {backgroundPositionY: "-100%",duration: 15,repeat: -1,ease: "none"});
});
</script>

<template>
  <div class="rbgcontainer">
    <div class="cornerBox absolute">
      <div class="corner corner-tl"></div>
      <div class="corner corner-tr"></div>
      <div class="corner corner-bl"></div>
      <div class="corner corner-br"></div>
    </div>
    <div class="name flex absolute" ref="nameElement">ZHYKO</div>
    <div class="stripesContainer absolute" ref="stripesContainerElement">
      <div class="stripes"></div>
    </div>
    <div class="signature absolute" ref="signatureElement">
      <handwriting />
    </div>
  </div>
</template>

<style scoped>
.rbgcontainer {
  height: 100vh;
}

.name {
  padding: 0 30px;
  display: none;
  font-size: clamp(6rem, 15vw, 16rem);
  z-index: 2;
  overflow: visible;
  letter-spacing: -50px;
  overflow: hidden;
  font-weight: 900;
  -webkit-text-stroke: 5px white;
  /* text-shadow: 0 0 20px white; */
  /* border: 30px solid white; */
}

.stripesContainer {
  height: min(150px, 25vw);
  width: min(500px, 80vw);
  overflow: hidden;
  clip-path: inset(0 100% 0 0);
}

.stripes {
  width: 1000px;
  height: 100%;
  transform: translate(0%, 0%);
  background: repeating-linear-gradient(45deg,
      black,
      black 30px,
      white 30px,
      white 60px);
}

.signature {
  width: min(500px, 80vw);
  z-index: -5;
  opacity: 1;
  filter: drop-shadow(0 0 4px white);
  /* will-change: transform,filter; */
}

.cornerBox {
  width: 0;
  height: 0;
  overflow: hidden;
}


.corner {
  width: 20px;
  height: 20px;
  position: absolute;
  background-color: transparent;
  border-style: solid;
  border-color: white;
}

.corner-tl {
  top: 0;
  left: 0;
  border-width: 4px 0 0 4px;
}

.corner-tr {
  top: 0;
  right: 0;
  border-width: 4px 4px 0 0;
}

.corner-bl {
  bottom: 0;
  left: 0;
  border-width: 0 0 4px 4px;
}

.corner-br {
  bottom: 0;
  right: 0;
  border-width: 0 4px 4px 0;
}

</style>