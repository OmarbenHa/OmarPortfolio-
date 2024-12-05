document.addEventListener('DOMContentLoaded', () => {
    // Typing animation
    const words = document.querySelectorAll('.typing-words span');
    let currentWord = 0;
    
    function showNextWord() {
        // Remove active class from current word
        words[currentWord].classList.remove('active');
        
        // Move to next word
        currentWord = (currentWord + 1) % words.length;
        
        // Add active class to new word
        words[currentWord].classList.add('active');
    }

    // Show first word
    words[0].classList.add('active');
    
    // Change word every 2 seconds
    setInterval(showNextWord, 2000);

    // Particle effect
    const particles = document.querySelector('.particles');
    let particlesHTML = '';
    
    for (let i = 0; i < 50; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 2 + 1;
        const delay = Math.random() * 2;
        
        particlesHTML += `<div class="particle" style="
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            animation: float ${duration}s ${delay}s infinite linear;
        "></div>`;
    }
    
    particles.innerHTML = particlesHTML;
});
