        const loginForm = document.getElementById('loginForm');
        const loginPage = document.getElementById('loginPage');
        const dashboardPage = document.getElementById('dashboardPage');
        const errorMessage = document.getElementById('errorMessage');

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Check credentials
            if (username === 'Admin' && password === 'admin1234') {
                // Hide error message
                errorMessage.classList.remove('show');
                
                // Switch to dashboard
                loginPage.classList.add('hidden');
                dashboardPage.classList.add('active');
            } else {
                // Show error message
                errorMessage.classList.add('show');
            }
        });

        function logout() {
            // Switch back to login page
            dashboardPage.classList.remove('active');
            loginPage.classList.remove('hidden');
            
            // Clear form
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            errorMessage.classList.remove('show');
        }
    