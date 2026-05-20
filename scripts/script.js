
const modal = document.getElementById("codeModal");
const btn = document.getElementById("modalBtn");
const span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const form = document.getElementById("contactForm");
const errorMsg = document.getElementById("formError");

form.addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    // Check if fields are empty
    if (name === "" || email === "") {
        event.preventDefault(); // Stop form from submitting
        errorMsg.textContent = "Please fill out both your name and email.";
    } else if (!email.includes("@")) {
        event.preventDefault();
        errorMsg.textContent = "Please enter a valid email address.";
    } else {
        errorMsg.textContent = "";
        errorMsg.style.color = "green";
        errorMsg.textContent = "Form validated successfully!";
        event.preventDefault(); // Prevent actual submission for demo purposes
    }
});