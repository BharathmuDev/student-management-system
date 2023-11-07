
// Function to check registration form is open or not 
document.addEventListener("DOMContentLoaded", function() {
    const registerButton = document.getElementById("registerButton");
    const registrationMessage = document.getElementById("registrationMessage");

    const registrationStartDate = new Date("2023-11-01");
    const registrationEndDate = new Date("2023-11-15");
    const currentDate = new Date("2023-11-17");

    if (currentDate >= registrationStartDate && currentDate <= registrationEndDate) {
        registerButton.addEventListener("click", function() {
            registrationMessage.textContent = "Registration successful!";
        });
    } else {
        registerButton.disabled = true;
        registrationMessage.textContent = "Registration is currently closed.";
    }
});


//