document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button-changeTitle");
    button.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { type: "change-title" });
        });
    });
});