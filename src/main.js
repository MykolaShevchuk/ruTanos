import { showSearchResults, hideSearchResults } from './js/modifySearchResults';

chrome.storage.sync.get('turned_on', ({ turned_on }) => {
  const turnedOn = turned_on || turned_on === undefined;

  if (turnedOn) {
    hideSearchResults();
  }


  if(chrome.browserAction) {
    const iconName = turnedOn ? 'icon' : 'icon-grey';
    chrome.browserAction.setIcon({ path: `/icons/${iconName}.png` });
  }
});

chrome.storage.onChanged.addListener(changes => {
  const turnedOn = changes['turned_on'] && changes['turned_on'].newValue;

  if (turnedOn) {
    hideSearchResults();
  } else {
    showSearchResults();
  }
});

// chrome.storage.sync.clear();
