/**
 * Funciones para index
 */

window.onload = function(){
    const users = {
        'admin':'admin',
        'user1':'1234',
        'user2':'1234',
        'user3':'1234',
    };
    var form = document.getElementById("formulario");
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if(event.submitter.name=='acceder'){
            document.getElementById("mensaje").textContent="";
            var user = document.getElementById("user").value;
            var password = document.getElementById("password").value;
            console.log(user,password);
            if(users[user]!==undefined && users[user]==password){
                window.location="principal.html";
            } else {
                document.getElementById("mensaje").textContent="Error en el usuario o contraseña";
                document.getElementById("mensaje").classList.add("error");
            }
        } else if(event.submitter.name=='registrarse'){
            window.location="registrar.html";
        }
    })
}