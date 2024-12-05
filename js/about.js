// Stats counter animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-item');
    
    function startCounting(stat) {
        const value = parseInt(stat.dataset.value);
        const valueDisplay = stat.querySelector('.stat-value');
        const startValue = 0;
        const duration = 2000;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // Use easeOutExpo for smooth animation
            const easeOutExpo = 1 - Math.pow(2, -10 * percentage);
            const currentValue = Math.floor(startValue + (value - startValue) * easeOutExpo);
            
            valueDisplay.textContent = currentValue;
            
            if (percentage < 1) {
                window.requestAnimationFrame(step);
            }
        };
        
        let startTime = null;
        window.requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                startCounting(entry.target);
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.5
    });

    stats.forEach(stat => observer.observe(stat));
}

// Tech radar animation
const radar = document.querySelector('.radar-line');
const techPoints = document.querySelectorAll('.tech-point');

techPoints.forEach(point => {
    point.style.opacity = '0';
    point.style.transform = `
        rotate(${point.style.getPropertyValue('--angle')}) 
        translateX(${point.style.getPropertyValue('--distance')}) 
        rotate(calc(-1 * ${point.style.getPropertyValue('--angle')}))
    `;
});

const radarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            techPoints.forEach((point, index) => {
                setTimeout(() => {
                    point.style.opacity = '1';
                    point.style.transition = 'opacity 0.3s ease-in-out';
                }, index * 200);
            });
            radarObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

radarObserver.observe(radar);

// Initialize animations when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateStats();
});
