<?php
// esto se envia al correo de botbol
$destinatario = 'castromat.sanitarios@gmail.com';

$nombre = $_POST['nombre'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];
$email = $_POST['email'];


$header = "Enviado desde la Página Web";
$mensajeCompleto = $mensaje . "\n Nombre: $nombre \n" ."Email: $email" ;

mail($destinatario,$asunto,$mensajeCompleto,$header);
echo "<script>alert('El mensaje se envio correctamente')</script>";
echo "<script>setTimeout(\"location.href='index.html'\",500)</script>";
?>