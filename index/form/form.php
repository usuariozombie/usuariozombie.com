<?php
// post all the data from the form in index and send it to the json.

// get the data from the form
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

// create the array
$data = array(
    'nombre' => $nombre,
    'email' => $email,
    'mensaje' => $mensaje
);

// encode the array to json

$json = json_encode($data);

// save the json to a file

file_put_contents('./db/data.json', $json);

// redirect to the index

header('Location: ../index.html');

?>
