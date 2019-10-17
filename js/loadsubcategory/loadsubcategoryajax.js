
// url para llamar la peticion por ajax
var url_subcategories = "https://maycolsanchezsalazar.000webhostapp.com/cms/views/ajax/loadsubcategory.php";


function init_get_data_subcategory(id_category){
    $(".btn-subcategory").remove();
    get_data_subcategory(id_category);
    setTimeout(function(){
        $(".btn-subcategory").click(function(){
            $(this).each(function(){
                var id_subcategory = $(this).attr('class').split(' ')[1];
                init_contentdrupalnotes(id_subcategory);
                init_get_data_subcategory(id_subcategory);
                console.log("holamundo");
            });

        });
    }, 3000);
}

function get_data_subcategory(id_category){

    $.ajax({
        data: {id:id_category},
        dataType: "json",
        type:"POST",
        url:url_subcategories
    }).done(function(data,textStatus,jqXHR){

        let objsubcategory = JSON.parse(data);

        $.each(objsubcategory, function(key,value){
            $('<a class="nav-link '+value.tid+' btn-subcategory btn-drupalnotes btn-drupalnotes-outline" role="button"><span class="icon-spinner5"></span>'+value.name+'</a>').appendTo($(".componente-icon-list"));
        });



    }).fail(function(jqXHR,textStatus,textError){
        alert("Error al realizar la peticion dame".textError);
    });
}