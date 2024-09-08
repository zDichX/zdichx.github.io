<script setup lang='ts'>
import { gsap } from 'gsap';
import { onMounted, nextTick, ref } from 'vue';

const rbgcontainerElement = ref<HTMLElement | null>(null);
const rootbgElement = ref<HTMLElement | null>(null);

onMounted(async () => {
    await nextTick();
    rbgcontainerElement.value = document.querySelector('.rbgcontainer') as HTMLElement;
    rootbgElement.value = document.querySelector('.rootbg') as HTMLElement;

    if (rbgcontainerElement.value) {
        gsap.to(rbgcontainerElement.value, {
            duration: 1, 
            delay: 1,
            scale: 0.2,
            filter: 'blur(20px)',
            ease: 'power4.inOut',
        });
    }
    
    if (rootbgElement.value) {
        gsap.to(rootbgElement.value, {
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
    
    console.log(index, -0.05 * index ** 2 + 0.4 * index)

    gsap.fromTo(svgPath, 
      { 
        strokeDasharray: length,
        strokeDashoffset: length,
      }, 
      {
        strokeDashoffset: 0,
        duration: 1,
        ease: 'power2.inOut',
        delay: -0.03125 * index ** 2 + 0.25 * index,
        onStart: () => {
        },
      }
    );
  });
});
</script>

<template>

    <div class="rbgcontainer">
      <div class="rootbg">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 240 51">
            <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: center; height: 100%; justify-content: center;">
                <div style="display: inline-flex; align-items: center; margin: 0 -8px 0 -9px;">
                <svg style="display: inline-block; width: 55px; height: 100%;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 55 51" height="51" width="55">
                    <path class="draw" stroke-dasharray="149" stroke-dashoffset="149" stroke-width="4" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round" d="M18.4364 13.4383C15.9364 8.93822 51.9364 -1.5618 53.9364 4.43828C55.9364 10.4384 13.9362 25.9382 1.93593 44.4382C-5.52379 55.9382 31.4361 37.9382 38.9364 36.9383"></path>
                </svg>
                </div>
                <div style="display: inline-flex; align-items: center; margin: 0 -1px 0 -1px;">
                <svg style="display: inline-block; width: 45px; height: 100%;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 45 51" height="51" width="45">
                    <path class="draw" stroke-dasharray="194" stroke-dashoffset="194" stroke-width="4" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round" d="M26.5606 9.18304C16.6848 26.0062 3.378 46.7523 1.89258 45.5634C-3.1006 40.6888 26.7398 2.16864 41.7793 5.25978C51.1122 6.68653 19.6065 49.6651 9.26293 46.2174C4.62623 44.3152 20.0819 27.7895 31.6737 29.9295"></path>
                </svg>
                </div>
                <div style="display: inline-flex; align-items: center; margin: 0 -13px 0 -5px;">
                <svg style="display: inline-block; width: 49px; height: 100%;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 51" height="51" width="49">
                    <path class="draw" stroke-dasharray="128" stroke-dashoffset="128" stroke-width="4" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round" d="M16.7648 9.03851C21.8129 5.77875 25.3024 4.00811 47.421 2.22626C35.7012 1.49995 34.274 -0.0548382 21.4876 22.9726C8.70118 45.9999 13.2012 40 1.2832 48.9828C3.36519 44.9656 17.2012 40.4999 23.7334 42.0158"></path>
                </svg>
                </div>
                <div style="display: inline-flex; align-items: center; margin: 0 0px 0 -1px;">
                <svg style="display: inline-block; width: 37px; height: 100%;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 37 51" height="51" width="37">
                    <path class="draw" stroke-dasharray="101" stroke-dashoffset="101" stroke-width="4" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round" d="M35.1522 7.2324C38.1612 -9.90171 5.01684 18.1833 1.44481 44.1581C-0.863382 60.9427 22.8446 32.2692 28.2295 28.4927"></path>
                </svg>
                </div>
                <div style="display: inline-flex; align-items: center; margin: 0 -8px 0 -3px;">
                <svg style="display: inline-block; width: 54px; height: 100%;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 51" height="51" width="54">
                    <path class="draw" stroke-dasharray="235" stroke-dashoffset="235" stroke-width="4" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round" d="M35.957 3.99976C23.1235 22.025 18.442 31.2217 10.457 47.4998C26.957 5.99983 30.457 37.5 52.957 7.5C33.957 29.4998 32.957 37.6924 29.457 38.5C25.957 39.3076 0.957031 32.5 0.957031 29.4998C23.1446 22.8906 34.5662 20.6514 50.957 22.4998"></path>
                </svg>
                </div>
            </div>
            </foreignObject>
        </svg>
      </div>
    </div>
  </template>
<style>
.rbgcontainer {
    position: fixed;
    height: 100vh;
    width: 100vw;
    transform: scale(1.3);
}
.rootbg {
    opacity: 0;
    filter: drop-shadow(0 0 4px white);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    max-width: 80vw;
    max-height: 20vh;
    z-index: -1;
    border: 0.5em dashed white;
    border-radius: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
    /* will-change: transform,filter; */
}
svg {
  overflow: visible;
}
</style>