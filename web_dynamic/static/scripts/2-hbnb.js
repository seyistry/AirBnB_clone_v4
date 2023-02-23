const checked_list = {};
$(document).ready(function () {
  $.ajax({
    url: 'http://127.0.0.1:5001/api/v1/status/',
    type: 'GET',
    dataType: 'json',
  }).done((json) => {
    if (json.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
  $('input').click(function () {
    const id = $(this).attr('id');
    const name = $(this).attr('name');
    if ($(`#${id}`).is(':checked')) {
      checked_list[name] = id;
    } else {
      delete checked_list[name];
    }
  });
});
