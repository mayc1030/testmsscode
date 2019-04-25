(function($) {
    "use strict";

    /***************** Initiate Flexslider ******************/
    $('.flexslider').flexslider({
        animation: "slide"
    });


    // Bootstrap JS
    // @codekit-prepend "bootstrap/util.js";
    // @codekit-prepend "bootstrap/carousel.js";
    // @codekit-prepend "bootstrap/collapse.js";
    // @codekit-prepend "bootstrap/dropdown.js";
    // @codekit-prepend "bootstrap/modal.js";

    // Waypoints
    // @codekit-prepend "plugins/jquery.waypoints.js"

    // Placeholders
    // @codekit-prepend "plugins/jquery.placeholder.js";

    // Video JS
    // @codekit-prepend "plugins/video.js";

    // Vimeo modal autoplay
    // @codekit-prepend "plugins/jquery.vimeo.api.js";

    // Donut Chart
    // @codekit-prepend "plugins/chart.js";


    function hidecarruselproyect() {
        $('#carousel-contributions').hide();
        $('#carousel-developments').hide();

        $('#control_portafolio .nav-link.proyects').click(function() {
            $(this).addClass("intro");

            $('#carousel-proyects').fadeIn("slow");
            $('#carousel-contributions').hide();
            $('#carousel-developments').hide();


        });

        $('#control_portafolio .nav-link.contributions').click(function() {
            $(this).addClass("intro");

            $('#carousel-proyects').hide();
            $('#carousel-contributions').fadeIn("slow");
            $('#carousel-developments').hide();


        });

        $('#control_portafolio .nav-link.developments').click(function() {
            $(this).addClass("intro");

            $('#carousel-proyects').hide();
            $('#carousel-contributions').hide();
            $('#carousel-developments').fadeIn("slow");
            changeView();



        });

    }

    let gola = $("#carousel-developments .carousel-indicators li").size();
    var cont = 1;

    function changeView(cont) {

    cont+1;
        $('#carousel-developments .carousel-indicators li:nth-child(cont) img').click();
        console.log(cont);

    }
    setInterval(changeView(cont), 3000);

    function start() {

        hidecarruselproyect();
    }

    start();

})(jQuery);