<script setup lang="ts">
import { gsap } from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
    const backgroundElement = document.querySelector('.background') as HTMLElement;
    const containerElement = document.querySelector('.container') as HTMLElement;

    if (backgroundElement && containerElement) {
        backgroundElement.style.animationPlayState = 'running';
        
        gsap.to(containerElement, { 
            duration: 1.5, 
            delay: 0.5,
            opacity: 1, 
            scale: 1, 
            rotate: -4,
            ease: 'elastic.out(0.8, 0.5)' 
        });
        
        gsap.to(backgroundElement, { 
            duration: 1, 
            delay: 0,
            marginTop: 0, 
            ease: 'quart.inOut' 
        });
    }

    function updateBackground(): void {
        const now: Date = new Date();
        const hour: number = now.getHours();

        const dayImage = new URL('assets/bg.png', import.meta.url).href;
        const nightImage = new URL('assets/bg_dark.png', import.meta.url).href;

        if (backgroundElement) {
            if (hour >= 6 && hour < 18) {
                backgroundElement.style.backgroundImage = `url(${dayImage})`;
            } else {
                backgroundElement.style.backgroundImage = `url(${nightImage})`;
            }
        }
    }

    updateBackground();
    setInterval(updateBackground, 3600000);
});
</script>

<template>
  <div class="background"></div>
  <div class="wrapper">
    <div class="container">
      <div class="card">
        <div class="logo">
          <div class="overlay"></div>
        </div>
        <div class="info">
          <div class="name">&lt;/zDich&gt;</div>
          <div class="title">"I truly present here"</div>
          <div class="contact">
            <div>📧zDichX@icloud.com</div>
            <div></div>
            <div>
              <a href="https://zdich.montaigne.io/z-dich">💤Introduction(🇨🇳)</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-position: center;
    background-size: cover;
    margin-top: 200vh;
    will-change: margin-top;
    animation: changeBrightness 2s ease-out forwards paused;
}
@keyframes changeBrightness {
    from {filter: brightness(100%)}
    to {filter: brightness(30%)}
}
.wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* overflow: hidden; */
}
.container {
    text-align: left;
    user-select: none;
    opacity: 0.5;
    transform: scale(0) rotate(0deg);
    will-change: transform, opacity;
}
.card {
    background: linear-gradient(135deg, #7EE8FA, #EEC0C6);
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    max-width: 80vw;
    height: 150px;
    line-height: 150%;
    white-space: nowrap
}
.overlay {
    position: absolute;
    width: 150px;
    height: 1000px;
    transform: rotate(45deg);
    border: 50px solid rgba(0, 0, 0, 0.5);
}
.logo {
    position: relative;
    background: linear-gradient(135deg, #ffcc00, #ff9900);
    background-image: url('assets/avatar.jpg');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    min-width: 150px;
    min-height: 150px;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}
.info {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1.5vw;
    margin-right: 1vw;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
.name {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
}
.title {
    font-size: 16px;
    font-style: italic;
    margin-bottom: 10px;
}
.contact {
    font-size: 14px;
    margin-top: 10px;
}
.contact a {
    color: #ffcc00;
    text-decoration: none;
}
</style>
