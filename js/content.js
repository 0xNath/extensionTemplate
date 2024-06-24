chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "change-title") {
        document.title = document.title + " - Hacked !";
    }
});