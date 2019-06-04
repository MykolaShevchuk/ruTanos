// not used currently

export default function updateUrl() {
  const url = new URL(window.location);
  const googleUa = 'www.google.com.ua';

  if (url.host !== googleUa) {
    url.host = googleUa;
    window.location.replace(url.href);
  }
}
