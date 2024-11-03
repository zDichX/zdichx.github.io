<script setup lang='ts'>
import { gsap } from 'gsap';
import { onMounted, nextTick, ref } from 'vue';
import { textSplitAnimation } from '../utils/textSplitAnimation';

const rbgcontainerElement = ref<HTMLElement | null>(null);
const signatureElement = ref<HTMLElement | null>(null);

const nameElement = ref<HTMLElement | null>(null);
// const emit = defineEmits<{
//   (e: 'messageSent', message: string): void;
//   (e: 'destroy', message: string): void;
// }>();

onMounted(async () => {
  await nextTick();
  rbgcontainerElement.value = document.querySelector('.rbgcontainer') as HTMLElement;
  signatureElement.value = document.querySelector('.signature') as HTMLElement;

  const fromParams = { opacity: 0.5, rotate: -30, rotationX: 90 };
  const toParams = { opacity: 1, stagger: 0.07, rotationX: 0, rotate: 0, ease: 'elastic.out(1,0.3)', duration: 2 };

  // timeline
  const tl = gsap.timeline();

  tl.to(".stripesContainer", { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "power4.inOut", delay: 1 })
    .set(".signature", { display: "none" })
    .to(".stripesContainer", { clipPath: "inset(0% 0% 0% 100%)", duration: 1, ease: "power4.in" })
    .set(nameElement.value, { display: "flex", onComplete: () => { textSplitAnimation(nameElement.value, fromParams, toParams) } });



  // if (rbgcontainerElement.value) {
  //     gsap.to(rbgcontainerElement.value, {
  //         duration: 1, 
  //         delay: 1,
  //         filter: 'blur(0px)',
  //         ease: 'power4.inOut',
  //         onComplete: () => {
  //         emit('destroy', 'Animation completed');
  //         }
  //     });
  // }

  if (signatureElement.value) {
    gsap.to(signatureElement.value, {
      duration: 0.5,
      opacity: 1,
    });
  }

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
  gsap.to(".stripes", { x: "-50%", duration: 2, repeat: -1, ease: "none" });
  // gsap.to(".rbgcontainer", {backgroundPositionY: "-100%",duration: 15,repeat: -1,ease: "none"});
});
</script>

<template>
  <div class="rbgcontainer">
    <div class="name" ref="nameElement">ZHYKO</div>
    <div class="stripesContainer">
      <div class="stripes"></div>
    </div>
    <div class="signature">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 240 51">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml"
            style="display: flex; align-items: center; height: 100%; justify-content: center;">
            <div style="display: inline-flex; align-items: center; margin: 0 -8px 0 -9px;">
              <svg style="display: inline-block; width: 55px; height: 100%;" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 55 51" height="51" width="55">
                <path class="draw" stroke-dasharray="149" stroke-dashoffset="149" stroke-width="4" stroke="white"
                  fill="none" stroke-linecap="round" stroke-linejoin="round"
                  d="M18.4364 13.4383C15.9364 8.93822 51.9364 -1.5618 53.9364 4.43828C55.9364 10.4384 13.9362 25.9382 1.93593 44.4382C-5.52379 55.9382 31.4361 37.9382 38.9364 36.9383">
                </path>
              </svg>
            </div>
            <div style="display: inline-flex; align-items: center; margin: 0 -1px 0 -1px;">
              <svg style="display: inline-block; width: 45px; height: 100%;" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="10 0 45 51" height="51" width="45">
                <path class="draw" stroke-dasharray="194" stroke-dashoffset="194" stroke-width="4" stroke="white"
                  fill="none" stroke-linecap="round" stroke-linejoin="round"
                  d="M35.957 3.99976C23.1235 22.025 18.442 31.2217 10.457 47.4998C26.957 5.99983 30.457 37.5 52.957 7.5C33.957 29.4998 32.957 37.6924 29.457 38.5C25.957 39.3076 0.957031 32.5 0.957031 29.4998C23.1446 22.8906 34.5662 20.6514 50.957 22.4998">
                </path>
              </svg>
            </div>
            <div style="display: inline-flex; align-items: center; margin: 0 -13px 0 -5px;">
              <svg style="display: inline-block; width: 49px; height: 100%;" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 43 51" height="51" width="49">
                <path class="draw" stroke-dasharray="128" stroke-dashoffset="128" stroke-width="4" stroke="white"
                  fill="none" stroke-linecap="round" stroke-linejoin="round"
                  d="M16.8032 1.3594C12.7184 0.602171 -1.69718 28.9308 2.30381 28.3593C6.30481 27.7879 33.8032 2.8594 33.8032 2.8594C14.0741 30.0733 5.30273 48.8594 8.80324 49.8594C12.3037 50.8594 30.3027 19.8594 6.80324 39.8594">
                </path>
              </svg>
            </div>
            <div style="display: inline-flex; align-items: center; margin: 0 0px 0 -1px;">
              <svg style="display: inline-block; width: 37px; height: 100%;" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="10 0 37 51" height="51" width="37">
                <path class="draw" stroke-dasharray="101" stroke-dashoffset="101" stroke-width="4" stroke="white"
                  fill="none" stroke-linecap="round" stroke-linejoin="round"
                  d="M30.6585 5.69873C20.8873 19.471 15.4101 28.7219 5.65848 46.1987C22.4604 13.4133 39.6585 11.6987 53.1585 9.69873C64.6585 8.19873 51.1585 20.1987 51.1585 20.1987C80.6585 -7.30127 -1.22332 24.1987 1.15848 37.6987C2.39349 44.6987 37.1585 35.6987 37.1585 35.6987">
                </path>
              </svg>
            </div>
            <div style="display: inline-flex; align-items: center; margin: 0 -25px 0 -3px;">
              <svg style="display: inline-block; width: 54px; height: 100%;" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 54 51" height="51" width="54">
                <path class="draw" stroke-dasharray="235" stroke-dashoffset="235" stroke-width="4" stroke="white"
                  fill="none" stroke-linecap="round" stroke-linejoin="round"
                  d="M19.2264 13.6837C12.2264 15.1837 -0.773614 43.6837 6.72639 46.1837C14.2264 48.6837 43.2258 13.6837 28.7272 5.68376C13.2266 -2.86957 -2.2744 33.1838 2.22656 40.6838C6.72753 48.1839 20.7264 29.6837 20.7264 29.6837">
                </path>
              </svg>
            </div>
          </div>
        </foreignObject>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.rbgcontainer {
  height: 100vh;
}

.name {
  width: 100vw;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: clamp(6rem, 15vw, 16rem);
  font-weight: 900;
  z-index: 2;
  overflow: hidden;
}

.stripesContainer {
  position: absolute;
  height: min(150px, 25vw);
  width: min(500px, 80vw);
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
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
  opacity: 0;
  filter: drop-shadow(0 0 4px white);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: -1;
  border: 8px dashed transparent;
  border-radius: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  /* will-change: transform,filter; */
}

svg {
  overflow: visible;
}
</style>