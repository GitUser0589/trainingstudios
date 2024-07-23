function SignUp() {
    const form = document.getElementById('signupForm');
    const nameInput = document.getElementById('name');
    const contactInfoInput = document.getElementById('contact_info');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submitButton');
    const errorMessage = document.getElementById('errorMessage'); // Assuming you have an element for success messages
 // Assuming you have an element for error messages
  
    // State management using plain objects
    let formData = {
      name: '',
      contact_info: '',
      username: '',
      password: '',
    };
  
    let isSubmitting = false;
    let error = null;
    let successMessage = null;
  
    // Function to handle form submission
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // Basic validation
      if (!nameInput.value) {
        error = 'Please enter your name.';
        return;
      }
      if (!contactInfoInput.value) {
        error = 'Please enter your contact information.';
        return;
      }
      if (!usernameInput.value) {
        error = 'Please enter a username.';
        return;
      }
      if (passwordInput.value.length < 8) {
        error = 'Password must be at least 8 characters long.';
        return;
      }
  
      // Update state with form data
      formData = {
        name: nameInput.value,
        contact_info: contactInfoInput.value,
        username: usernameInput.value,
        password: passwordInput.value,
      };
  
      //  Assuming you have a function to connect to your database (replace with your implementation)
      const response = await submitDataToDatabase(formData);
  
      if (response.success) {
        successMessage = 'Sign-up successful! You can now log in.';
        // Clear form data or redirect to login page
      } else {
        error = response.message || 'An error occurred during signup.';
      }
  
      // Update UI based on error or success
      if (error) {
        errorMessage.textContent = error;
      } else {
        errorMessage.textContent = '';
      }
  
      isSubmitting = false; // Assuming you have logic to disable/enable submit button based on isSubmitting
    };
  
    // Event listeners
    nameInput.addEventListener('input', (event) => {
      formData.name = event.target.value;
    });
    contactInfoInput.addEventListener('input', (event) => {
        formData.contacInfo = event.target.value;
    });
    usernameInput.addEventListener('input', (event) => {
        formData.username = event.target.value;
    });
    passwordInput.addEventListener('input', (event) => {
        formData.password = event.target.value;
    });// ... similar event listeners for other inputs
  
    submitButton.addEventListener('click', handleSubmit);
  
    // ... rest of the UI and logic
  }