const welcome = "Esta página es para mayores de 18 🚫, vamos a verificar tu edad 👮🏼‍♂️";
alert(welcome);
function validarEdad(edad) {
    if (isNaN(edad)) {
        return false;
    }
    edad = parseInt(edad);
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}
