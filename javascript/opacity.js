// Get the element you want to decompose
const element = document.getElementById('donkey');

// Reduce opacity gradually over time
let opacity = 0.3;
const interval = setInterval(() => {
    opacity += 0.001; // Adjust the decrement value as needed
    element.style.opacity = opacity;
    if (opacity >= 1) {
        clearInterval(interval); // Stop the interval when opacity reaches 0
    }
}, 10); // Adjust the interval duration as needed (e.g., 1000ms = 1 second)
