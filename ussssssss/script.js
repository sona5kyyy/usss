let countdownTimer;
let seconds = 10;

// Show "Hi Sona" interaction
document.getElementById('hiButton').addEventListener('click', function() {
    document.getElementById('firstScreen').classList.add('hidden');
    document.getElementById('secondScreen').classList.remove('hidden');
});

// Show "Will you be with me forever?" and countdown after clicking "Yes"
document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('secondScreen').classList.add('hidden');
    document.getElementById('thirdScreen').classList.remove('hidden');

    // Countdown
    countdownTimer = setInterval(function() {
        document.getElementById('countdown').innerText = seconds + " seconds remaining";
        if (seconds <= 0) {
            clearInterval(countdownTimer);
            document.getElementById('yesButtonConfetti').style.display = 'inline-block';
        }
        seconds--;
    }, 1000);
});

// Show sad faces when clicking "No"
document.getElementById('noButton').addEventListener('click', function() {
    alert('😢💔');
});

// Confetti on "Yes" after countdown
document.getElementById('yesButtonConfetti').addEventListener('click', function() {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { x: 0.5, y: 0.5 }
    });

    // Redirect to final page after confetti
    setTimeout(function() {
        document.getElementById('thirdScreen').classList.add('hidden');
        document.getElementById('finalScreen').classList.remove('hidden');
    }, 2000);  // Adjust the delay as needed
});
