export default function toggleIcon(turnedOn) {
  if(chrome.browserAction) {
    const iconName = turnedOn ? 'icon' : 'icon-grey';
    chrome.browserAction.setIcon({ path: `/icons/${iconName}.png` });
  }
}
