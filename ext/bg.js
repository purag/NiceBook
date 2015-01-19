chrome.tabs.onActivated.addListener(function(active){
  
  // get the url of the active tab
  chrome.tabs.get(active.tabId, function(tab){

    // if we're in facebook, show the pageaction
    if(tab.url.indexOf("facebook.com") >= 0) {
      chrome.pageAction.show(tab.id);
    }
  });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if(changeInfo.status === "complete"){
    chrome.tabs.get(tabId, function(tab){
      if(tab.url.indexOf("facebook.com") >= 0) {
        inputScripts(tabId, [      
          "src/database.js",
          "src/wordlist.js",
          "src/nicebook.js",
          "src/init.js"
        ], 0);
      }
    });
  }
});

function inputScripts(tabId, scripts, i){
  if(i == scripts.length) return;
  chrome.tabs.executeScript(tabId, {file: scripts[i]}, function(){
    inputScripts(tabId, scripts, ++i);
  });
}