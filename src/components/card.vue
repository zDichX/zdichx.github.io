<script setup lang='ts'>
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';

const containerElement = ref<HTMLElement | null>(null);
const contactElement = ref<HTMLElement | null>(null);

const characters = ref<string[]>([]);
onMounted(() => {
  containerElement.value = document.querySelector('.container') as HTMLElement;
  if (containerElement.value) {
    gsap.to(containerElement.value, { 
      duration: 1.5, 
      delay: 1,
      opacity: 1, 
      scale: 1, 
      rotate: -4,
      ease: 'elastic.out(0.8, 0.5)',
    });
  }

  contactElement.value = document.querySelector('.contact') as HTMLElement;
  if (containerElement.value) {
    gsap.to(contactElement.value, {
      duration: 1, 
      delay: 1,
      opacity: 1, 
      marginTop: '25px',
      ease: 'elastic.out(3,0.3)',
    });
  }

  const applyAnimation = (selector: string, fs: string) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      if(element) {
        const text = (element as HTMLElement).textContent || '';
        characters.value = text.split('');

        (element as HTMLElement).textContent = '';
        
        characters.value.forEach(char => {
          const span = document.createElement('span')
          span.textContent = char;
          span.className = 'char';
          (element as HTMLElement).appendChild(span);
        });

        const name = (element as HTMLElement).querySelectorAll('.char')
        gsap.fromTo(name, 
          { opacity: 0.5, fontSize: 0}, 
          { opacity: 1, fontSize: fs, stagger: 0.04, ease: 'power1.out', duration: 0.2, delay: 1 }
        );
      }
    });
  }
  applyAnimation('.name', '24px');
  applyAnimation('.bio', '16px');
});




  // const nameElement = document.querySelector('.name') as HTMLElement;
  // if (nameElement) {
  //   const text = nameElement.textContent || '';
  //   characters.value = text.split('');

  //   nameElement.textContent = '';

  //   characters.value.forEach(char => {
  //     const span = document.createElement('span');
  //     span.textContent = char;
  //     span.className = 'char';
  //     nameElement.appendChild(span);
  //   });

  //   const name = document.querySelectorAll('.name .char');
  //   gsap.fromTo(name, 
  //     { opacity: 0, fontSize: 0}, 
  //     { opacity: 1, fontSize: 24, stagger: 0.05, ease: 'none', duration: 0.2, delay: 1 }
  //   );
    
  // }

</script>

<template>
  <div class='wrapper'>
    <div class='container'>
      <div class='card'>
        <div class='logo'>
          <div class='overlay'></div>
        </div>
        <div class='info'>
          <div class='name'>&lt;/zDich&gt;</div>
          <div class='bio'>"I truly present here"</div>
          <div class='contact'>📧zDichX@iCloud.com<div>
              <a href='https://zdich.montaigne.io/z-dich'>💤Introduction(🇨🇳)</a>
            </div>
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
    background-image: url('../assets/avatar.jpg');
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
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
}
.name {
    font-weight: bold;
    margin-bottom: 5px;
}
.bio {
    font-style: italic;
    margin-bottom: 10px;
}
.contact {
    font-size: 12px;
    margin-top: 60px;
    opacity: 0;
}
.contact a {
    color: #ffcc00;
    text-decoration: none;
}
</style>
