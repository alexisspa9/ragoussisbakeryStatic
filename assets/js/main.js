

//collpased menu
$(document).on('click', '.button', function(e) {
  e.preventDefault();
  $(this).siblings('.navigation').slideToggle();
});
//toogle class on button
$(function () {
$(".button").click(function () {
  $(".button span:nth-of-type(2)").toggleClass("none");
$(".button span:first-of-type").toggleClass("rotatedleft");
$(".button span:last-of-type").toggleClass("rotatedright");
$(".button p").toggleClass("margin");

});
});
