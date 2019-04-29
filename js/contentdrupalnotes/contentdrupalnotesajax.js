
// url para llamar la peticion por ajax
var url_contentdrupalnotes = "https://maycolsanchezsalazar.000webhostapp.com/cms/views/ajax/getAllDrupalNotes.php";

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
       // var objc = JSON.parse(data);
        var objc =  JSON.parse(JSON.stringify(data));
        console.log(objc);

        $.each(objc, function(key,value){
            if(key == "lista"){
                $.each(value, function(i,val){

                    $(".date-seccion").append("<div class='info'>El</div>");
                    $(".view-drupalnotes").append("<div class='info'><i class='fas fa-eye'></i> </div>");
                    $(".download-drupalnotes").append("<div class='info'><i class='fas fa-download'></i> </div>");
                    $(".bullhorn-drupalnotes").append("<div class='info'><i class='fas fa-bullhorn'></i> </div>");
                    $(".author-seccion").append("<div class='info'>Publicado por </div>");
                    $(".linkdownload-drupalnotes").append("<div class='info'><a href='files/"+val.title+".pdf' target='_blank'><i class='fas fa-cloud-download-alt'></i></a></div>");


                    $('<blockquote class="blockquote contentdrupalnotes"><img src="backend/" height="80" width="80" alt="Avatar" class="img-circle"> <p class="h3">'+val.titulo+'</p><footer></footer><a class="nav-link developments btn-drupalnotes btn-drupalnotes-outline" href="drupalnotes?id='+val.nid+'" role="button"><span class="icon-spinner5"></span><small>my</small> Leer Más</a></blockquote>').appendTo($(".fcontentdrupalnotes"));

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


    }).fail(function(jqXHR,textStatus,textError){
        alert("Error al realizar la peticion dame".textError);
    });
}