
// url para llamar la peticion por ajax
var url_categories = "https://maycolsanchezsalazar.000webhostapp.com/cms/views/ajax/loadcategory.php";

$( document ).ready(function() {
    get_data_category();
    setTimeout(function(){
    $(".btn-category").click(function(){
        
        $('#carousel-drupalnotes').toggle(1000);
        $('#carousel-list-content-drupalnotes').toggle(1000);


        $(this).each(function(){
            var icon_category = $(this).attr('class').split(' ')[2];
            $('.logo-list-drupalnotes').remove();
            $('<i class="fab '+icon_category+' logo-list-drupalnotes"></i>').appendTo($("#control_menu_list_drupalnotes"));
            $(".title-seccion").html($(this).text());
            var id_category = $(this).attr('class').split(' ')[1];
            init_contentdrupalnotes(id_category);
            init_get_data_subcategory(id_category);
        });

    });
    }, 3000);
});

function get_data_category(){

    $.ajax({
        dataType: "json",
        type:"POST",
        url:url_categories
    }).done(function(data,textStatus,jqXHR){

        let objcategory = JSON.parse(data);

        $.each(objcategory, function(key,value){
            $('<a class="nav-link '+value.tid+' '+value.field_code_icon+' btn-category btn-drupalnotes btn-drupalnotes-outline" role="button"><span class="icon-spinner5"></span>'+value.name+'</a>').appendTo($("#control_menu_list_drupalnotes"));
        });



    }).fail(function(jqXHR,textStatus,textError){
        alert("Error al realizar la peticion dame".textError);
    });
}

