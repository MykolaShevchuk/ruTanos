import blurSearchResults from './js/blurSearchResults';
import setLangParam from './js/setLangParam';

chrome.storage.sync.get('turned_on', ({ turned_on }) => {
  const turnedOn = turned_on || turned_on === undefined;
  if (turnedOn) {
    setLangParam();
    blurSearchResults();
  }

  const iconName = turnedOn ? 'icon' : 'icon-grey';
  chrome.browserAction.setIcon({path: `/icons/${iconName}.png`});
});

// chrome.storage.sync.clear();
