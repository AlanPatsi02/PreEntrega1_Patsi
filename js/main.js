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
let edadValida = false;
while (!edadValida) {
    let edad = prompt("Ingresa tu edad por favor:");
    edadValida = validarEdad(edad);
    if (!edadValida) {
        if (isNaN(edad)) {
            alert("Por favor, ingresa un número válido 😡😡");
        } else {
            alert("Tenes que tener 18 o más para ingresar 😢😢😢");
        }
    }
}
alert("¡Bienvenido! Eres mayor de 18 😎, podes ingresar!🍾");