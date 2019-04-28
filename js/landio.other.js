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

    var url_ultimatepost = "https://maycolsanchezsalazar.000webhostapp.com/cms/views/ajax/ultimatepost.php";
    var domainurl=  $(location).attr("href");

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let posicionActual = 1;
    let intervalo;
    let idselector = "proyects";


    function cplay(selector) {

        idselector = selector.attr('class').split(' ')[1];
        getDataCallbackultimateposts(domainurl,idselector);
        clearInterval(intervalo);
        posicionActual = 1;
        intervalo = setInterval(changeView, TIEMPO_INTERVALO_MILESIMAS_SEG);


    }

    function changeView() {

        if(posicionActual === $("#carousel-"+ idselector+" .carousel-indicators li").size()) {
            posicionActual = 1;
            console.log(posicionActual+"---"+$("#carousel-"+ idselector+" .carousel-indicators li").size())
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


    function getstopSlide(){
        $(".carousel-inner .carousel-item .h3").hover(function(){
            clearInterval(intervalo);
        }, function(){
            intervalo = setInterval(changeView, TIEMPO_INTERVALO_MILESIMAS_SEG);
        });
    }


    //get_data_callback();
// peticion ajax enviada como callback
    function getDataCallbackultimateposts(domainurl,idselector){

        var categoria = 0;

        switch (idselector) {
            case "proyects":
                categoria = 1;
                break;
            case "contributions":
                categoria = 2;
                break;
            case "developments":
                categoria = 3;
                break;
        }

        $.ajax({
            data: { locationurl:domainurl,id:categoria},
            dataType: "json",
            type:"POST",
            url:url_ultimatepost
        }).done(function(data,textStatus,jqXHR){
            console.log(posicionActual+" en ajax");
            var objc = JSON.parse(data);

            $.each(objc, function(key,value){

                var indice = key;
                if ($('#carousel-'+ idselector +' .carousel-inner').find('div').length < objc.length) {
                    $('<div class="carousel-item"><blockquote class="blockquote"><img src="img/myproyect1.jpg" height="80" width="80" alt="Avatar" class="img-circle"> <p class="h3">'+ value.title +'</p><footer>My Profile</footer></blockquote></div>').appendTo($("#carousel-"+ idselector +" .carousel-inner"));
                    $('<li><img src="img/myproyect2.jpg" alt="Navigation avatar" data-target="#carousel-'+ idselector +'" data-slide-to="'+ indice +'" class="img-fluid img-circle"></li>').appendTo($("#carousel-"+ idselector +" .carousel-indicators"));
                    $("#carousel-"+ idselector +" .carousel-inner div:first-child").addClass(" active");
                }

                $('#carousel-'+ idselector +' .carousel-inner .carousel-item .h3').hover(function(){
                    clearInterval(intervalo);
                }, function(){
                    intervalo = setInterval(changeView, TIEMPO_INTERVALO_MILESIMAS_SEG);
                });
            });

        }).fail(function(jqXHR,textStatus,textError){
            alert("Error al realizar la peticion dame");
        });

    }



    function start() {

        hidecarruselproyect();
        $('#control_portafolio .nav-link.proyects').click();
       // intervalo = setInterval(changeView, TIEMPO_INTERVALO_MILESIMAS_SEG);

    }

    start();

})(jQuery);