const form = document.querySelector('form');
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the input values
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Store the values in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Redirect to the home page or perform other actions as needed
    // For example: window.location.href = 'home.html';

    // Check if the username and password are correct
	if (username === 'myUsername' && password === 'myPassword') {
		// Store the login status in local storage
		localStorage.setItem('loggedIn', 'true');

		// Redirect to the resume page
		window.location.href = 'resume.html';
	} else {
		// Clear the input fields and show an error message
		usernameInput.value = '';
		passwordInput.value = '';
		alert('Invalid username/password');
	}


});

// Check if the user has already logged in
if (localStorage.getItem('loggedIn') === 'true') {
	// Redirect to the resume page
	window.location.href = 'resume.html';
}


 