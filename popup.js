document.getElementById("save-settings").addEventListener("click", () => {
    const websites = document.getElementById("blocked-websites").value
        .split(",")
        .map(site => site.replace(/https?:\/\//, "").trim()); // Sanitize input
    const extensions = document.getElementById("blocked-extensions").value
        .split(",")
        .map(ext => ext.trim());

    chrome.storage.sync.set({ blockedWebsites: websites, blockedExtensions: extensions }, () => {
        alert("Settings saved!");
    });
});
