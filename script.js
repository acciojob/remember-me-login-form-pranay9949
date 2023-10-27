//your JS code here. If required.
 const savedUsername = localStorage.getItem("username");
        const savedPassword = localStorage.getItem("password");

        if (savedUsername && savedPassword) {
            document.getElementById("existing").style.display = "block";
        }

        // Function to handle form submission
        document.getElementById("loginForm").addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const rememberMe = document.getElementById("rememberMe").checked;

            if (rememberMe) {
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
            } else {
                localStorage.removeItem("username");
                localStorage.removeItem("password");
            }

            alert("Logged in as " + username);
        });

        // Function to handle existing user login button
        document.getElementById("existing").addEventListener("click", function () {
            alert("Logged in as " + savedUsername);
        });