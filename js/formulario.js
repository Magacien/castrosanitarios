function revisar(input) {
    console.log(input);
    if (input.value == '') {
        input.className = "form-control is-invalid";
    } else {
        input.className = "form-control is-valid";
    }
}

function revisarEmail(input) {
    //variable que contendra el formato a validar,usamos expresiones regulares
    let expresion = /\w+@\w+\.[a-z]/; //\w (este sirve para texto),
    //aqui valido el formato del email mago@gmail.com
    console.log(input.value);
    if (input.value !== "") {
        //si lo que esta escrito cumple con la expresion regular que pusimos arriba
        if (expresion.test(input.value)) {
            input.className = "form-control is-valid";
        } //aqui valido la expresion regular
        else {
            input.className = "form-control is-invalid";
        }
    } else {
        input.className = "form-control is-invalid";
    }

}

//con esta funcion valido numeros del formulario
function revisarNumeros(input) {
    //con isNaN pregunto si es numero o no
    if (isNaN(input.value) || input.value == '') {
        input.className = "form-control is-invalid";
    } else {
        input.className = "form-control is-valid";
    }
}

function revisarLongitud(input) {
    if (input.value !== "" && input.value.lenght >= 10) {
        input.className = "form-control is-valid";
    } else {
        input.className = "form-control is-invalid";
    }
}