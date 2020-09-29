$(document).ready(function(){

  //Overlay background when dropdown is open----------------------
    $("main").on("click", function() {
     if ($(".collapse").hasClass("show")) {
       $('.navbar-collapse').collapse('hide');
     }
    });

    AOS.init({
      once: true,
      offset: 300
    });

    //set class active to current page-----------------------
    var current = location.pathname;
    $('#nav ul li a').each(function() {
        var $this = $(this);
        // we check comparison between current page and attribute redirection.
        if ($this.attr('href') === current) {
            $this.addClass('active');
        }
    });

    $('#nav .contact-link').on("click", function() {
      $('#nav ul li a').removeClass('active');
      $(this).addClass('active');
    });

});
