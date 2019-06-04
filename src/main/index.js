import { showSearchResults, hideSearchResults } from './modifySearchResults';
import toggleIcon from '../common/toggleIcon';

chrome.storage.sync.get('turnedOn', ({ turnedOn }) => {
  const turnedOnOrNotSet = turnedOn || turnedOn === undefined;

  if (turnedOnOrNotSet) {
    hideSearchResults();
  }

  toggleIcon(turnedOnOrNotSet);
});

chrome.storage.onChanged.addListener(changes => {
  const turnedOn = changes['turnedOn'] && changes['turnedOn'].newValue;

  if (turnedOn) {
    hideSearchResults();
  } else {
    showSearchResults();
  }
});

// chrome.storage.sync.clear();
