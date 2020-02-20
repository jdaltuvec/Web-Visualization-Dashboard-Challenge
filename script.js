$(document).ready(function() {
    $(".dropdown-menu").dropdown();
});

$(".img-fluid").addClass("wow fadeIn z-depth-1-half");

new WOW().init();

$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<4;i++) {
    next=next.next();
    if (!next.length) {
      next=$(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})