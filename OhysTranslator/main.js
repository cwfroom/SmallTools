var engList = [];
var jpnList = [];

window.load = function(){

}

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {file: 'replace.js'});
});




