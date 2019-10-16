
// url para llamar la peticion por ajax
var url_categories = "https://maycolsanchezsalazar.000webhostapp.com/cms/views/ajax/loadcategory.php";

$( document ).ready(function() {
    get_data_category();
    $(".btn-category").click(function(){
        init_contentdrupalnotes();
    });
});

function get_data_category(){

    $.ajax({
        dataType: "json",
        type:"POST",
        url:url_categories
    }).done(function(data,textStatus,jqXHR){

        let objcategory = JSON.parse(data);

        $.each(objcategory, function(key,value){
            $('<a class="nav-link '+value.tid+' btn-category btn-drupalnotes btn-drupalnotes-outline" role="button"><span class="icon-spinner5"></span>'+value.name+'</a>').appendTo($("#control_menu_list_drupalnotes"));
        });



    }).fail(function(jqXHR,textStatus,textError){
        alert("Error al realizar la peticion dame".textError);
    });
}

