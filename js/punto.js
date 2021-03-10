
verPunto = () => {window.location="punto.html"}

agregarComentario = () => {
    var comentario = $("#comentario").val();
    var $nuevo = $.parseHTML(`
    <div>
        <h5>Nuevo comentario</h5>
        <p>${comentario}</p>
        <hr>
    </div>`);
    $("#blkcomentarios").append($nuevo);
}

window.onload = () => {
    var estrellas = $(".fas.fa-star");
    estrellas.click(function(){
        var cuantas = $(this).data('pos');
        if($(this).hasClass('primary-light-text') && cuantas==$('.primary-light-text').length)cuantas--;
        var padre = $(this).parent();
        $(padre).find("i").each(function(index){
            if(index<cuantas)$(this).addClass('primary-light-text').removeClass('primary-dark-text');
            else $(this).addClass('primary-dark-text').removeClass('primary-light-text');
        })
    })
       
}