async function sendMessage() {
    let userText = document.getElementById("userInput").value;
    if (!userText.trim()) return;

    let chatbox = document.getElementById("chatbox");
    chatbox.innerHTML += `<p><b>You:</b> ${userText}</p>`;
    document.getElementById("userInput").value = "";

    let apiKey = "AIzaSyAKmdJbku7_FO29Djojn4AkmrEOhxz4NEw"; // Replace with your actual API key
    let apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

    try {
        let response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: userText + " (Keep your response short and to the point.)" }] }]
            })
        });

        let data = await response.json();
        let aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";

        chatbox.innerHTML += `<p><b>AI:</b> ${aiReply}</p>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    } catch (error) {
        chatbox.innerHTML += `<p><b>AI:</b> Error fetching response.</p>`;
        console.error("Error:", error);
    }
}
