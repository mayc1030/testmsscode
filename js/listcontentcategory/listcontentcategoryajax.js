
// url para llamar la peticion por ajax
var url_listcontentcategory= "https://maycolsanchezsalazar.000webhostapp.com/cms/views/ajax/getAllPostforCategory.php";

function action_button_list_content_category(id_c){
    $('.btn_list_content_category').remove();
    $('<a class="nav-link btn_list_content_category role="button"><span class="icon-spinner5"></span>Lista de Contenidos de la categoria </a>').appendTo($(".componente-icon-list #list_content_category"));
    setTimeout(function(){
        $(".btn_list_content_category").click(function(){
            $('#carousel-list-content-drupalnotes').show();
            $('#carousel-drupalnotes').hide();
            init_get_data_list_content_category(id_c);
        });
    }, 1000);
}

function init_get_data_list_content_category(id_c){
    console.log("call methos ajax");
    // se genera el paginadorcontentdrupalnotes
    paginadorlistcontentdrupalnotes = $(".paginationlistcontentdrupalnotes");
    // cantidad de items por pagina
    var items = 8, numeros =4, id_category = id_c;
    // inicia el paginadorcontentdrupalnotes
    init_paginator_listcontentdrupalnotes(paginadorlistcontentdrupalnotes,items,numeros,id_category);
    // se envia la peticion ajax que se realizara como callback
    set_callbacklistcontentdrupalnotes(get_data_callback_list_content_category);
    cargaPaginalistcontentdrupalnotes(0);
}

// peticion ajax enviada como callback
function get_data_callback_list_content_category(){
    $.ajax({
        data:{
            id:id_category,
            limit: lcdnitemsPorPagina,
            offset: lcdndesde,
        },
        type:"POST",
        url:url_listcontentcategory
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