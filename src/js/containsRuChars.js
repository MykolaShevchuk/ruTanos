const pattern = /ё|э|ии|ы|ъ/i;

export default function containsRuChars(url) {
  return !!url.match(pattern);
}
