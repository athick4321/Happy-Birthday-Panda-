function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Correct credentials
    const correctUsername = "panda";
    const correctPassword = "24-10-2004";

    if (username === correctUsername && password === correctPassword) {
        // Redirect to another page if credentials are correct
        window.location.href = "birth-2.html";
        return false; // Prevent form submission
    } else {
        // Show error message if credentials are incorrect
        errorMessage.textContent = "Invalid username or password. Please try again.";
        return false; // Prevent form submission
    }
}