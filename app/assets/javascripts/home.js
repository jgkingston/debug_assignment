$(document).on("click", ".change_workflow", function() {
  console.log($(this).attr('que_urls'))
  $.ajax({
    url: $(this).attr('que_url'),
    dataType: "script",
    type: "PATCH"
  })
  $(".flash_message").fadeOut(2000)
});

$(document).on("click", ".remove_student_from_list", function() {
  $(this).remove()
  $(".flash_message").fadeOut(2000)
});

