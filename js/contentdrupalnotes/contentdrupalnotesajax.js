
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
        console.log("hola mundo");
        var objc = JSON.parse(data);
        console.log(objc);

    }).fail(function(jqXHR,textStatus,textError){
        alert("Error al realizar la peticion dame".textError);
    });
}