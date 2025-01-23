// Function to check the user's answer
function checkAnswer() {
    // Step 1: Define the correct answer
    const correctAnswer = "4";

    // Step 2: Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Check if the user selected an answer
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return; // Exit the function if no answer is selected
    }

    const userAnswer = selectedOption.value;

    // Step 4: Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
