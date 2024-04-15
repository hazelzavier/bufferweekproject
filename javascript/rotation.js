// Get the element you want to decompose
const element = document.getElementById('donkey');

// Initial rotation angle
let rotation = 0;

// Rotate gradually over time
const interval = setInterval(() => {
    rotation += 10; // Adjust the increment value as needed
    element.style.transform = `rotate(${rotation}deg)`;
    if (rotation >= 360) {
        clearInterval(interval); // Stop the interval after one full rotation
    }
}, 100); // Adjust the interval duration as needed (e.g., 100ms)
