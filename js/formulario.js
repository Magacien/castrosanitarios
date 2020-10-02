function revisar(input) {
 console.log(input);
    if(input.value == ""){
     input.className = "form-control is-invalid";
     return false;
 } else {
     input.className = "form-control is-valid";
     return true;
 }
}
function revisarEmail(input) {
//creamos una variable , y usamos variables regulares para validar formulario
let expresion = /\w+@\w+\.[a-z]/;

console.log(input.value);

if(input.value !== "") {
  //si lo que esta escrito cumple con la expresion regular que pusimos arriba    
    if (expresion.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } //aqui valido la expresion regular
    else {
        input.className = "form-control is-invalid";
        return false;
    }
} else {
    input.className = "form-control is-invalid";
    return false;
}
}

function revisarNumeros(input) {
if(isNaN(input.value) || input.value == ""){
    input.className = "form-control is-invalid";
    return false;
} else {
    input.className = "form-control is-valid";
    return true;
}
}

function revisarLongitud(input) {
    if (input.value != ""  && input.value.length >= 10){
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}
 function validar(event) {
    //preventDefault previene su comportamiento por defecto
    event.preventDefault();
    console.log("dentro de la funcion validar");

    if(revisar(document.getElementById('nombre'))&&
       revisar(document.getElementById('apellido')) &&
       revisarEmail(document.getElementById('mail')) &&
       revisarNumeros(document.getElementById('telefono')) &&
       revisarLongitud(document.getElementById('consulta'))
    ) {
        enviarMail();

    }else {
       alert("envio fallido");
    }
}

function enviarMail() {
    console.log("enviar mail");
    let templateParams = {
        "from_name": document.getElementById('nombre').value,
        "to_name": "Administrador",
        "message_html": `${document.getElementById('consulta').value}
        - Mail: ${document.getElementById('mail').value}`

};
     
        let service_id ="default_service";
        let template_id = "template_uRDzHtYk";
         emailjs.send(service_id, template_id, templateParams)
        .then(function(response) {
           console.log('Si todo esta bien', response);
           document.getElementById('success').className="alert alert-primary mt-4";
           document.getElementById('success').innerText="Consulta enviada correctamente";
        }, 
           function(error) {
           console.log('Fallo el envio del mail...', error);
           document.getElementById('success').className="alert alert-primary mt-4";
           document.getElementById('success').innerText="Algo salio mal";

        }
        );
}
