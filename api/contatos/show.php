<?php
require '../functions.php';
$contatos = json_decode(obterJson('contatos'), true);

foreach ($contatos as $contato) {
    if ($contato['codigo'] === $_GET['codigo']) {
        echo json_encode($contato);
    }
}