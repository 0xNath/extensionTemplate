chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "change-title") {
        document.title = document.title + " - Hacked !";
        setTimeout(() => {
            sendResponse(document.title + " - Hacked successfuly !");
        }, 5000);
    }
    return true;
});