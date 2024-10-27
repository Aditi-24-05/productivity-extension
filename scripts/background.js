// Log when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  console.log("Privacy Enhancer Extension Installed");
});

// Handle cookie management here
chrome.cookies.onChanged.addListener((info) => {
  if (info.removed && !info.cause.includes("explicit")) {
    console.log(`Removed cookie from ${info.cookie.domain}`);
  }
});
