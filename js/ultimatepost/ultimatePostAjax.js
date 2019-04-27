
// // url para llamar la peticion por ajax
// var url_ultimatepost = "https://maycolsanchezsalazar.000webhostapp.com/cms/views/ajax/ultimatepost.php";
//
// $( document ).ready(function() {
//
//         var categoria = 1;
//         var domainurl=  $(location).attr("href");
//         getDataCallbackultimateposts(domainurl,categoria);
//
// });

var url_ultimatepost = "https://maycolsanchezsalazar.000webhostapp.com/cms/views/ajax/ultimatepost.php";

//get_data_callback();
// peticion ajax enviada como callback
function getDataCallbackultimateposts(domainurl,idselector){

 var categoria = 0;

    switch (idselector) {
        case "proyects":
            categoria = 1;
            break;
        case "contributions":
            categoria = 2;
            break;
        case "developments":
            categoria = 3;
            break;
    }

        $.ajax({
                data: { locationurl:domainurl,id:categoria},
                dataType: "json",
                type:"POST",
                url:url_ultimatepost
        }).done(function(data,textStatus,jqXHR){

        var objc = JSON.parse(data);

        $.each(objc, function(key,value){
                var indice = key;
                $('<div class="carousel-item"><blockquote class="blockquote contentdrupalnotes"><img src="img/myproyect1.jpg" height="80" width="80" alt="Avatar" class="img-circle"> <p class="h3">'+ value.title +'</p><footer>My Profile</footer></blockquote></div>').appendTo($("#carousel-"+ categoria +" .carousel-inner"));
                $('<li><img src="img/myproyect2.jpg" alt="Navigation avatar" data-target="#carousel-'+ categoria +'" data-slide-to="'+ indice +'" class="img-fluid img-circle"></li>').appendTo($("#carousel-proyects .carousel-indicators"));
                $("#carousel-proyects .carousel-inner div:first-child").addClass(" active");
        })

    }).fail(function(jqXHR,textStatus,textError){
        alert("Error al realizar la peticion dame");
    });
}