// Get the element you want to decompose
const element = document.getElementById('donkey');

// Initial scale
let scale = 1;

// Decrease scale gradually over time
const interval = setInterval(() => {
    scale -= 0.1; // Adjust the decrement value as needed
    element.style.transform = `scale(${scale})`;
    if (scale <= 0) {
        clearInterval(interval); // Stop the interval when scale reaches 0
    }
}, 1000); // Adjust the interval duration as needed (e.g., 1000ms = 1 second)
