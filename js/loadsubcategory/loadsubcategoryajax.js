
// url para llamar la peticion por ajax
var url_subcategories = "https://maycolsanchezsalazar.000webhostapp.com/cms/views/ajax/loadsubcategory.php";

$( document ).ready(function() {
    var id_category = 1;
    get_data_subcategoty(id_category);
});

//get_data_callback();
// peticion ajax enviada como callback
function get_data_subcategoty(id_category){

    $.ajax({
        data: {id:id_category},
        dataType: "json",
        type:"POST",
        url:url_subcategories
    }).done(function(data,textStatus,jqXHR){

        var objsubcategory = JSON.parse(data);

        $.each(objsubcategory, function(key,value){

            $('<p class="h3">'+value.tid+'</p><p class="h3">'+value.name+'</p>').appendTo($(".fcontentdrupalnotes"));

        });



    }).fail(function(jqXHR,textStatus,textError){
        alert("Error al realizar la peticion dame".textError);
    });
}