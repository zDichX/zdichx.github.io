<script setup lang='ts'>
import { gsap } from 'gsap';
import { onMounted, nextTick, ref } from 'vue';

const containerElement = ref<HTMLElement | null>(null);
const contactElement = ref<HTMLElement | null>(null);
const avatarElement = ref<HTMLElement | null>(null);
const nameElement = ref<HTMLElement | null>(null);
const bioElement = ref<HTMLElement | null>(null);
const contact_aElement = ref<HTMLElement | null>(null);
const characters = ref<string[]>([]);

onMounted(async () => {
  await nextTick();
  if (avatarElement.value && containerElement.value && contactElement.value) {
    gsap.to(containerElement.value, {duration: 1.5, delay: 0, opacity: 1, scale: 1, rotate: -4, ease: 'elastic.out(0.8, 0.5)'});
    gsap.to(avatarElement.value, {duration: 0.5, delay: 0.1, filter:'blur(0px)', ease: 'power4.inOut'});
    gsap.to(contactElement.value, {duration: 1, delay: 0.8, opacity: 1, marginTop: '0px', ease: 'power4.inOut'});
    gsap.to(contact_aElement.value, {duration: 5, repeat: -1, filter: "hue-rotate(360deg)", ease: 'none'})
  }

  const applyAnimation = (element: HTMLElement | null, fs: string) => {
    if (element){
      const text = element.textContent || '';
      characters.value = text.split('');

      element.textContent = '';
      
      characters.value.forEach(char => {
        const span = document.createElement('span')
        span.textContent = char;
        span.className = 'char';
        (element as HTMLElement).appendChild(span);
      });

      const name = (element as HTMLElement).querySelectorAll('.char')
      gsap.fromTo(name, 
        { opacity: 0.5, fontSize: 0}, 
        { opacity: 1, fontSize: fs, stagger: 0.04, ease: 'power1.out', duration: 0.2}
      );
    }
  }
  applyAnimation(nameElement.value, '24px');
  applyAnimation(bioElement.value, '16px');

});
</script>

<template>
  <div class='wrapper'>
    <div class='container' ref="containerElement">
      <div class='card'>
        <div class='avatar' ref="avatarElement">
        </div>
        <div class='info'>
          <div class='name' ref="nameElement">&lt;/zDich&gt;</div>
          <div class='bio' ref="bioElement">"I truly present here"</div>
          <div class='contact' ref="contactElement">zDichX@iCloud.com
            <div><a href='https://zdich.montaigne.io/z-dich' ref="contact_aElement">💤Introduction(🇨🇳)</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
    -webkit-user-select: none; 
    user-select: none;
    opacity: 0.5;
    transform: scale(0) rotate(0deg);
    /* will-change: transform, opacity; */
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
    white-space: nowrap
}
.avatar {
    position: relative;
    background: linear-gradient(135deg, #ffcc00, #ff9900);
    background-image: url('../assets/avatar.webp');
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
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    filter: blur(20px);
}
.avatar::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 100%;
    border: 50px solid rgba(0, 0, 0, 0.5);
    transform: rotate(-45deg);
}
.info {
    font-weight: bold;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1.5vh;
    margin-right: 0;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4); 
}
.name {
    margin-bottom: 5px;
}
.bio {
    font-style: italic;
    margin-bottom: 10px;
}
.contact {
    font-size: 12px;
    margin-top: 50px;
    opacity: 0;
    line-height: 1.5;
}
.contact a {
    overflow: visible;
    text-decoration: none;
    color: white;
    -webkit-text-shadow: 0 0 4px #ffcc00;
    text-shadow: 
    0 0 1px #ffcc00,
    0 0 2px #ffcc00,
    0 0 4px #ffcc00,
    0 0 8px #ffcc00,
    0 0 16px #ffcc00;
    filter: hue-rotate(0deg);
}
</style>
