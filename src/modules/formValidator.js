const formValidator = document
  .getElementById("scoreForm")
  .addEventListener("submit", (event) => {
    const nameInput = document.getElementById("name");
    const scoreInput = document.getElementById("score");
    const errorMessage = document.getElementById("errorMessage");

    // Check if the name is empty or contains only whitespace
    if (nameInput.value.trim() === "") {
      errorMessage.textContent = "Name cannot be empty";
      event.preventDefault(); // Prevent form submission
      return;
    }

    // Check if the score is not within the range 0-100
    const score = parseFloat(scoreInput.value);
    if (score < 0 || score > 100) {
      errorMessage.textContent = "Score must be a number between 0 and 100";
      event.preventDefault(); // Prevent form submission
      return;
    }

    // If both inputs are valid, clear the validation result
    errorMessage.textContent = "";
  });

export default formValidator;
