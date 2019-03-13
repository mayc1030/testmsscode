(function($) {
    
    var url_contentdrupalnotes = "https://maycolsanchezsalazar.000webhostapp.com/cms/views/ajax/clDrupalNotes.php";
    
    $( document ).ready(function() {

    // se genera el paginadorcontentdrupalnotes
    paginadorcontentdrupalnotes = $(".paginationcontentdrupalnotes");
    // cantidad de items por cdnpagina
    var items = 1, numeros =4;
    // inicia el paginadorcontentdrupalnotes
    init_paginator_contentdrupalnotes(paginadorcontentdrupalnotes,items,numeros);
    // se envia la peticion ajax que se realizara como callback
   // set_callbackcontentdrupalnotes(get_data_callbackcontentdrupalnotes);
        get_data_callbackcontentdrupalnotes();
    cargaPaginacontentdrupalnotes(0);
});

 
    
//get_data_callback();
// peticion ajax enviada como callback
function get_data_callbackcontentdrupalnotes(){
  
    
    var cantidad = 0;
    
      
        $(".fcontentdrupalnotes").html("");
        $(".date-seccion .info").remove();
        $(".view-drupalnotes .info").remove();
        $(".download-drupalnotes .info").remove();
        $(".bullhorn-drupalnotes .info").remove();
        $(".author-seccion .info").remove();
        $(".linkdownload-drupalnotes .info").remove();
    
        $.ajax({
            data:{
                limit: 8,
                offset: 0,
            },
            type:"POST",
            url:url_contentdrupalnotes
        }).done(function(data,textStatus,jqXHR){

            // obtiene la clave lista del json data
            var objc = JSON.parse(data);
            
            $.each(objc, function(key,value){
            if(key == "lista"){
                $.each(value, function(i,val){
                    console.log(val.titulo);
                    $(".date-seccion").append("<div class='info'>El "+val.fecha+"</div>");
                    $(".view-drupalnotes").append("<div class='info'><i class='fas fa-eye'></i> "+val.visto+"</div>");
                    $(".download-drupalnotes").append("<div class='info'><i class='fas fa-download'></i> "+val.descargado+"</div>");
                    $(".bullhorn-drupalnotes").append("<div class='info'><i class='fas fa-bullhorn'></i> "+val.compartido+"</div>");
                    $(".author-seccion").append("<div class='info'>Publicado por "+val.usuario+"</div>");
                    $(".linkdownload-drupalnotes").append("<div class='info'><a href='files/"+val.titulo+".pdf' target='_blank'><i class='fas fa-cloud-download-alt'></i></a></div>");


                    $('<blockquote class="blockquote contentdrupalnotes"><img src="backend/'+val.ruta+'" height="80" width="80" alt="Avatar" class="img-circle"> <p class="h3">'+val.titulo+'</p><footer>'+val.introduccion+'</footer><a class="nav-link developments btn-drupalnotes btn-drupalnotes-outline" href="drupalnotes.php?id='+val.id+'" role="button"><span class="icon-spinner5"></span><small>my</small> Leer Más</a></blockquote>').appendTo($(".fcontentdrupalnotes"));

                })
            }
            if(key == "cantidad"){
                 console.log(value);
                cantidad = value
            }
      
                
                  // si es necesario actualiza la cantidad de paginas del paginadorcontentdrupalnotes
        if(cdnpagina==0){
            creaPaginadorcontentdrupalnotes(cantidad);
        }
                
            })
            
 
        }).fail(function(jqXHR,textStatus,textError){
           console.log("Error al realizar la peticion dame");
        });
}
    
    
    
    /////
    
    function  init_paginator_contentdrupalnotes(a, b, c) {
    a = a, cdnitemsPorPagina = b, cdnnumerosPorPagina = 8
}

//<li class="'.$state.'"><img src="backend/'.$item["ruta"].'" alt="Navigation avatar" data-target="#carousel-drupalnotes" data-slide-to="'.$row.'" class="img-fluid img-circle"></li>

function creaPaginadorcontentdrupalnotes(a) {
    paginadorcontentdrupalnotes.html(""),
        cdntotalPaginas = Math.ceil(a / cdnitemsPorPagina),
        $('<li><a href="#" class="cdn_first_link"><</a></li>').appendTo(paginadorcontentdrupalnotes),
        $('<li><a href="#" class="cdn_prev_link">«</a></li>').appendTo(paginadorcontentdrupalnotes);

    //solo pinta los li a mostrar
    for (var b = 0; cdntotalPaginas > b;) {
        $('<li><a href="#" class="cdn_page_link" data-target="#carousel-drupalnotes" data-slide-to="'+b+'">' + (b + 1) + "</a></li>").appendTo(paginadorcontentdrupalnotes), b++;
    }
    cdnnumerosPorPagina > 1 && ($(".cdn_page_link").hide(),

        $(".cdn_page_link").slice(0, cdnnumerosPorPagina).show()),
        $('<li><a href="#" class="cdn_next_link">»</a></li>').appendTo(paginadorcontentdrupalnotes),
        $('<li><a href="#" class="cdn_last_link">></a></li>').appendTo(paginadorcontentdrupalnotes),

    0 == cdnpagina && (paginadorcontentdrupalnotes.find(".cdn_page_link:first").addClass("active"),
        paginadorcontentdrupalnotes.find(".cdn_page_link:first").parents("li").addClass("active")),
        paginadorcontentdrupalnotes.find(".cdn_prev_link").hide(),

        paginadorcontentdrupalnotes.find("li .cdn_page_link").click(function() {
        var a = $(this).html().valueOf() - 1;
        return cargaPaginacontentdrupalnotes(a), !1
    }), paginadorcontentdrupalnotes.find("li .cdn_first_link").click(function() {
        var a = 0;
        return cargaPaginacontentdrupalnotes(a), !1
    }), paginadorcontentdrupalnotes.find("li .cdn_prev_link").click(function() {
        var a = parseInt(paginadorcontentdrupalnotes.data("pag")) - 1;
        return cargaPaginacontentdrupalnotes(a), !1
    }), paginadorcontentdrupalnotes.find("li .cdn_next_link").click(function() {
        var a = parseInt(paginadorcontentdrupalnotes.data("pag")) + 1;
        return cargaPaginacontentdrupalnotes(a), !1
    }), paginadorcontentdrupalnotes.find("li .cdn_last_link").click(function() {
        var a = cdntotalPaginas - 1;
        return cargaPaginacontentdrupalnotes(a), !1
    })
}

function get_datacdn() {
    console.log("nada")
}

function set_callbackcontentdrupalnotes(a) {
    ! function(b) {
        b.get_datacdn = function() {
            a()
        }
    }(window || {})
}

function cargaPaginacontentdrupalnotes(a) {
    $(".fcontentdrupalnotes").css('left', -8200);
  $(".fcontentdrupalnotes").animate({left: '0px'});

    cdnpagina = a,
        cdndesde = cdnpagina * cdnitemsPorPagina,
        get_datacdn(),
        console.log(cdndesde);
        cdnpagina >= 1 ? paginadorcontentdrupalnotes.find(".cdn_prev_link").show() : paginadorcontentdrupalnotes.find(".cdn_prev_link").hide(),
        cdntotalPaginas - cdnnumerosPorPagina > cdnpagina ? paginadorcontentdrupalnotes.find(".cdn_next_link").show() : paginadorcontentdrupalnotes.find(".cdn_next_link").hide(),
        paginadorcontentdrupalnotes.data("pag", cdnpagina),
    cdnnumerosPorPagina > 1 && ($(".cdn_page_link").hide(), cdntotalPaginas - cdnnumerosPorPagina > cdnpagina ? $(".cdn_page_link").slice(cdnpagina, cdnnumerosPorPagina + cdnpagina).show() : cdntotalPaginas > cdnnumerosPorPagina ? $(".cdn_page_link").slice(cdntotalPaginas - cdnnumerosPorPagina).show() : $(".cdn_page_link").slice(0).show()),
        paginadorcontentdrupalnotes.children().removeClass("active"), paginadorcontentdrupalnotes.children().eq(cdnpagina + 2).addClass("active")

}
var paginadorcontentdrupalnotes, cdntotalPaginas, cdnitemsPorPagina = 4,
    cdnnumerosPorPagina = 4,
    cdndesde = 0,
    cdnpagina = 0;


})(jQuery);
