$(function () {
  console.log('dsadsadsa');
  $.ajax({
    type: "POST",
    url: "https://pearsonpte.com/wp-admin/admin-ajax.php?action=who_result",
    data: {
      country: 0,
      state: 0,
      city: 0,
      page: 1
    },
    success: function (msg) {
      console.log(msg);
    }
  });
});