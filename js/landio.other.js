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


    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let posicionActual = 1;
    let intervalo;
    let idselector = "proyects";


    function cplay(selector) {
        idselector = selector.attr('class').split(' ')[1];
        clearInterval(intervalo);
        posicionActual = 1;
            intervalo = setInterval(changeView, TIEMPO_INTERVALO_MILESIMAS_SEG);
    }

    function changeView() {

        if(posicionActual === $("#carousel-"+ idselector+" .carousel-indicators li").size()) {
            posicionActual = 1;
        } else {
            posicionActual++;
        }
        renderizarImagen();

    }

    function renderizarImagen () {
        $('#carousel-'+ idselector+' .carousel-indicators li:nth-child('+posicionActual+') img').click();
    }


    function hidecarruselproyect() {
        $('#carousel-contributions').hide();
        $('#carousel-developments').hide();

        $('#control_portafolio .nav-link.proyects').click(function() {
            $(this).addClass("intro");

            $('#carousel-proyects').fadeIn("slow");
            $('#carousel-contributions').hide();
            $('#carousel-developments').hide();

            cplay($(this));

        });

        $('#control_portafolio .nav-link.contributions').click(function() {
            $(this).addClass("intro");

            $('#carousel-proyects').hide();
            $('#carousel-contributions').fadeIn("slow");
            $('#carousel-developments').hide();

           cplay($(this));

        });

        $('#control_portafolio .nav-link.developments').click(function() {
            $(this).addClass("intro");

            $('#carousel-proyects').hide();
            $('#carousel-contributions').hide();
            $('#carousel-developments').fadeIn("slow");

            cplay($(this));

        });

    }

    $(".carousel-inner .carousel-item .h3").hover(function(){
        clearInterval(intervalo);
    }, function(){
        intervalo = setInterval(changeView, TIEMPO_INTERVALO_MILESIMAS_SEG);
    });


    function start() {

        hidecarruselproyect();
    }

    start();

})(jQuery);