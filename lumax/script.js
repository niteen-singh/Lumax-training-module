// Correct answer for the question
const correctAnswer = "A"; // Correct answer for the multiple-choice question

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Normally, you'd check the email and password here
    // For simplicity, we're going straight to the video section

    document.querySelector('.login-container').classList.add('hidden');
    document.getElementById('video-section').classList.remove('hidden');
    
    // Play the video
    const video = document.getElementById('video');
    video.play();
});

document.getElementById('video').addEventListener('ended', function() {
    document.getElementById('question-form').classList.remove('hidden');
});

document.getElementById('question-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get selected radio button value
    const selectedOption = document.querySelector('input[name="lamp"]:checked');
    const feedback = document.getElementById('feedback');
    
    if (!selectedOption) {
        feedback.textContent = "Please select an option.";
        feedback.style.color = "red";
    } else {
        const userAnswer = selectedOption.value;
        
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! The headlamp is used for illuminating the road.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Incorrect. Please try again.";
            feedback.style.color = "red";
        }
        
        feedback.classList.remove('hidden');
        document.getElementById('question-form').classList.add('hidden'); // Hide the question form
    }
});

