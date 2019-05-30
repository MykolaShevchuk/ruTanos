import $ from 'jquery';
import '../style.css';
import containsRuDomain from './containsRuDomain';
import containsRuChars from './containsRuChars';

const linkSelector = '.rc .r a';
const titleSelector = '.LC20lb';
const containerSelector = '.g';
const hideClass = 'hide-container';


const hideElementContaner = ($el) => {
  const $countainerEl = $el.closest(containerSelector);
  $countainerEl.addClass(hideClass);
}

export function hideSearchResults() {
  $(linkSelector).each((i, urlEl) => {
    const $urlEl = $(urlEl);
    const url = $urlEl.attr('href');

    if (containsRuDomain(url)) {
      hideElementContaner($urlEl);
    }
  })

  $(titleSelector).each(function() {
    const $el = $(this);
    const text = $el.text();

    if (containsRuChars(text)) {
      hideElementContaner($el);
    }
  })
}


export function showSearchResults() {
  $(containerSelector).removeClass(hideClass);
}
