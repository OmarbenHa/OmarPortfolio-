document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card-inner');
    const skillBars = document.querySelectorAll('.skill-progress');

    // Reset skill bars initially
    skillBars.forEach(bar => {
        bar.style.width = '0';
    });

    // Add event listener for card flip
    card.addEventListener('transitionend', (e) => {
        if (e.propertyName === 'transform') {
            const isFlipped = card.style.transform === 'rotateY(180deg)';
            if (isFlipped) {
                // Animate skill bars
                skillBars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.width = bar.parentElement.parentElement.querySelector('.skill-percentage').textContent;
                    }, index * 100);
                });
            } else {
                // Reset skill bars when card is flipped back
                skillBars.forEach(bar => {
                    bar.style.width = '0';
                });
            }
        }
    });
});
