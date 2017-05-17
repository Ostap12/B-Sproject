
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
    $("#user-photo").toggleClass("hidden");
    $("#show-info").toggleClass("hidden");
    $(".collapsible-text").toggleClass("hidden");
    $("#control").toggleClass("glyphicon-menu-hamburger glyphicon-remove-circle");
    $(".sublist").toggleClass("hidden");
    $(".user-info-table").toggleClass("hidden");
});

$("#personal").click(function (e) {
    e.preventDefault();
    $("#personal-options").toggleClass("sublist-hidden");
    $("#salary-options").addClass("sublist-hidden");
    $("#agenda-options").addClass("sublist-hidden");

});

$("#salary").click(function (e) {
    e.preventDefault();
    $("#salary-options").toggleClass("sublist-hidden");
    $("#personal-options").addClass("sublist-hidden");
    $("#agenda-options").addClass("sublist-hidden");
});

$("#agenda").click(function (e) {
    e.preventDefault();
    $("#agenda-options").toggleClass("sublist-hidden");
    $("#personal-options").addClass("sublist-hidden");
    $("#salary-options").addClass("sublist-hidden");

});

$("#show-info").click(function (e) {
    e.preventDefault();
    $(".user-info-table").toggleClass("table-hidden");
});
