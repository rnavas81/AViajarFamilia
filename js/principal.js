
verItinerario = () => {window.location="itinerario.html"}

window.onload = () => {
    var estrellas = $(".fas.fa-star");
    estrellas.click(function(){
        var cuantas = $(this).data('pos');
        if($(this).hasClass('primary-text'))cuantas--;
        var padre = $(this).parent();
        $(padre).find("i").each(function(index){
            if(index<cuantas)$(this).removeClass('secondary-text');
            else $(this).addClass('secondary-text');
        })
    })
       
}