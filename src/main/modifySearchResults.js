import './styles.css';
import containsRuDomain from './containsRuDomain';
import containsRuChars from './containsRuChars';

const containerSelector = '.g';
const searchItemSelector = '.g .rc';
const hideClass = 'hide-container';

const hideSearchItem = (item) => {
  const searchItemContainer = item.closest(containerSelector);
  searchItemContainer && searchItemContainer.classList.add(hideClass);
};

const ruDetector = {
  selectors: {
    translateLink: 'a[href^="https://translate.google.com/translate"]',
    resultLink: 'a',
    title: 'h3',
    description: '.s .st'
  },

  // whether translate href is contains sl=ru parameter ("sl=ru" means source language is russian)
  // translate link looks like
  // 'https://translate.google.com/translate?hl=uk&sl=ru&u=http://hdrezka.ag/cartoons/action/29584-kak-priruchit-drakona-3-2019.html&prev=search'
  isTranslateFromRu: function (item) {
    const translateLink = item.querySelector(this.selectors.translateLink);
    if (!translateLink) {
        return null;
    }
    return /[?|&]sl=ru/.test(translateLink.href);
  },

  isRuDomain: function (item) {
    const resultLink = item.querySelector(this.selectors.resultLink);
    if (!resultLink) {
        return null;
    }
    return containsRuDomain(resultLink.href);
  },

  isRuChars: function (item) {
    const title = item.querySelector(this.selectors.title);
    if (title && containsRuChars(title.textContent)) {
        return true;
    }
    const description = item.querySelector(this.selectors.description);
    return (description && containsRuChars(description.textContent));
  }
};

export function handleSearchResults() {
  const items = document.querySelectorAll(searchItemSelector);
  if (!items.length) {
    return;
  }
  for (let item of items) {
    if (ruDetector.isTranslateFromRu(item) || ruDetector.isRuDomain(item) || ruDetector.isRuChars(item)) {
        hideSearchItem(item);
    }
  }
}

export function showSearchResults() {
  const items = document.querySelectorAll(containerSelector);
  if (!items.length) {
      return;
  }
  for (let item in items) {
    item.classList.remove(hideClass);
  }
}
