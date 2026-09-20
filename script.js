/* ========================================
   CGLPrep AI – Interactive JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ===================== HEADER SCROLL EFFECT =====================
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 50) {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,.08)';
        } else {
            header.style.boxShadow = 'none';
        }
        lastScroll = currentScroll;
    });

    // ===================== MOBILE MENU =====================
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('mainNav');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            mainNav.classList.toggle('mobile-open');
            hamburger.classList.toggle('active');
        });
    }

    // ===================== SCROLL ANIMATIONS =====================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Animate progress bars inside this element
                const progressBars = entry.target.querySelectorAll('.progress-fill');
                progressBars.forEach(bar => {
                    const width = bar.style.width || '0%';
                    bar.style.setProperty('--target-width', width);
                    bar.classList.add('animate');
                });
            }
        });
    }, observerOptions);

    // Add animation class to all sections
    const sections = document.querySelectorAll(
        '.features-strip, .info-section, .study-plan-section, ' +
        '.mastery-section, .predictor-section, .exam-affairs-section, ' +
        '.why-choose-section, .parents-section, .success-section, ' +
        '.pricing-section, .mobile-section'
    );
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
        animateObserver.observe(section);
    });

    // Also animate individual cards with stagger
    const cards = document.querySelectorAll(
        '.feature-card-mini, .info-card, .why-card, .parent-card, ' +
        '.success-card, .price-card'
    );
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.05}s`;
        card.classList.add('animate-on-scroll');
        animateObserver.observe(card);
    });

    // ===================== COUNTER ANIMATION =====================
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => statsObserver.observe(stat));

    function animateCounter(element) {
        const text = element.textContent;
        // Simple pulse animation for stats
        element.style.transition = 'transform 0.3s ease';
        element.style.transform = 'scale(1.1)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 300);
    }

    // ===================== CIRCLE PROGRESS ANIMATION =====================
    const circleProgress = document.querySelector('.circle-progress');
    if (circleProgress) {
        const circleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const fill = entry.target.querySelector('.fill');
                    const percent = parseInt(entry.target.dataset.percent) || 72;
                    const circumference = 2 * Math.PI * 52; // r=52
                    const offset = circumference - (percent / 100) * circumference;
                    fill.style.strokeDasharray = circumference;
                    fill.style.strokeDashoffset = circumference;
                    
                    setTimeout(() => {
                        fill.style.transition = 'stroke-dashoffset 1.5s ease';
                        fill.style.strokeDashoffset = offset;
                    }, 200);
                    
                    circleObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        circleObserver.observe(circleProgress);
    }

    // ===================== SUCCESS STORY TABS =====================
    const successTabs = document.querySelectorAll('.stab');
    successTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            successTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // ===================== SMOOTH SCROLL FOR NAV LINKS =====================
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // ===================== PREDICT BUTTON INTERACTION =====================
    const predictBtn = document.getElementById('predictBtn');
    if (predictBtn) {
        predictBtn.addEventListener('click', () => {
            predictBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Predicting...';
            predictBtn.disabled = true;
            setTimeout(() => {
                predictBtn.innerHTML = '<i class="fas fa-check"></i> Prediction Updated!';
                predictBtn.style.background = '#10b981';
                setTimeout(() => {
                    predictBtn.innerHTML = '<i class="fas fa-magic"></i> Predict My Posts →';
                    predictBtn.style.background = '';
                    predictBtn.disabled = false;
                }, 2000);
            }, 1500);
        });
    }

    // ===================== SUBSCRIBE BUTTON =====================
    const subscribeBtn = document.getElementById('subscribeBtn');
    const subEmail = document.getElementById('subEmail');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', () => {
            if (subEmail && subEmail.value.includes('@')) {
                subscribeBtn.textContent = 'Subscribed ✓';
                subscribeBtn.style.background = '#10b981';
                subEmail.value = '';
                setTimeout(() => {
                    subscribeBtn.textContent = 'Subscribe';
                    subscribeBtn.style.background = '';
                }, 3000);
            } else {
                subEmail.style.borderColor = '#ef4444';
                setTimeout(() => {
                    subEmail.style.borderColor = '';
                }, 2000);
            }
        });
    }

    // ===================== HERO IMAGE PLACEHOLDER =====================
    // Generate a placeholder since we don't have the actual image
    const heroImg = document.getElementById('heroImg');
    if (heroImg) {
        heroImg.onerror = function () {
            // Create a gradient placeholder
            const wrapper = this.closest('.hero-img-wrapper');
            if (wrapper) {
                this.style.display = 'none';
                const placeholder = document.createElement('div');
                placeholder.style.cssText = `
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    gap: 16px;
                    padding: 20px;
                    text-align: center;
                `;
                placeholder.innerHTML = `
                    <i class="fas fa-user-graduate" style="font-size: 72px; opacity: 0.9;"></i>
                    <span style="font-size: 18px; font-weight: 700; opacity: 0.9;">Your CGL Dream<br>Starts Here</span>
                `;
                wrapper.appendChild(placeholder);
            }
        };
        // Trigger error if image doesn't exist
        heroImg.src = heroImg.src;
    }

    // ===================== PROGRESS BAR INIT =====================
    // Store target widths and reset
    document.querySelectorAll('.progress-fill').forEach(bar => {
        const computedWidth = bar.style.width;
        bar.setAttribute('data-width', computedWidth);
        bar.style.setProperty('--target-width', computedWidth);
    });

    // ===================== PRICING CARD HOVER =====================
    const priceCards = document.querySelectorAll('.price-card');
    priceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            priceCards.forEach(c => c.style.opacity = '0.85');
            card.style.opacity = '1';
        });
        card.addEventListener('mouseleave', () => {
            priceCards.forEach(c => c.style.opacity = '1');
        });
    });

    // ===================== TYPING EFFECT FOR HERO =====================
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroTitle.style.transition = 'all 0.8s cubic-bezier(.4,0,.2,1)';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 200);
    }

    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) {
        heroBadge.style.opacity = '0';
        heroBadge.style.transform = 'translateY(10px)';
        setTimeout(() => {
            heroBadge.style.transition = 'all 0.6s ease';
            heroBadge.style.opacity = '1';
            heroBadge.style.transform = 'translateY(0)';
        }, 100);
    }

    const heroDesc = document.querySelector('.hero-desc');
    if (heroDesc) {
        heroDesc.style.opacity = '0';
        setTimeout(() => {
            heroDesc.style.transition = 'opacity 0.8s ease';
            heroDesc.style.opacity = '1';
        }, 500);
    }

    const heroBtns = document.querySelector('.hero-btns');
    if (heroBtns) {
        heroBtns.style.opacity = '0';
        heroBtns.style.transform = 'translateY(10px)';
        setTimeout(() => {
            heroBtns.style.transition = 'all 0.6s ease';
            heroBtns.style.opacity = '1';
            heroBtns.style.transform = 'translateY(0)';
        }, 700);
    }

    // ===================== MOBILE NAV STYLES =====================
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 992px) {
            .main-nav.mobile-open {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: var(--header-height);
                left: 0;
                right: 0;
                background: white;
                padding: 16px;
                border-bottom: 1px solid var(--gray-200);
                box-shadow: var(--shadow-lg);
                z-index: 999;
            }
            .hamburger.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            .hamburger.active span:nth-child(2) {
                opacity: 0;
            }
            .hamburger.active span:nth-child(3) {
                transform: rotate(-45deg) translate(5px, -5px);
            }
        }
    `;
    document.head.appendChild(style);

    console.log('🎓 CGLPrep AI – Landing page loaded successfully!');
});
