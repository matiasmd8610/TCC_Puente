$(document).ready(function(){

  //Overlay background when dropdown is open
    $("main").on("click", function() {
     if ($(".collapse").hasClass("show")) {
       $('.navbar-collapse').collapse('hide');
     }
    });

    /*$('.collapse').on('hidden.bs.collapse', function() {
      $('.overlay').fadeOut();
   });

   $(".overlay").on("click", function() {
     $(this).fadeOut('slow');
   });*/

});
