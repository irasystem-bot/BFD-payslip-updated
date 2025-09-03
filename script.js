document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const errorMessage = document.getElementById('error-message');
    
    
    if (!email.includes('@')) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters.";
        return;
    }

    
    errorMessage.textContent = "";
    alert('Login successful!');
   
});
