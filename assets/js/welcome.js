document.addEventListener('DOMContentLoaded', function() {
    // Select the elements
    var message = document.getElementById('welcome-message');
    var rope = document.querySelector('.rope');

    // Function to start the rope pull animation
    function startRopeAnimation() {
        rope.style.animation = 'rope-fall 3s ease-in-out forwards';
        message.classList.add('pull-text');
    }

    // Timing: 6 seconds to wait for the text animations to finish
    setTimeout(startRopeAnimation, 6000);
});
