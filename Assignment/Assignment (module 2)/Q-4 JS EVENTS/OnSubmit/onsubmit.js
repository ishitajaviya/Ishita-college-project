function validateForm() {
    var name = document.getElementById("name").value;

    if (name === "") {
        alert("Name must be filled out");
        return false; // Prevents form submission if validation fails
    }

    // Additional validation or processing can be added here

    alert("Form submitted successfully!");
    return true; // Allows form submission
}
