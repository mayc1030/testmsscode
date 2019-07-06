(function($) {
    "use strict";

    /***************** Initiate Flexslider ******************/
    $('.flexslider').flexslider({
        animation: "slide"
    });



    var url_ultimatepost = "https://maycolsanchezsalazar.000webhostapp.com/cms/views/ajax/ultimatepost.php";
    var domainurl=  $(location).attr("href");

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let posicionActual = 1;
    let intervalo;
    let idselector = "drupalnotes";


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


        $(".carousel-inner").hover(function(){
            clearInterval(intervalo);
        }, function(){
            intervalo = setInterval(changeView, TIEMPO_INTERVALO_MILESIMAS_SEG);
        });



    //get_data_callback();
    // peticion ajax enviada como callback
    function getDataCallbackultimateposts(domainurl,idselector){

        var categoria = 0;

        switch (idselector) {
            case "drupalnotes":
                categoria = 1;
                break;
            case "nintendoswich":
                categoria = 2;
                break;
            case "ubuntu":
                categoria = 3;
                break;
        }

        $.ajax({
            data: { locationurl:domainurl,id:categoria},
            dataType: "json",
            type:"POST",
            url:url_ultimatepost
        }).done(function(data,textStatus,jqXHR){

            var objc = JSON.parse(data);

            $.each(objc, function(key,value){

                var indice = key;
                if ($('#carousel-'+ idselector +' .carousel-inner').find('div').length < objc.length) {
                    $('<div class="carousel-item"><blockquote class="blockquote"><img src="img/myproyect1.jpg" height="80" width="80" alt="Avatar" class="img-circle"> <p class="h3"><a href="drupalnotes?id='+ value.nid +'">'+ value.title +'<a/></p><footer>My Profile</footer></blockquote></div>').appendTo($("#carousel-"+ idselector +" .carousel-inner"));
                    $('<li><img src="img/myproyect2.jpg" alt="Navigation avatar" data-target="#carousel-'+ idselector +'" data-slide-to="'+ indice +'" class="img-fluid img-circle"></li>').appendTo($("#carousel-"+ idselector +" .carousel-indicators"));
                    $("#carousel-"+ idselector +" .carousel-inner div:first-child").addClass(" active");
                }

            });

        }).fail(function(jqXHR,textStatus,textError){
            alert("Error al realizar la peticion dame");
        });

    }



    function start() {
        hidecarruselproyect();
        $('#control_portafolio .nav-link.drupalnotes').click();
    }

    start();

})(jQuery);