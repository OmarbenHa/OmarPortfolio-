document.addEventListener('DOMContentLoaded', () => {
    // Add click event listener to theme toggle button
    document.getElementById('themeToggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
});
