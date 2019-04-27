
// url para llamar la peticion por ajax
var url_ultimatepost = "https://maycolsanchezsalazar.000webhostapp.com/cms/views/ajax/ultimatepost.php";

$( document ).ready(function() {

        var categoria = 1;
        var domainurl=  $(location).attr("href");
        getDataCallbackultimateposts(domainurl,categoria);

});


//get_data_callback();
// peticion ajax enviada como callback
function getDataCallbackultimateposts(domainurl,categoria){


        $.ajax({
                data: { locationurl:domainurl,id:categoria},
                dataType: "json",
                type:"POST",
                url:url_ultimatepost
        }).done(function(data,textStatus,jqXHR){

        var objc = JSON.parse(data);

        $.each(objc, function(key,value){
                console.log( value.title);
                $('<blockquote class="blockquote contentdrupalnotes"><img src="backend/'+ value.title+'" height="80" width="80" alt="Avatar" class="img-circle"> <p class="h3">'+value.title+'</p><a class="nav-link developments btn-drupalnotes btn-drupalnotes-outline" href="drupalnotes" role="button"><span class="icon-spinner5"></span><small>my</small> Leer Más</a></blockquote>').appendTo($("#carousel-proyects .carousel-inner .carousel-item"));
        })

    }).fail(function(jqXHR,textStatus,textError){
        alert("Error al realizar la peticion dame");
    });
}