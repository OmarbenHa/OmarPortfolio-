# Futuristic Day/Night Theme Switch

A beautiful, animated theme switch with day and night scenes, including an animated sun, moon, stars, and clouds.

## HTML Structure
```html
<button id="themeToggle" class="theme-switch" aria-label="Toggle Theme">
    <div class="theme-switch-track">
        <div class="theme-switch-scene">
            <div class="sun">
                <div class="sun-rays"></div>
                <div class="sun-core"></div>
            </div>
            <div class="moon">
                <div class="moon-core"></div>
                <div class="moon-craters">
                    <div class="crater"></div>
                    <div class="crater"></div>
                    <div class="crater"></div>
                </div>
            </div>
            <div class="stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
            </div>
            <div class="clouds">
                <div class="cloud"></div>
                <div class="cloud"></div>
            </div>
        </div>
    </div>
</button>
```

## CSS Styles
```css
/* Theme Switch */
.theme-switch {
    position: relative;
    width: 80px;
    height: 40px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    margin-left: auto;
}

.theme-switch-track {
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #80c6ff 0%, #c4e1ff 100%);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
}

body.dark-theme .theme-switch-track {
    background: linear-gradient(180deg, #1a237e 0%, #283593 100%);
}

.theme-switch-scene {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Sun Styles */
.sun {
    position: absolute;
    top: 50%;
    left: 10px;
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.sun-core {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ffd700;
    border-radius: 50%;
    box-shadow: 0 0 20px #ffd700;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.sun-rays {
    position: absolute;
    width: 100%;
    height: 100%;
    animation: spin 10s linear infinite;
}

.sun-rays::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    width: 2px;
    height: 40px;
    background: #ffd700;
    border-radius: 2px;
    transform-origin: bottom center;
    box-shadow: 0 0 10px #ffd700;
}

.sun-rays::after {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    width: 2px;
    height: 40px;
    background: #ffd700;
    border-radius: 2px;
    transform: rotate(90deg);
    transform-origin: bottom center;
    box-shadow: 0 0 10px #ffd700;
}

/* Moon Styles */
.moon {
    position: absolute;
    top: 50%;
    right: 10px;
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.moon-core {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fafafa;
    border-radius: 50%;
    box-shadow: inset -4px -4px 0 #e0e0e0;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.moon-craters {
    position: absolute;
    width: 100%;
    height: 100%;
}

.crater {
    position: absolute;
    background: #e0e0e0;
    border-radius: 50%;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.crater:nth-child(1) {
    width: 6px;
    height: 6px;
    top: 25%;
    left: 25%;
}

.crater:nth-child(2) {
    width: 4px;
    height: 4px;
    top: 45%;
    right: 25%;
}

.crater:nth-child(3) {
    width: 5px;
    height: 5px;
    bottom: 25%;
    left: 40%;
}

/* Stars */
.stars {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
    animation: twinkle 1s infinite alternate;
}

.star:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
.star:nth-child(2) { top: 30%; left: 60%; animation-delay: 0.3s; }
.star:nth-child(3) { top: 40%; left: 40%; animation-delay: 0.6s; }
.star:nth-child(4) { top: 60%; left: 70%; animation-delay: 0.9s; }
.star:nth-child(5) { top: 70%; left: 30%; animation-delay: 1.2s; }

/* Clouds */
.clouds {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s ease;
}

.cloud {
    position: absolute;
    background: white;
    border-radius: 10px;
    animation: float 8s infinite linear;
    opacity: 0.8;
}

.cloud:nth-child(1) {
    width: 20px;
    height: 8px;
    top: 20%;
    left: -20px;
}

.cloud:nth-child(2) {
    width: 15px;
    height: 6px;
    top: 50%;
    left: -15px;
    animation-delay: -4s;
}

/* Dark Theme States */
body.dark-theme .sun {
    transform: translate(46px, -50%);
    opacity: 0;
}

body.dark-theme .moon {
    transform: translate(-46px, -50%);
    opacity: 1;
}

body.dark-theme .stars {
    opacity: 1;
}

body.dark-theme .clouds {
    opacity: 0;
}

/* Animations */
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes twinkle {
    0% { opacity: 0.3; transform: scale(1); }
    100% { opacity: 1; transform: scale(1.2); }
}

@keyframes float {
    0% { transform: translateX(0); }
    100% { transform: translateX(100px); }
}

/* Hover Effects */
.theme-switch:hover .sun-core {
    box-shadow: 0 0 30px #ffd700;
}

.theme-switch:hover .moon-core {
    box-shadow: inset -6px -6px 0 #e0e0e0, 0 0 20px rgba(255, 255, 255, 0.5);
}

.theme-switch:focus {
    outline: none;
}

.theme-switch:focus .theme-switch-track {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2), inset 0 0 10px rgba(0, 0, 0, 0.2);
}
```

## JavaScript
```javascript
// Add click event listener to theme toggle button
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
```

## Features

1. Day Scene:
   - Animated sun with rotating rays
   - Glowing sun effect
   - Floating clouds that move across the sky
   - Light blue gradient background

2. Night Scene:
   - Detailed moon with craters
   - Twinkling stars with different animation delays
   - Deep blue gradient background
   - Moon shadow effect

3. Animations:
   - Smooth transition between day and night
   - Rotating sun rays
   - Twinkling stars
   - Floating clouds
   - Slide animations for sun and moon

4. Interactive Effects:
   - Enhanced glow effect on sun when hovered
   - Moon shadow intensifies on hover
   - Smooth transitions between states
   - Focus state for accessibility

Enjoy this beautiful theme switch! 🌞🌙✨
