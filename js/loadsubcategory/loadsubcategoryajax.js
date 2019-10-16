
// url para llamar la peticion por ajax
var url_subcategories = "https://maycolsanchezsalazar.000webhostapp.com/cms/views/ajax/loadsubcategory.php";

$( document ).ready(function() {
    var id_category = 1;
    get_data_subcategoty(id_category);
});

function get_data_subcategoty(id_category){

    $.ajax({
        data: {id:id_category},
        dataType: "json",
        type:"POST",
        url:url_subcategories
    }).done(function(data,textStatus,jqXHR){

        let objsubcategory = JSON.parse(data);

        $.each(objsubcategory, function(key,value){

            $('<a class="nav-link '+value.tid+' btn-drupalnotes btn-drupalnotes-outline" role="button"><span class="icon-spinner5"></span>'+value.name+'</a>').appendTo($("#control_menu_list_drupalnotes"));
        });



    }).fail(function(jqXHR,textStatus,textError){
        alert("Error al realizar la peticion dame".textError);
    });
}