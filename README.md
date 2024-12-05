# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a beautiful day/night theme switch and smooth animations.

## Features

- Responsive design that works on all devices
- Dynamic day/night theme switching with beautiful animations
- Smooth scrolling and section transitions
- Timeline-based experience section
- Project showcase with hover effects
- Contact section with social links

## Running the Website

There are two ways to run the website:

### 1. Using Python (Recommended)

1. Make sure you have Python installed on your computer
2. Open a terminal in this directory
3. Run the following command:
   ```bash
   python server.py
   ```
4. The website will automatically open in your default browser at `http://localhost:8000`

### 2. Direct File Access

Simply open the `index.html` file in your web browser. However, some features might not work properly due to browser security restrictions.

## Structure

- `index.html` - Main HTML file
- `css/`
  - `style.css` - Main stylesheet
  - `theme-switch.css` - Theme switch component styles
- `js/`
  - `main.js` - Main JavaScript functionality
  - `theme-switch.js` - Theme switching logic
- `server.py` - Simple Python server for local development

## Customization

To customize the website for your needs:

1. Update the personal information in `index.html`
2. Modify the color scheme in `css/style.css` (look for the `:root` selector)
3. Add your own projects to the projects section
4. Update the contact information with your own details

## Browser Support

The website works in all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge
