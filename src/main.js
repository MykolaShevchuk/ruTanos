import './style.css'
import $ from './vendors/jquery-3.4.1.min'
import disintegrate from './disintegrate'

$('.iUh30').each((i, urlEl) => {
  const $urlEl = $(urlEl);
  const pattern = /(\/ru\/)|\.ru|ru\.|\.рф/i;
  const url = $urlEl.text();
  const isRu = url.match(pattern);

  if (isRu) {
    const $countainerEl = $urlEl.closest('.g');
    $countainerEl.addClass('hide-container');
  }
})
