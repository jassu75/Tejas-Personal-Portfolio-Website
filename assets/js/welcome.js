// welcome.js
document.addEventListener('DOMContentLoaded', () => {
    const writingDuration = 4200; // Duration of the writing animation in milliseconds

    // Show dialog box after writing animation
    setTimeout(() => {
        document.getElementById('dialog-overlay').style.display = 'flex';
    }, writingDuration); // Match this time with the duration of your writing animation

    // Handle button clicks
    document.getElementById('yes-button').addEventListener('click', () => {
        window.location.href = 'index.html'; // Redirect to main page
    });

    document.getElementById('no-button').addEventListener('click', () => {
        // Close the dialog box (you could also add logic to stay on the page or show a different message)
        document.getElementById('dialog-overlay').style.display = 'none';
    });
});
