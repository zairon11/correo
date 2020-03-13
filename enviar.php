<?php
    //llamando a los campos del formulario
    $nombre =$_POST['nombre'];
    $correo =$_POST['correo'];
    $telefono =$_POST['telefono'];
    $mensaje =$_POST['mensaje'];

    //datos para el correo
    $destinatario="jhoell.aries.18@gmail.com";
    $asunto ="Contacto desde nuestra web";

    //datos del usuario quien envio el mensaje*/
    $carta ="De: $nombre \n";
    $carta .="Correo: $correo \n";
    $carta .="telefono: $telefono \n";
    $carta .="Mensaje: $mensaje";

    //enviando los mensajes
    mail($destinatario, $asunto, $carta);

    //para regresar a enviar otro mensaje
    header('Location:mensaje-de-envio.html')
?>