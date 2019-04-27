
// url para llamar la peticion por ajax
var url_ultimatepost = "http://dev-msscode.pantheonsite.io/ultimatepost/1";

$( document ).ready(function() {

        var categoria = 1;
        getDataCallbackultimateposts(categoria);

});


//get_data_callback();
// peticion ajax enviada como callback
function getDataCallbackultimateposts(categoria){


    $.ajax({
        data: { id:categoria},
        type:"GET",
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
        alert("Error al realizar la peticion dame".textError);
    });
}