let blockedWebsites = [];

// I am Loading initial blocked websites from storage
chrome.storage.sync.get("blockedWebsites", ({ blockedWebsites: savedWebsites }) => {
  blockedWebsites = savedWebsites || [];
  blockCurrentSite(); // Check the current website immediately
});

// Listening for the storage changes and update the blocked websites
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === "sync" && changes.blockedWebsites) {
    blockedWebsites = changes.blockedWebsites.newValue || [];
    blockCurrentSite(); // Rechecking the current site
  }
});

// Created Function to block the current website
function blockCurrentSite() {
  if (blockedWebsites.includes(window.location.hostname)) {
    document.body.innerHTML = `
      <div style="color: red; font-size: 24px; text-align: center; margin-top: 20%;">
        This website is blocked.
      </div>
    `;
  }
}

// Monitoring  file uploads
const blockedExtensions = [".pdf", ".docx", ".xls"];
document.addEventListener("change", (event) => {
  const input = event.target;
  if (input.type === "file" && input.files.length > 0) {
    const file = input.files[0];
    const fileExtension = `.${file.name.split(".").pop()}`;
    if (blockedExtensions.includes(fileExtension)) {
      alert(`Upload blocked: Files with ${fileExtension} extensions are not allowed, Please do not upload or download anything from this website!`);
      input.value = ""; // Prevent upload
    }
  }
});
