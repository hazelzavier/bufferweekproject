function shootCannon() {
    const cannonball = document.createElement('div');
    cannonball.className = 'cannonball';
    document.body.appendChild(cannonball);

    const form = document.getElementById('brightness-form');
    const formRect = form.getBoundingClientRect();
    const targetX = formRect.left + (formRect.width / 2); // Center of the form
    const targetY = formRect.top + (formRect.height / 2); // Center of the form

    cannonball.style.left = '50%'; // Start from the horizontal center of the screen
    cannonball.style.bottom = '0'; // Start from the bottom of the screen

    setTimeout(() => {
        cannonball.classList.add('shoot-cannonball');
        setTimeout(() => {
            document.body.removeChild(cannonball); // Remove the cannonball after animation ends
            const brightnessLevel = document.getElementById('brightness-level').value;
            document.body.style.filter = `brightness(${brightnessLevel}%)`; // Apply brightness to the entire page
        }, 2000); // Wait for animation to finish (2 seconds)
    }, 0); // Start the animation
}
