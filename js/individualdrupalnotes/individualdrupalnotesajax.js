
// url para llamar la peticion por ajax
var url_individualcontentdrupalnotes = "https://maycolsanchezsalazar.000webhostapp.com/cms/views/ajax/individualDrupalNotes.php";

$( document ).ready(function() {

    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };

    var id_drupalnote = getUrlParameter('id');

    getDataCallbackIdividualContentDrupalnotes(id_drupalnote);

});


//get_data_callback();
// peticion ajax enviada como callback
function getDataCallbackIdividualContentDrupalnotes(id_drupalnote){


    $.ajax({
        data: { id:id_drupalnote},
        type:"POST",
        url:url_individualcontentdrupalnotes
    }).done(function(data,textStatus,jqXHR){

        var objc = JSON.parse(data);

        $.each(objc, function(key,value){
            if(key == "content"){
                $.each(value, function(i,val){
console.log(val.titulo);
                    console.log(val.contenido);
                   /* $(".date-seccion").append("<div class='info'>El "+val.fecha+"</div>");
                    $(".view-drupalnotes").append("<div class='info'><i class='fas fa-eye'></i> "+val.visto+"</div>");
                    $(".download-drupalnotes").append("<div class='info'><i class='fas fa-download'></i> "+val.descargado+"</div>");
                    $(".bullhorn-drupalnotes").append("<div class='info'><i class='fas fa-bullhorn'></i> "+val.compartido+"</div>");
                    $(".author-seccion").append("<div class='info'>Publicado por "+val.usuario+"</div>");
                    $(".linkdownload-drupalnotes").append("<div class='info'><a href='files/"+val.titulo+".pdf' target='_blank'><i class='fas fa-cloud-download-alt'></i></a></div>");


                    $('<blockquote class="blockquote contentdrupalnotes"><img src="backend/'+val.ruta+'" height="80" width="80" alt="Avatar" class="img-circle"> <p class="h3">'+val.titulo+'</p><footer>'+val.introduccion+'</footer><a class="nav-link developments btn-drupalnotes btn-drupalnotes-outline" href="drupalnotes?id='+val.id+'" role="button"><span class="icon-spinner5"></span><small>my</small> Leer Más</a></blockquote>').appendTo($(".fcontentdrupalnotes"));
*/
                })
            }
        })
    }).fail(function(jqXHR,textStatus,textError){
        alert("Error al realizar la peticion dame".textError);
    });
}