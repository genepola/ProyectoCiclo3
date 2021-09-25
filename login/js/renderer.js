function limpiar(){
    formulario.reset();
};

    var usuario = null;
    var contraseña = null;
function validar(){
    usuario = document.getElementById("TBUsuario");
    contraseña = document.getElementById("PBusuario");

    if(usuario.value=="genepola" && contraseña.value=="12345"){
        window.confirm("Bienvenido");
    }
    else{
        window.alert("Contraseña o usuario incorrecto");
    }
}