// Run this on every page that requires authentication
function checkAuth() {
    const username = localStorage.getItem("username");
    const savedSessionId = localStorage.getItem("sessionId");
    const currentSessionId = sessionStorage.getItem("activeSession");

    // If no user is logged in OR session ID doesn't match, redirect to login
    if (!username || savedSessionId !== currentSessionId) {
        logout(); // Logs out old session if found
    } else {
        // Set the username on the homepage (if available)
        const welcomeText = document.getElementById("welcomeText");
        if (welcomeText) {
            welcomeText.innerText = `Welcome, ${username.charAt(0).toUpperCase() + username.slice(1)}`;
        }
    }
}

// Logout function (clears local storage & redirects)
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("sessionId");
    sessionStorage.removeItem("activeSession");
    window.location.href = "login.html"; // Redirect to login page
}

// Run authentication check when the page loads
checkAuth();
