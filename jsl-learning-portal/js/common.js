/*==========================================
        COMMON FUNCTIONS
==========================================*/

// Logout Function
function logout() {

    sessionStorage.clear();

    window.location.href = "../index.html";

}

// Display Current Date
function getCurrentDate() {

    const date = new Date();

    return date.toLocaleDateString("en-IN", {

        weekday: "long",

        day: "numeric",

        month: "long",

        year: "numeric"

    });

}

// Greeting
function getGreeting() {

    const hour = new Date().getHours();

    if (hour < 12) {

        return "Good Morning";

    }

    if (hour < 17) {

        return "Good Afternoon";

    }

    return "Good Evening";

}

// Capitalize
function capitalize(text) {

    return text.charAt(0).toUpperCase() + text.slice(1);

}