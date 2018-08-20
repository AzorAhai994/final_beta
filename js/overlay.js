$('#toggle').click(function () {
    $(this).toggleClass('toggle-active');
    $('#overlay').toggleClass('nav-active');

});

$('#overlay a').click(function () {
    $('#toggle').toggleClass('toggle-active');
    $('#overlay').toggleClass('nav-active');
});
$('#filters i').click(function () {
    $("i").removeClass('active');
    $(this).toggleClass('active');
})