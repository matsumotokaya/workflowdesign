// Pentagram-Inspired Modern Interactions
// Workflow Design Portfolio Website

class WorkflowDesign {
    constructor() {
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupWorkFilter();
        this.setupImageLoading();
        this.setupSmoothScrolling();
        this.setupIntersectionObserver();
        this.setupFormHandling();
        this.setupMobileMenu();
        this.setupPerformanceOptimizations();
    }

    // Navigation Scroll Effect
    setupNavigation() {
        const nav = document.querySelector('.nav');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Add/remove scrolled class
            if (currentScrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }

            // Hide/show nav on scroll
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }

            lastScrollY = currentScrollY;
        }, { passive: true });

        // Smooth scroll for nav links
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
                // Close mobile menu if open
                this.closeMobileMenu();
            });
        });
    }

    // Work Portfolio Filter
    setupWorkFilter() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const workItems = document.querySelectorAll('.work-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter work items with animation
                workItems.forEach((item, index) => {
                    const category = item.getAttribute('data-category');
                    const shouldShow = filter === 'all' || category === filter;
                    
                    if (shouldShow) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // Progressive Image Loading
    setupImageLoading() {
        const images = document.querySelectorAll('.work-image img');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    img.addEventListener('load', () => {
                        img.classList.add('loaded');
                    });
                    
                    if (img.complete) {
                        img.classList.add('loaded');
                    }
                    
                    observer.unobserve(img);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Smooth Scrolling for Better UX
    setupSmoothScrolling() {
        // Polyfill for older browsers
        if (!('scrollBehavior' in document.documentElement.style)) {
            const smoothScrollTo = (element, to, duration) => {
                const start = element.scrollTop;
                const change = to - start;
                const startDate = +new Date();
                
                const easeInOutQuad = (t, b, c, d) => {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                };
                
                const animateScroll = () => {
                    const currentDate = +new Date();
                    const currentTime = currentDate - startDate;
                    element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
                    if (currentTime < duration) {
                        requestAnimationFrame(animateScroll);
                    } else {
                        element.scrollTop = to;
                    }
                };
                
                animateScroll();
            };

            // Override scroll behavior for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        smoothScrollTo(document.documentElement, target.offsetTop - 80, 1000);
                    }
                });
            });
        }
    }

    // Intersection Observer for Animations
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Add stagger effect for work items
                    if (entry.target.classList.contains('work-item')) {
                        const workItems = entry.target.parentElement.children;
                        const index = Array.from(workItems).indexOf(entry.target);
                        entry.target.style.animationDelay = `${index * 100}ms`;
                    }
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll(
            '.work-item, .stat-item, .section-header, .about-content, .contact-info'
        );
        
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });

        // Add CSS for animation
        const style = document.createElement('style');
        style.textContent = `
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Form Handling with Validation
    setupFormHandling() {
        const form = document.querySelector('.form');
        if (!form) return;

        const inputs = form.querySelectorAll('input, textarea');
        const submitButton = form.querySelector('.form-submit');

        // Add floating label effect
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });

            // Real-time validation
            input.addEventListener('input', () => {
                this.validateField(input);
            });
        });

        // Form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validate all fields
            let isValid = true;
            inputs.forEach(input => {
                if (!this.validateField(input)) {
                    isValid = false;
                }
            });

            if (isValid) {
                this.submitForm(form, submitButton);
            }
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        let isValid = true;
        let message = '';

        // Remove previous error styling
        field.classList.remove('error');
        const existingError = field.parentElement.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Validation rules
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            message = 'This field is required';
        } else if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                message = 'Please enter a valid email address';
            }
        }

        // Show error if invalid
        if (!isValid) {
            field.classList.add('error');
            const errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            errorElement.textContent = message;
            errorElement.style.cssText = `
                color: #e74c3c;
                font-size: 0.85rem;
                margin-top: 0.25rem;
                display: block;
            `;
            field.parentElement.appendChild(errorElement);
        }

        return isValid;
    }

    async submitForm(form, button) {
        const originalText = button.textContent;
        button.textContent = 'Sending...';
        button.disabled = true;

        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Success feedback
            button.textContent = 'Message Sent!';
            button.style.background = '#27ae60';
            
            // Reset form
            setTimeout(() => {
                form.reset();
                button.textContent = originalText;
                button.style.background = '';
                button.disabled = false;
            }, 3000);

        } catch (error) {
            // Error feedback
            button.textContent = 'Error - Try Again';
            button.style.background = '#e74c3c';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
                button.disabled = false;
            }, 3000);
        }
    }

    // Mobile Menu Toggle
    setupMobileMenu() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');

        if (!navToggle || !navMenu) return;

        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                this.closeMobileMenu();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMobileMenu();
            }
        });
    }

    closeMobileMenu() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        
        if (navToggle && navMenu) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }

    // Performance Optimizations
    setupPerformanceOptimizations() {
        // Throttle scroll events
        let ticking = false;
        const throttleScroll = (callback) => {
            return () => {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        callback();
                        ticking = false;
                    });
                    ticking = true;
                }
            };
        };

        // Debounce resize events
        const debounce = (func, wait) => {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        };

        // Handle resize events
        window.addEventListener('resize', debounce(() => {
            // Recalculate layouts if needed
            this.handleResize();
        }, 250));

        // Preload critical images
        this.preloadCriticalImages();
    }

    handleResize() {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            this.closeMobileMenu();
        }
    }

    preloadCriticalImages() {
        const criticalImages = document.querySelectorAll('.work-item:nth-child(-n+4) img');
        criticalImages.forEach(img => {
            const imagePreload = new Image();
            imagePreload.src = img.src;
        });
    }

    // Utility Methods
    static easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    static getRandomDelay(min = 0, max = 300) {
        return Math.random() * (max - min) + min;
    }
}

// Enhanced Cursor Effect (Optional)
class CursorEnhancement {
    constructor() {
        this.cursor = null;
        this.init();
    }

    init() {
        if (window.innerWidth > 768) {
            this.createCursor();
            this.setupCursorEvents();
        }
    }

    createCursor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        this.cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: transparent;
            border: 1px solid #000;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.1s ease-out;
        `;
        document.body.appendChild(this.cursor);
    }

    setupCursorEvents() {
        if (!this.cursor) return;

        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = e.clientX - 10 + 'px';
            this.cursor.style.top = e.clientY - 10 + 'px';
        });

        // Enhance cursor on hover
        const hoverElements = document.querySelectorAll('a, button, .work-item, .filter-btn');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.style.transform = 'scale(1.5)';
                this.cursor.style.background = '#000';
            });

            el.addEventListener('mouseleave', () => {
                this.cursor.style.transform = 'scale(1)';
                this.cursor.style.background = 'transparent';
            });
        });
    }
}

// Page Load Performance
class PageLoadOptimization {
    constructor() {
        this.init();
    }

    init() {
        // Remove loading class when page is ready
        window.addEventListener('load', () => {
            document.body.classList.remove('loading');
            this.fadeInContent();
        });

        // Critical CSS loaded check
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeCriticalComponents();
            });
        } else {
            this.initializeCriticalComponents();
        }
    }

    initializeCriticalComponents() {
        // Initialize only critical components first
        const nav = document.querySelector('.nav');
        const hero = document.querySelector('.hero');
        
        if (nav) nav.classList.add('ready');
        if (hero) hero.classList.add('ready');
    }

    fadeInContent() {
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new WorkflowDesign();
    new CursorEnhancement();
    new PageLoadOptimization();
});

// Export for module use if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WorkflowDesign, CursorEnhancement, PageLoadOptimization };
}