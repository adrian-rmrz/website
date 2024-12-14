$(document).ready(function () {
    $(".sidebar").on("mouseover", function () {
        $(".sidebar-itemname").show();
    });
    $(".sidebar").on("mouseout", function () {
        $(".sidebar-itemname").hide();
    });
});