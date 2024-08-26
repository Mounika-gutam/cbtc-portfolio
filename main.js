// Add JS here
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    clearErrors();

    // Get form values
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    // Validate form fields
    let valid = true;

    if (email === '' || !validateEmail(email)) {
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }

    if (message === '') {
        document.getElementById('messageError').style.display = 'block';
        valid = false;
    }

    // If valid, display success message
    if (valid) {
        document.getElementById('successMessage').style.display = 'block';
        clearForm();
    }
});

function clearErrors() {
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('messageError').style.display = 'none';
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

function clearForm() {
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}
