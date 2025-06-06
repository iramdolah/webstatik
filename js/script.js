document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const spans = mobileMenu.querySelectorAll('span');
        spans[0].classList.toggle('rotate-45');
        spans[1].classList.toggle('opacity-0');
        spans[2].classList.toggle('rotate-negative-45');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                navLinks.classList.remove('active');
                
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                if (entry.target.classList.contains('programs-grid') || 
                    entry.target.classList.contains('skills')) {
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible');
                        }, 100 * index);
                    });
                }
                
                if (entry.target.classList.contains('skill-bar-item')) {
                    const progressFill = entry.target.querySelector('.skill-progress-fill');
                    const percent = progressFill.getAttribute('data-percent');
                    setTimeout(() => {
                        progressFill.style.width = `${percent}%`;
                    }, 200);
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .program-card, .skills ul li, .skill-bar-item').forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });

    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px)';
            card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        });
    });
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPosition = `50% ${scrollY * 0.05}px`;
        }
        
        const profilePhoto = document.querySelector('.profile-photo');
        if (profilePhoto && scrollY < 500) {
            profilePhoto.style.transform = `translateY(${scrollY * 0.05}px)`;
        }
    });
    
    const highlightText = document.querySelector('.highlight');
    if (highlightText) {
        const text = highlightText.textContent;
        highlightText.textContent = '';
        
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                highlightText.textContent += text[i];
            }, 100 * i);
        }
    }
});