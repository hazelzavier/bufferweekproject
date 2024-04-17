function openPopup() {
    alert("Congratulations! You've won a free virus!");
}
function animateButton(button) {
    button.innerHTML = 'Bought!';
    button.style.backgroundColor = 'red';
    button.style.color = 'white';
    button.disabled = true;
}

function teleportButton(button) {
    const x = Math.floor(Math.random() * (window.innerWidth - 100)); // Random x-coordinate (leave space for button width)
    const y = Math.floor(Math.random() * (window.innerHeight - 50)); // Random y-coordinate (leave space for button height)
    button.style.position = 'absolute';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}


