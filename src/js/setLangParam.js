export default function setLangParam() {
  const url = new URL(window.location);
  const notFiltered = url.searchParams.get('lr') !== '-lang_ru';
  const googleUa = 'google.com.ua';
  
  if (notFiltered ) {
    url.searchParams.set('lr', '-lang_ru');
    url.host = googleUa;
    window.location.replace(url.href);
  }
}
