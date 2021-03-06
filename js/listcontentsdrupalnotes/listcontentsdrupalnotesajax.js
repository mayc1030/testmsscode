
// url para llamar la peticion por ajax
var url_listcontentdrupalnotes= "https://maycolsanchezsalazar.000webhostapp.com/cms/views/ajax/getAllDrupalNotes.php";

$('#control_menu_list_drupalnotes .nav-link.drupalnotes').click(function() {
    $('.btn_list_content_category').remove();
    $('.btn_list_content_subcategory').remove();
    $('#subcategories').html("");
    $('#carousel-list-content-drupalnotes').fadeIn();
    $('#carousel-drupalnotes').fadeOut();
    $(".title-seccion").html("Lista de Todos los Contenidos");
    init_get_data_list_content_drupalnotes();
});


    function init_get_data_list_content_drupalnotes() {
        // se genera el paginadorcontentdrupalnotes
        paginadorlistcontentdrupalnotes = $(".paginationlistcontentdrupalnotes");
        // cantidad de items por pagina
        var items = 8, numeros = 4;
        // inicia el paginadorcontentdrupalnotes
        init_paginator_listcontentdrupalnotes(paginadorlistcontentdrupalnotes, items, numeros);
        // se envia la peticion ajax que se realizara como callback
        set_callbacklistcontentdrupalnotes(get_data_callbacklistcontentdrupalnotes);
        cargaPaginalistcontentdrupalnotes(0);
    }

// peticion ajax enviada como callback
function get_data_callbacklistcontentdrupalnotes(){
    $.ajax({
        data:{
            limit: lcdnitemsPorPagina,
            offset: lcdndesde,
        },
        type:"POST",
        url:url_listcontentdrupalnotes
    }).done(function(data,textStatus,jqXHR){
        // obtiene la clave lista del json data
        var lista = data.lista;
        $(".flistcontentdrupalnotes").html("");
        $(".img-listdrupalnotes").fadeOut();
        $(".linkdownload-ldrupalnotes").fadeOut();
        $(".img-listdrupalnotes .info-img").remove();
        $(".linkdownload-ldrupalnotes .info").remove();

        // genera el cuerpo de la tabla
        var cantidad = 0;
        var objc = JSON.parse(data);

        $.each(objc, function(key,value){
            if(key == "lista"){
                $.each(value, function(i,val){

                    $(".img-listdrupalnotes").append("<div class='info-img'><a  href='drupalnotes?id="+val.nid+"'><img src='img/msscode.png' height='30' width='30' alt='Avatar' class='img-circle'></a></div>").fadeIn();
                    $(".linkdownload-ldrupalnotes").append("<div class='info'><a href='files/"+val.title+".pdf' target='_blank'><i class='fas fa-cloud-download-alt'></i></a></div>").fadeIn();

                    $('<tr>'+

                        '<td>'+val.title+'</td>'+
                        '<td><a class="nav-link btn-menu-content btn-menu-content-outline" href="drupalnotes?id='+val.nid+'" role="button" target="_blank"><span class="icon-spinner5"></span>Leer Más</a></td>'+
                        '</tr>').appendTo($(".flistcontentdrupalnotes"));
                })
            }
            if(key == "cantidad"){
                cantidad = value
            }
        })

        // si es necesario actualiza la cantidad de paginas del paginadorcontentdrupalnotes
        if(lcdnpagina==0){
            creaPaginadorlistcontentdrupalnotes(cantidad);
        }

    }).fail(function(jqXHR,textStatus,textError){
        alert("Error al realizar la peticion dame".textError);
    });
}