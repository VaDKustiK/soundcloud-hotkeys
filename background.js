chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({url: "*://soundcloud.com/*"}, (tabs) => {
    if (tabs.length > 0) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        func: (cmd) => {
          document.dispatchEvent(new CustomEvent("SC_HOTKEY", {detail: cmd}));
        },
        args: [command]
      });
    }
  });
});