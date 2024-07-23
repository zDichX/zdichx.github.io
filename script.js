window.addEventListener('load', () => {
    const container = document.querySelector('.container');
    gsap.to(container, { 
        duration: 1.5, 
        delay: 0.5,
        opacity: 1, 
        scale: 1, 
        rotate: -4,
        ease: 'elastic.out(0.8, 0.5)' 
    });
    const background = document.querySelector('.background');
    gsap.to(background, { 
        duration: 1, 
        delay: 0,
        marginTop: 0, 
        ease: 'quart.inOut' 
    });
    function updateBackground() {
        const now = new Date();
        const hour = now.getHours();
        const backgroundElement = document.querySelector('.background');
    
        if (hour >= 6 && hour < 18) {
            backgroundElement.style.backgroundImage = "url('src/bg.png')";
        } else {
            backgroundElement.style.backgroundImage = "url('src/bg_dark.png')";
        }
    }
    
    updateBackground();
    
    setInterval(updateBackground, 3600000); // 3600000 毫秒 = 1小时

});

