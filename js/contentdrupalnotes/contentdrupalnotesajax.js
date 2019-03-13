
// url para llamar la peticion por ajax
var url_contentdrupalnotes = "https://maycolsanchezsalazar.000webhostapp.com/cms/views/ajax/clDrupalNotes.php";

$( document ).ready(function() {

    // se genera el paginadorcontentdrupalnotes
    paginadorcontentdrupalnotes = $(".paginationcontentdrupalnotes");
    // cantidad de items por cdnpagina
    var items = 1, numeros =4;
    // inicia el paginadorcontentdrupalnotes
    init_paginator_contentdrupalnotes(paginadorcontentdrupalnotes,items,numeros);
    // se envia la peticion ajax que se realizara como callback
    set_callbackcontentdrupalnotes(get_data_callbackcontentdrupalnotes);
    cargaPaginacontentdrupalnotes(0);
});

//get_data_callback();
// peticion ajax enviada como callback
function get_data_callbackcontentdrupalnotes(){

    $.ajax({
        data:{
            limit: cdnitemsPorPagina,
            offset: cdndesde,
        },
        type:"POST",
        url:url_contentdrupalnotes
    }).done(function(data,textStatus,jqXHR){

        // obtiene la clave lista del json data
        var lista = data.lista;

       $(".fcontentdrupalnotes").html("");

        $(".date-seccion .info").remove();
        $(".view-drupalnotes .info").remove();
        $(".download-drupalnotes .info").remove();
        $(".bullhorn-drupalnotes .info").remove();
        $(".author-seccion .info").remove();
        $(".linkdownload-drupalnotes .info").remove();


        // genera el cuerpo de la tabla
        var cantidad = 0;
        var objc = JSON.parse(data);

        $.each(objc, function(key,value){
            if(key == "lista"){
                $.each(value, function(i,val){

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
                cantidad = value
            }
        })
            // si es necesario actualiza la cantidad de paginas del paginadorcontentdrupalnotes
            if(cdnpagina==0){
                creaPaginadorcontentdrupalnotes(cantidad);
            }
     /*   $.each(lista, function(ind, elem){

            $(".date-seccion").append("<div class='info'>El "+elem.fecha+"</div>");
            $(".view-drupalnotes").append("<div class='info'><i class='fas fa-eye'></i> "+elem.visto+"</div>");
            $(".download-drupalnotes").append("<div class='info'><i class='fas fa-download'></i> "+elem.descargado+"</div>");
            $(".bullhorn-drupalnotes").append("<div class='info'><i class='fas fa-bullhorn'></i> "+elem.compartido+"</div>");
            $(".author-seccion").append("<div class='info'>Publicado por "+elem.usuario+"</div>");
            $(".linkdownload-drupalnotes").append("<div class='info'><a href='files/"+elem.titulo+".pdf' target='_blank'><i class='fas fa-cloud-download-alt'></i></a></div>");

          $('<blockquote class="blockquote contentdrupalnotes"><img src="backend/'+elem.ruta+'" height="80" width="80" alt="Avatar" class="img-circle"> <p class="h3">'+elem.titulo+'</p><footer>'+elem.introduccion+'</footer><a class="nav-link developments btn-drupalnotes btn-drupalnotes-outline" href="drupalnotes.php?id='+elem.id+'" role="button"><span class="icon-spinner5"></span><small>my</small> Leer Más</a></blockquote>').appendTo($(".fcontentdrupalnotes"));

        });*/

    }).fail(function(jqXHR,textStatus,textError){
        alert("Error al realizar la peticion dame".textError);
    });
}