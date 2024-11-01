<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import rbg from './rbg.vue';
import card from './card.vue';

const showRbg = ref(false);
const showCard = ref(false);

onMounted(async () => {
    await nextTick();
    gsap.registerPlugin(ScrollTrigger);


    const showDemo = () => {
        
        document.body.style.overflow = 'auto';
        document.scrollingElement?.scrollTo(0, 0);

        gsap.utils.toArray<HTMLElement>('section').forEach((section, index) => {
        const w = section.querySelector<HTMLElement>('.wrapper');
        if (w) {
            // const [x, xEnd] = (index % 2) 
            //     ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] 
            //     : [w.scrollWidth * -1, 0];

            if (index % 2 === 0) {
                const x = w.scrollWidth * -1;
                const xEnd = 0;
                gsap.fromTo(w, { x: x }, {
                    x: xEnd,
                    scrollTrigger: {
                        trigger: section,
                        scrub: 1
                    }
                });
            } else {
                const x = '100%';
                // const xEnd = (window.innerWidth / 2) - (w.scrollWidth / 2)
                const xEnd = section.offsetWidth - w.scrollWidth
                console.log(`window.innerWidth: ${window.innerWidth}, w.scrollWidth: ${w.scrollWidth}, section.offsetWidth: ${section.offsetWidth}`)
                console.log(`xEnd: ${xEnd}`)
                gsap.fromTo(w, { x: x }, {
                    x: xEnd,
                    scrollTrigger: {
                        trigger: section,
                        scrub: 1,
                        // end: "center center",
                        onEnter: () => showCard.value = true
                    }
                });
            }
        }
        });
    };


    showDemo();
    // Simulate loading process
    // const interval = setInterval(() => {
    //     clearInterval(interval);
    //     showDemo();
    // }, 300);
});


    // const handleDestroy = (message: string) => {
    //     console.log('Destroy request received:', message);
    //     showRbg.value = false;
    //     showCard.value = true;
    // }
</script>

<template>
    <section>
        <div class="wrapper">
            <div class="graphic">ヾ(≧▽≦*)o</div>
            <div class="graphic">>_<</div>
            <div class="graphic">(＃°Д°)</div>
            <div class="graphic">(*/ω＼*)</div>
        </div>
    </section>
    <section>
        <div class="wrapper">
            <div class="graphic">(/≧▽≦)/</div>
            <div class="graphic">(/≧▽≦)/</div>
            <div class="graphic" id="card"><rbg v-if="showRbg" /><card v-if="showCard"/></div>
            <div class="graphic">\(≧▽≦\)</div>
            <div class="graphic">\(≧▽≦\)</div>
        </div>
    </section>
    <section>
        <div class="wrapper">
            <div class="graphic">(ﾟДﾟ≡ﾟдﾟ)!?</div>
            <div class="graphic">(っ °Д °;)っ</div>
            <div class="graphic">(=・ω・=)</div>
            <div class="graphic">Σ( ￣□￣||)<</div>
            <div class="graphic">_(≧∇≦」∠)_</div>
        </div>
    </section>
</template>

<style scoped>
section {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.wrapper {
    width: 100%;
    display: flex;
}

.graphic{
    
    width: 360px;
    height: 180px;
    border: 10px solid white;
    border-radius: 50px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    margin: 30px;
    flex-shrink: 0;
}

#card {
    border-color: transparent;
}

.text {
    font-size: clamp(8rem, 15vw, 16rem);
    line-height: 1;
    font-weight: 900;
    width: 100vw;
    height: 100vh;    
    overflow: hidden;
}

</style>
