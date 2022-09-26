'use strict'

browser.browserAction.onClicked.addListener(() => {
  chrome.runtime.openOptionsPage();
});