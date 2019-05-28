import $ from 'jquery';
import '../style.css';

export default function blurSearchResults() {
  const pattern = /(\/ru\/)|\.ru|ru\.|\.рф/i;

  $('.iUh30').each((i, urlEl) => {
    const $urlEl = $(urlEl);
    const url = $urlEl.text();
    const isRu = url.match(pattern);

    if (isRu) {
      const $countainerEl = $urlEl.closest('.g');
      $countainerEl.addClass('hide-container');
    }
  })
}

