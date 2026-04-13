// ============================================
// INITIALIZATION - RUN IMMEDIATELY
// ============================================
(function() {
    // Set active nav link immediately
    function setActiveNav() {
        const navLinks = document.querySelectorAll('.nav-link');
        const currentPath = window.location.pathname;
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            if (href) {
                if (currentPath.endsWith(href) || 
                    (currentPath === '/' && href === 'index.html') ||
                    (currentPath.endsWith('/') && href === 'index.html')) {
                    link.classList.add('active');
                }
            }
        });
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setActiveNav);
    } else {
        setActiveNav();
    }
})();

// ============================================
// MOBILE MENU TOGGLE
// ============================================
function initMobileMenu() {
    const toggle = document.getElementById('navbarToggle');
    const menu = document.getElementById('navbarMenu');
    
    if (!toggle || !menu) return;
    
    const newToggle = toggle.cloneNode(true);
    toggle.parentNode.replaceChild(newToggle, toggle);
    
    newToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('active');
        document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });
    
    menu.addEventListener('click', function(e) {
        if (e.target.classList.contains('nav-link') || e.target.closest('.btn')) {
            menu.classList.remove('active');
            newToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
    
    document.addEventListener('click', function(e) {
        if (menu.classList.contains('active') && 
            !menu.contains(e.target) && 
            !newToggle.contains(e.target)) {
            menu.classList.remove('active');
            newToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    }, { passive: true });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menu.classList.contains('active')) {
            menu.classList.remove('active');
            newToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// NAVIGATION SCROLL
// ============================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// ============================================
// BACK TO TOP BUTTON
// ============================================
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }, { passive: true });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'auto' });
    });
}

// ============================================
// STAT COUNTER ANIMATION
// ============================================
function initStatCounter() {
    const statValues = document.querySelectorAll('.stat-value[data-count]');
    if (statValues.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-count') || '0');
                let current = 0;
                const duration = 1500;
                const increment = countTo / (duration / 16);
                
                const counter = setInterval(() => {
                    current += increment;
                    if (current >= countTo) {
                        target.textContent = countTo;
                        clearInterval(counter);
                    } else {
                        target.textContent = Math.floor(current);
                    }
                }, 16);
                
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statValues.forEach(stat => observer.observe(stat));
}

// ============================================
// SKILL BARS ANIMATION
// ============================================
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress[data-width]');
    if (skillBars.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                if (width) {
                    entry.target.style.width = width + '%';
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// ============================================
// TIMELINE - FIXED AND RESTORED
// ============================================
function initTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineItems.length === 0) return;
    
    console.log('Timeline initialized with', timelineItems.length, 'items');
    
    // Ensure visibility
    timelineItems.forEach((item, index) => {
        item.style.opacity = '1';
        item.style.display = 'flex';
        item.style.visibility = 'visible';
        item.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 100);
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach(item => observer.observe(item));
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    document.addEventListener('click', function(e) {
        const anchor = e.target.closest('a[href^="#"]');
        if (!anchor) return;
        
        const href = anchor.getAttribute('href');
        if (href === '#' || href === '#!') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'auto' });
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({ top: targetPosition, behavior: 'auto' });
        }
    });
}

// ============================================
// PROJECT FILTERS
// ============================================
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card-full');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'flex';
                } else {
                    const categories = card.getAttribute('data-category');
                    if (categories && categories.includes(filter)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
}

// ============================================
// FORM HANDLING
// ============================================
function initFormHandler() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        if (form.dataset.formInitialized) return;
        form.dataset.formInitialized = 'true';
        
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            if (!submitBtn) return;
            
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate submission (replace with actual endpoint)
            setTimeout(() => {
                showNotification('Thank you for your message! I will get back to you soon.', 'success');
                form.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    });
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.setAttribute('role', 'alert');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 12px;
        font-weight: 500;
        z-index: 10000;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        animation: slideInRight 0.3s ease;
        max-width: 350px;
    `;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px;">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ============================================
// AOS INITIALIZATION
// ============================================
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 600,
            once: true,
            offset: 100,
            disable: window.innerWidth < 768
        });
    }
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initNavigation();
    initBackToTop();
    initStatCounter();
    initSkillBars();
    initTimeline();        // <-- TIMELINE IS NOW INCLUDED
    initSmoothScroll();
    initProjectFilters();
    initFormHandler();
    initAOS();
    
    console.log('All scripts initialized successfully');
});

// Preload pages
(function() {
    const pages = ['about.html', 'certifications.html', 'projects.html', 'contact.html'];
    
    if (window.requestIdleCallback) {
        requestIdleCallback(() => {
            pages.forEach(page => {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = page;
                document.head.appendChild(link);
            });
        });
    }
})();

console.log('%c👋 Welcome to Mr. Wetaka Ivan\'s Portfolio', 'font-size: 18px; font-weight: bold; color: #6366f1;');
console.log('%c📚 Mathematics & ICT Educator | Uganda', 'font-size: 14px; color: #06b6d4;');