const pattern = /(\/ru\/)|\.ru\/|ru\.|\.рф/i;

export default function containsRuDomain(url) {
  return !!url.match(pattern);
}
