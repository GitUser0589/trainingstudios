async function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Basic validation
    if (username === '' || password === '') {
      alert('Please fill in all fields');
      return;
    }
  
    // Replace with actual login logic (e.g., sending data to server)
    if (username === 'your_username' && password === 'your_password') {
      try {
        const response = await fetch('localhost:3000/customer');
        const data = await response.json();
        console.log(data);
        // Do something with the data
        alert('Login successful!');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      alert('Invalid credentials');
    }
  }
  
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    handleLogin();
  });
  