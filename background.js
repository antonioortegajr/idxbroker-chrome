
function checkForValidUrl(tabId, changeInfo, tab) {

if (tab.url.indexOf('?') > -1)

var append = '&'

else

var append = '?'


  if (tab.url.indexOf('mobile') > -1)

  {
  retun;
  }

  if (tab.url.indexOf('/YourDefiningString/') > -1) {

    chrome.pageAction.show(tabId);
    chrome.tabs.update({url:tab.url + append + 'mobile'});


     }


     else if (tab.url.indexOf('/i/') > -1) {

    chrome.pageAction.show(tabId);
    chrome.tabs.update({url:tab.url + append + 'mobile'});
     }

};

chrome.tabs.onUpdated.addListener(checkForValidUrl);


/*
    https://developer.chrome.com/extensions/pageAction#method-show
    http://stackoverflow.com/questions/1090948/change-url-parameters

*/
