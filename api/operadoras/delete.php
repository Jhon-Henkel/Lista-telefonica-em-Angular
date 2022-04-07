<?php
$filePatch = '../../database/operadoras.json';

$json = file_get_contents($filePatch);
$codigo = file_get_contents('php://input');
$operadoras = json_decode($json, true);

foreach ($operadoras as $operadora => $row) {
    if ($row['codigo'] === $codigo) {
        unset($operadoras[$operadora]);
        rsort($operadoras);
        $newJson = json_encode($operadoras);
        $jsonOpen = fopen($filePatch, 'w');
        fwrite($jsonOpen, $newJson);
        fclose($jsonOpen);
    }
}