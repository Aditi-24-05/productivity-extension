document.getElementById("toggleAdblock").addEventListener("click", function () {
  chrome.runtime.sendMessage({ action: "toggleAdblock" }, function (response) {
    console.log("Ad blocker toggled");
  });
});

document
  .getElementById("toggleScriptBlocker")
  .addEventListener("click", function () {
    chrome.runtime.sendMessage(
      { action: "toggleScriptBlocker" },
      function (response) {
        console.log("Script blocker toggled");
      }
    );
  });

document.getElementById("clearCookies").addEventListener("click", function () {
  chrome.browsingData.remove(
    {
      origins: ["<all_urls>"],
    },
    {
      cookies: true,
    },
    function () {
      console.log("Cookies cleared");
    }
  );
});
