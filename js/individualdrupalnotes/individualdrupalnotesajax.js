
// url para llamar la peticion por ajax
var url_contentdrupalnotes = "https://maycolsanchezsalazar.000webhostapp.com/cms/views/ajax/individualDrupalNotes.php";

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
        url:url_contentdrupalnotes
    }).done(function(data,textStatus,jqXHR){
        console.log(data);
    }).fail(function(jqXHR,textStatus,textError){
        alert("Error al realizar la peticion dame".textError);
    });
}