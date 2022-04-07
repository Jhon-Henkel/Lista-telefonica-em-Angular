<?php
$filePatch = '../../database/contatos.json';

$json = file_get_contents($filePatch);
$codigo = file_get_contents('php://input');
$contatos = json_decode($json, true);

foreach ($contatos as $contato => $row) {
    if ($row['codigo'] === $codigo) {
        unset($contatos[$contato]);
        rsort($contatos);
        $newJson = json_encode($contatos);
        $jsonOpen = fopen($filePatch, 'w');
        fwrite($jsonOpen, $newJson);
        fclose($jsonOpen);
    }
}