chrome.runtime.onInstalled.addListener(() => {
    // Initialize default settings
    chrome.storage.sync.set({
      blockedWebsites: ["www.example.com"],
      blockedExtensions: [".pdf", ".docx", ".xls"]
    });
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "reload-blocked-sites") {
      chrome.tabs.reload(sender.tab.id);
    }
  });
  