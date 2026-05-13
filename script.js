document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       SCROLL ANIMATIONS (INTERSECTION OBSERVER)
       ========================================================================== */
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once animated to keep it visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        scrollObserver.observe(el);
    });

    /* ==========================================================================
       SMOOTH SCROLLING FOR NAVIGATION LINKS
       ========================================================================== */
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Offset for fixed navbar height if needed
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ==========================================================================
       INTERACTIVE BENTO GRID (CURSOR TRACKING & PARALLAX)
       ========================================================================== */
    const trackers = document.querySelectorAll('.cursor-tracker');
    
    trackers.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Set variables for the border glow
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
            
            // Set variables for parallax effect if it's a parallax card
            if (card.classList.contains('parallax-card')) {
                const px = (x / rect.width - 0.5) * 30; // Range: -15 to 15
                const py = (y / rect.height - 0.5) * 30; // Range: -15 to 15
                card.style.setProperty('--px', px);
                card.style.setProperty('--py', py);
            }
        });
    });

    /* ==========================================================================
       SKILL PILLS FLOATING TOOLTIP
       ========================================================================== */
    const tooltip = document.getElementById('custom-tooltip');
    const skillPills = document.querySelectorAll('.skill-pill');
    
    if (tooltip && skillPills.length > 0) {
        skillPills.forEach(pill => {
            pill.addEventListener('mouseenter', (e) => {
                const desc = pill.getAttribute('data-desc');
                if (desc) {
                    tooltip.innerHTML = desc;
                    tooltip.style.opacity = '1';
                }
            });
            
            pill.addEventListener('mousemove', (e) => {
                // Offset tooltip from cursor
                const xOffset = 15;
                const yOffset = 15;
                
                // Keep tooltip within viewport
                let x = e.clientX + xOffset;
                let y = e.clientY + yOffset;
                
                const tooltipRect = tooltip.getBoundingClientRect();
                if (x + tooltipRect.width > window.innerWidth) {
                    x = e.clientX - tooltipRect.width - xOffset;
                }
                if (y + tooltipRect.height > window.innerHeight) {
                    y = e.clientY - tooltipRect.height - yOffset;
                }
                
                tooltip.style.left = `${x}px`;
                tooltip.style.top = `${y}px`;
            });
            
            pill.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0';
            });
        });
    }
});
