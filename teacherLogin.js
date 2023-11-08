document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login-form"); 
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "teacher" && password === "password") {
            window.location.href = "teacherDashboard.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
