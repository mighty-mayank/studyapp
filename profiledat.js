// Hardcoded user profile data
const profileData = {
    "mayank": {
        name: "Mayank",
        age: 25,
        email: "mayank@example.com",
        planType: "Premium"
    },
    "admin": {
        name: "Administrator",
        age: 30,
        email: "admin@example.com",
        planType: "Premium"
    },
    "user1": {
        name: "User One",
        age: 22,
        email: "user1@example.com",
        planType: "Basic"
    },
    "hitarth":{
        name: "Hitarth",
        age: 18,
        email: "hitarth@example.com",
        planType: "Premium Plus"
    }
};

// Function to get profile data for the logged-in user
function getProfileData(username) {
    return profileData[username] || {
        name: "Unknown User",
        age: "N/A",
        email: "N/A",
        planType: "N/A"
    };
}
