import { showSearchResults, handleSearchResults } from './modifySearchResults';
import toggleIcon from '../common/toggleIcon';

chrome.storage.sync.get('turnedOn', ({ turnedOn }) => {
  const turnedOnOrNotSet = turnedOn || turnedOn === undefined;

  if (turnedOnOrNotSet) {
    handleSearchResults();
  }

  toggleIcon(turnedOnOrNotSet);
});

chrome.storage.onChanged.addListener(changes => {
  const turnedOn = changes['turnedOn'] && changes['turnedOn'].newValue;

  if (turnedOn) {
    handleSearchResults();
  } else {
    showSearchResults();
  }
});

// chrome.storage.sync.clear();
