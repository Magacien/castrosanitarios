<?php
 if(!empty($_POST['nombre']) AND !empty($_POST['apellido']) AND !empty($_POST['email']) AND !empty($_POST['telefono'])){
$to ="gutmariano91@gmail.com";
$headers = "Content-Type: text/html; charset=iso-8859-1\n";
$headers .= "From:".$_POST['nombre']."\r\n";
$tema="Contacto desde el Sitio Web";
$mensaje="
<table border='0' cellspacing='2' cellpadding='2'>
  <tr>
    <td width='20%' align='center' bgcolor='#FFFFCC'><strong>Nombre:</strong></td>
    <td width='80%' align='left'>$_POST[nombre]</td>
  </tr>
  <tr>
    <td width='20%' align='center' bgcolor='#FFFFCC'><strong>Apellido:</strong></td>
    <td width='80%' align='left'>$_POST[apellido]</td>
  </tr>
  <tr>
  <td align='center' bgcolor='#FFFFCC'><strong>E-mail:</strong></td>
  <td align='left'>$_POST[email]</td>
</tr>
  <tr>
    <td width='20%' align='center' bgcolor='#FFFFCC'><strong>Teléfono</strong></td>
    <td width='80%' align='left'>$_POST[telefono]</td>
  </tr>
 <tr>
    <td align='center' bgcolor='#FFFFCC'><strong>Consulta:</strong></td>
    <td align='left'>$_POST[consulta]</td>
  </tr>
</table>
";
@mail($to,$tema,$mensaje,$headers);
     echo "Su mensaje ha sido enviado.<br /><a href='contacto.html'>Volver</a>";
} else {
	echo "No se puede enviar el formulario, verifica los campos";
}
?>