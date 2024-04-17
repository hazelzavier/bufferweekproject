// Get the element you want to rotate
const element = document.getElementById('donkey');

// Initial rotation angle
let rotation = 0;

// Rotate gradually over time
const interval = setInterval(() => {
    rotation += 1; // Adjust the increment value as needed
    element.style.transform = `rotate(${rotation}deg)`;
    if (rotation >= 360) {
        rotation = 0; // Reset rotation angle after one full rotation
    }
}, 10); // Adjust the interval duration as needed (e.g., 10ms)
