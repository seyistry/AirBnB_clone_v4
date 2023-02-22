const checked_list = {};
$(document).ready(function () {
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
