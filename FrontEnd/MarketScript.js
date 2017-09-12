document.getElementById("chatTextArea").addEventListener("keypress", newChatMessage)

document.getElementById("chatSendButton").addEventListener("click", newChatMessage)

function newChatMessage() {
    if (event.type === "click" || (event.type === "keypress" && event.keyCode === 13)) {
        event.preventDefault();
        var message = {
            "userID" : "12345",
            "message" : document.getElementById("chatTextArea").value
        }
        document.getElementById("chatTextArea").value = "";
        POST(JSON.stringify(message));
    }
}

function POST(string) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:4567/chat");
    xhr.send(string);
}