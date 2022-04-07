<?php
$filePatch = '../../database/contatos.json';
$json = file_get_contents($filePatch);
$codigo = $_GET['codigo'];
$contatos = json_decode($json, true);

foreach ($contatos as $contato) {
    if ($contato['codigo'] === $codigo) {
        echo json_encode($contato);
    }
}