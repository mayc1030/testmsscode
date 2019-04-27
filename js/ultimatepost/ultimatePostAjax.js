
// url para llamar la peticion por ajax
var url_ultimatepost = "https://maycolsanchezsalazar.000webhostapp.com/cms/views/ajax/ultimatepost.php";

$( document ).ready(function() {

        var categoria = 1;
        getDataCallbackultimateposts(categoria);

});


//get_data_callback();
// peticion ajax enviada como callback
function getDataCallbackultimateposts(categoria){


        $.ajax({
                data: { id:categoria},
                type:"POST",
                url:url_ultimatepost
        }).done(function(data,textStatus,jqXHR){

        var objc = JSON.parse(data);

        console.log(objc);

        // $.each(objc, function(key,value){
        //     if(key == "content"){
        //         $.each(value, function(i,val){
        //
        //
        //             $(".drupal-note").append(val.contenido);
        //
        //         })
        //     }
        // })
        //

    }).fail(function(jqXHR,textStatus,textError){
        alert("Error al realizar la peticion dame");
    });
}