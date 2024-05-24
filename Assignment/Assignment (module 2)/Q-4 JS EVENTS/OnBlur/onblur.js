function validateEmail() {
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("emailError");

    var email = emailInput.value;

    if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email format";
    } else {
        emailError.textContent = "";
    }
}

function isValidEmail(email) {
    // Simple email validation (you can use a more robust solution)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
