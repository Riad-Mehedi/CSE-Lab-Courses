function showForm(formId) {
    const signinForm = document.getElementById("signin");
    const signupForm = document.getElementById("signup");
    const signinButton = document.querySelector(".tab-button:nth-child(1)");
    const signupButton = document.querySelector(".tab-button:nth-child(2)");

    if (formId === "signin") {
        signinForm.classList.add("active");
        signupForm.classList.remove("active");
        signinButton.classList.add("active");
        signupButton.classList.remove("active");
    } else {
        signupForm.classList.add("active");
        signinForm.classList.remove("active");
        signupButton.classList.add("active");
        signinButton.classList.remove("active");
    }
}

function toggleForm(formId) {
    const formContainer = document.getElementById("form-container");

    formContainer.style.display = formContainer.style.display === "none" ? "block" : "none";

    showForm(formId);
}
