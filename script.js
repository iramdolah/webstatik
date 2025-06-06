document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.getElementById('python-progress').style.width = '80%';
        document.getElementById('js-progress').style.width = '56%';
    }, 300);
    
    const banner = document.querySelector('.github-banner');
    const bannerText = document.querySelector('.banner-text');
    
    let animationCounter = 0;
    setInterval(() => {
        animationCounter++;
        
        banner.classList.remove('attention', 'wiggle', 'flash');
        
        if (animationCounter % 3 === 0) {
            banner.classList.add('attention');
        } else if (animationCounter % 3 === 1) {
            banner.classList.add('wiggle');
        } else {
            banner.classList.add('flash');
        }
        
        setTimeout(() => {
            banner.classList.remove('attention', 'wiggle', 'flash');
        }, 1000);
    }, 5000);
    
    if (bannerText) {
        bannerText.addEventListener('mouseover', () => {
            bannerText.style.letterSpacing = '1px';
            bannerText.style.color = '#1e90ff';
        });
        
        bannerText.addEventListener('mouseout', () => {
            bannerText.style.letterSpacing = '0.5px';
            bannerText.style.color = 'white';
        });
    }
});

const style = document.createElement('style');
style.textContent = `
    .attention {
        animation: bounce 1s;
    }
    
    .wiggle {
        animation: wiggle 0.5s ease-in-out;
    }
    
    .flash {
        animation: flash 0.8s;
    }
    
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {transform: rotate(45deg) translateX(70px) translateY(-45px);}
        40% {transform: rotate(45deg) translateX(70px) translateY(-75px);}
        60% {transform: rotate(45deg) translateX(70px) translateY(-60px);}
    }
    
    @keyframes wiggle {
        0%, 100% {transform: rotate(45deg) translateX(70px) translateY(-45px);}
        25% {transform: rotate(43deg) translateX(68px) translateY(-45px);}
        75% {transform: rotate(47deg) translateX(72px) translateY(-45px);}
    }
    
    @keyframes flash {
        0%, 50%, 100% {opacity: 1;}
        25%, 75% {opacity: 0.7;}
    }
`;
document.head.appendChild(style);
