const browser = this.chrome && chrome.runtime ? chrome : this.browser;

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'tabsCreate') {
    browser.tabs.create({
      url: request.options.url,
      active: request.options.active
    });
  }
});
