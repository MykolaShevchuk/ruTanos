
$(function () {
  $turned_on = $('#turned_on');

  chrome.storage.sync.get('turned_on', function(data) {
    $turned_on.prop('checked', data.turned_on);
  });

  $turned_on.click(function () {
    const turned_on = $(this).prop('checked');
    chrome.storage.sync.set({ turned_on });

    const iconName = turned_on ? 'icon' : 'icon-grey';
    chrome.browserAction.setIcon({path: `/icons/${iconName}.png`});
  });
});

