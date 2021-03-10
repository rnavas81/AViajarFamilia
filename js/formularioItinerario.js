
verMisItinerarios = () => { window.location = "misitinerarios.html" }

function borrarPunto() {
    var padre = $(this).parent().parent().parent();
    $(padre).remove();
}

window.onload = () => {
    $("#agregar-punto").click(function () {
        var nuevo = $.parseHTML(`<div class="row">
            <hr>
            <div class="three columns p-10">
                <!-- Imagen del itinerario a la izquierda -->
                <img class="nueva imagen" src="recursos/camera.png" alt="Agregar imagen">
            </div>
            <!-- Izquierda Boton de agregar imagen | Derecha Botón de eliminar-->
            <div class="nine columns">
                <div class="mt-10">
                    <button class="u-pull-left primary-button">
                        <i class="fas fa-camera"></i>
                    </button>
                    <button class="u-pull-right primary-button borrar-punto">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
                <!-- Titulo del punto -->
                <input class="u-full-width mt-10 primary-dark-text" type="text" name="nombre" id="nombre" placeholder="Titulo de este punto">
            </div>
            <div class="twelve columns">
                <!-- Descripción del punto -->
                <textarea class="u-full-width primary-dark-text" name="descripcion" id="descripcion" cols="30" rows="10"></textarea>    
            </div>
        </div>`);
        $(nuevo).find(".borrar-punto").click(borrarPunto);
        $("#puntos").append(nuevo);
    })
    $(".borrar-punto").click(borrarPunto);

}