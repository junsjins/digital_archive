
$("#imgFile").on('change', function () {
    var fileName = $("#imgFile").val();
    $(".upload-name").val(fileName);
});
$("#imgFile1").on('change', function () {
    var fileName = $("#imgFile1").val();
    $(".upload-name1").val(fileName);
});
$("#imgFile2").on('change', function () {
    var fileName = $("#imgFile2").val();
    $(".upload-name2").val(fileName);
});