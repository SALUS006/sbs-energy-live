// ===================================
// NAVIGATION FUNCTIONALITY
// ===================================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===================================
// HERO VIDEO FUNCTIONALITY
// ===================================

const heroVideo = document.querySelector('.hero-video');
const videoPlayPauseBtn = document.querySelector('.video-play-pause');
const videoSoundToggleBtn = document.querySelector('.video-sound-toggle');
const playIcon = document.querySelector('.play-icon');
const pauseIcon = document.querySelector('.pause-icon');
const soundOffIcon = document.querySelector('.sound-off-icon');
const soundOnIcon = document.querySelector('.sound-on-icon');

// Video play/pause functionality
if (videoPlayPauseBtn && heroVideo) {
    videoPlayPauseBtn.addEventListener('click', () => {
        if (heroVideo.paused) {
            heroVideo.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            heroVideo.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    });

    // Update button state when video plays/pauses
    heroVideo.addEventListener('play', () => {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    });

    heroVideo.addEventListener('pause', () => {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    });
}

// Video sound toggle functionality
if (videoSoundToggleBtn && heroVideo) {
    videoSoundToggleBtn.addEventListener('click', () => {
        if (heroVideo.muted) {
            heroVideo.muted = false;
            soundOffIcon.style.display = 'none';
            soundOnIcon.style.display = 'block';
        } else {
            heroVideo.muted = true;
            soundOffIcon.style.display = 'block';
            soundOnIcon.style.display = 'none';
        }
    });
}

// Auto-play video when in viewport (for better UX)
if (heroVideo) {
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroVideo.play().catch(err => {
                    console.log('Auto-play prevented:', err);
                    // Show play button if autoplay fails
                    playIcon.style.display = 'block';
                    pauseIcon.style.display = 'none';
                });
            } else {
                heroVideo.pause();
            }
        });
    }, { threshold: 0.5 });

    videoObserver.observe(heroVideo);
}

// ===================================
// SLIDESHOW FUNCTIONALITY (Fallback for other pages)
// ===================================

const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const prevButton = document.querySelector('.slide-nav.prev');
const nextButton = document.querySelector('.slide-nav.next');

let currentSlide = 0;
let slideInterval;

// Function to show a specific slide
function showSlide(index) {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // Add active class to current slide and indicator
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }

    currentSlide = index;
}

// Function to go to next slide
function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

// Function to go to previous slide
function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
}

// Auto-play slideshow
function startSlideshow() {
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

// Stop slideshow
function stopSlideshow() {
    clearInterval(slideInterval);
}

// Event listeners for navigation buttons
if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
        prevSlide();
        stopSlideshow();
        startSlideshow(); // Restart auto-play after manual navigation
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        stopSlideshow();
        startSlideshow(); // Restart auto-play after manual navigation
    });
}

// Event listeners for indicators
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
        stopSlideshow();
        startSlideshow(); // Restart auto-play after manual navigation
    });
});

// Pause slideshow on hover
const slideshowContainer = document.querySelector('.slideshow-container');
if (slideshowContainer) {
    slideshowContainer.addEventListener('mouseenter', stopSlideshow);
    slideshowContainer.addEventListener('mouseleave', startSlideshow);
}

// Start the slideshow when page loads
if (slides.length > 0) {
    startSlideshow();
}


// ===================================
// SERVICE CARDS ANIMATION
// ===================================

const serviceCards = document.querySelectorAll('.service-card');

// Intersection Observer for service cards
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            serviceObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

serviceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    serviceObserver.observe(card);
});

// Service card hover effect with tilt
serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===================================
// SCROLL ANIMATIONS
// ===================================

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.stat-card, .about-feature, .info-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });
};

animateOnScroll();

// ===================================
// BACK TO TOP BUTTON
// ===================================

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// CONTACT FORM HANDLING
// ===================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    // Show success message (in production, this would send to a server)
    showNotification('Thank you for your message! We will get back to you soon.', 'success');

    // Reset form
    contactForm.reset();

    // Note: In production, form data should be sent to a secure backend endpoint
    // Do not log sensitive user data to console in production
    // console.log('Form submitted:', formData);
});

// ===================================
// NOTIFICATION SYSTEM
// ===================================

// Sanitize string for use in className to prevent XSS
function sanitizeClassName(str) {
    // Only allow alphanumeric characters and hyphens for CSS class names
    return str.replace(/[^a-zA-Z0-9-]/g, '');
}

function showNotification(message, type = 'info') {
    // Sanitize type parameter for use in className
    const safeType = sanitizeClassName(type);
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${safeType}`;
    
    // Create notification content using safe DOM methods instead of innerHTML
    const notificationContent = document.createElement('div');
    notificationContent.className = 'notification-content';
    
    // Create SVG icon
    const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgIcon.setAttribute('width', '24');
    svgIcon.setAttribute('height', '24');
    svgIcon.setAttribute('viewBox', '0 0 24 24');
    svgIcon.setAttribute('fill', 'none');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M20 6L9 17L4 12');
    path.setAttribute('stroke', 'currentColor');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    svgIcon.appendChild(path);
    
    // Create message span
    const messageSpan = document.createElement('span');
    messageSpan.textContent = message; // textContent automatically escapes HTML
    
    notificationContent.appendChild(svgIcon);
    notificationContent.appendChild(messageSpan);
    
    // Create close button
    const closeButton = document.createElement('button');
    closeButton.className = 'notification-close';
    closeButton.setAttribute('aria-label', 'Close notification');
    
    const closeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    closeSvg.setAttribute('width', '20');
    closeSvg.setAttribute('height', '20');
    closeSvg.setAttribute('viewBox', '0 0 24 24');
    closeSvg.setAttribute('fill', 'none');
    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M18 6L6 18M6 6L18 18');
    path1.setAttribute('stroke', 'currentColor');
    path1.setAttribute('stroke-width', '2');
    path1.setAttribute('stroke-linecap', 'round');
    path1.setAttribute('stroke-linejoin', 'round');
    closeSvg.appendChild(path1);
    closeButton.appendChild(closeSvg);
    
    notification.appendChild(notificationContent);
    notification.appendChild(closeButton);

    // Add styles for notification
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: white;
            padding: 1rem 1.5rem;
            border-radius: 1rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            z-index: 10000;
            min-width: 300px;
            animation: slideInRight 0.3s ease-out;
            border-left: 4px solid;
        }
        
        .notification-success {
            border-left-color: #10b981;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        
        .notification-success svg {
            color: #10b981;
        }
        
        .notification-close {
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.25rem;
            color: #6b7280;
            transition: color 0.2s;
        }
        
        .notification-close:hover {
            color: #111827;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;

    if (!document.querySelector('#notification-styles')) {
        style.id = 'notification-styles';
        document.head.appendChild(style);
    }

    // Add to page
    document.body.appendChild(notification);

    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// ===================================
// PARALLAX EFFECT FOR HERO
// ===================================

const heroImage = document.querySelector('.hero-image');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const parallaxSpeed = 0.5;

    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// ===================================
// DYNAMIC STATS COUNTER
// ===================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Observe stat cards for counter animation
const statCards = document.querySelectorAll('.stat-card');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const valueElement = entry.target.querySelector('.stat-card-value');
            const value = valueElement.textContent;

            // Only animate if it's a number
            if (!isNaN(value) && value !== '24/7' && value !== 'Highway') {
                const numericValue = parseInt(value.replace(/\D/g, ''));
                if (numericValue > 0) {
                    valueElement.textContent = '0';
                    animateCounter(valueElement, numericValue);
                }
            }

            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statCards.forEach(card => {
    statsObserver.observe(card);
});

// ===================================
// LOADING ANIMATION
// ===================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// FORM VALIDATION
// ===================================

const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        validateInput(input);
    });

    input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
            validateInput(input);
        }
    });
});

function validateInput(input) {
    const value = input.value.trim();
    let isValid = true;
    let errorMessage = '';

    if (input.hasAttribute('required') && value === '') {
        isValid = false;
        errorMessage = 'This field is required';
    } else if (input.type === 'email' && value !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    } else if (input.type === 'tel' && value !== '') {
        const phoneRegex = /^[\d\s\+\-\(\)]+$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
    }

    // Remove existing error message
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    if (!isValid) {
        input.classList.add('error');
        const errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.textContent = errorMessage;
        errorElement.style.cssText = 'color: #ef4444; font-size: 0.875rem; margin-top: 0.25rem;';
        input.parentElement.appendChild(errorElement);
    } else {
        input.classList.remove('error');
    }

    return isValid;
}

// Validate entire form before submission
contactForm.addEventListener('submit', (e) => {
    let isFormValid = true;

    formInputs.forEach(input => {
        if (!validateInput(input)) {
            isFormValid = false;
        }
    });

    if (!isFormValid) {
        e.preventDefault();
        showNotification('Please fix the errors in the form', 'error');
    }
});

// ===================================
// SMOOTH REVEAL ANIMATIONS
// ===================================

// Add reveal animation to sections
const revealSections = document.querySelectorAll('section');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    revealObserver.observe(section);
});

// Add revealed class styles
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    section.revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .error {
        border-color: #ef4444 !important;
    }
`;
document.head.appendChild(revealStyle);

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Lazy load images
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(() => {
        // Scroll-based animations here
    });
}, { passive: true });

// ===================================
// ACCESSIBILITY ENHANCEMENTS
// ===================================

// Keyboard navigation for service cards
serviceCards.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            card.click();
        }
    });
});

// Focus visible for better keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

const accessibilityStyle = document.createElement('style');
accessibilityStyle.textContent = `
    body.keyboard-navigation *:focus {
        outline: 3px solid #0066cc;
        outline-offset: 2px;
    }
`;
document.head.appendChild(accessibilityStyle);

// ===================================
// CONSOLE BRANDING
// ===================================

console.log(
    '%c SBS Energy - Bharat Petrol Pump ',
    'background: linear-gradient(135deg, #0066cc 0%, #003d82 100%); color: white; font-size: 20px; padding: 10px 20px; border-radius: 5px; font-weight: bold;'
);
console.log(
    '%c Your Trusted Highway Partner ',
    'color: #ff6b35; font-size: 14px; font-weight: bold;'
);
console.log(
    '%c Website developed with ❤️ ',
    'color: #6b7280; font-size: 12px;'
);
