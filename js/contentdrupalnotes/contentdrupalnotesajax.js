
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




    }).fail(function(jqXHR,textStatus,textError){
        alert("Error al realizar la peticion dame".textError);
    });
}