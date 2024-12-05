class TypingAnimation {
    constructor(wordsContainer) {
        this.wordsContainer = wordsContainer;
        this.words = Array.from(wordsContainer.getElementsByTagName('span'));
        this.currentWordIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.typingSpeed = 100;
        this.deletingSpeed = 50;
        this.delayAfterWord = 2000;
        this.delayBeforeDelete = 1000;

        // Initialize
        this.words.forEach(word => {
            const text = word.textContent.trim();
            const icon = word.querySelector('i');
            word.innerHTML = '';
            word.icon = icon ? icon.outerHTML : '';
            word.originalText = text.replace(/^[^ ]* /, '');
            word.currentText = '';
        });

        this.type();
    }

    type() {
        const currentWord = this.words[this.currentWordIndex];
        const fullText = currentWord.originalText;

        if (!currentWord.classList.contains('active')) {
            currentWord.classList.add('active');
            // Show icon immediately when word becomes active
            currentWord.innerHTML = currentWord.icon;
        }

        if (this.isDeleting) {
            // Remove character
            currentWord.currentText = fullText.substring(0, --this.currentCharIndex);
        } else {
            // Add character
            currentWord.currentText = fullText.substring(0, ++this.currentCharIndex);
        }

        // Update displayed text, preserving the icon
        currentWord.innerHTML = currentWord.icon + ' ' + currentWord.currentText;

        // Calculate typing speed
        let typeSpeed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

        // Check if word is complete
        if (!this.isDeleting && this.currentCharIndex === fullText.length) {
            typeSpeed = this.delayBeforeDelete;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            this.isDeleting = false;
            // Remove active class and clear content
            currentWord.classList.remove('active');
            currentWord.innerHTML = '';
            // Move to next word
            this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
            typeSpeed = this.delayAfterWord;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize the typing animation when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    const wordsContainer = document.querySelector('.typing-words');
    if (wordsContainer) {
        new TypingAnimation(wordsContainer);
    }
});
