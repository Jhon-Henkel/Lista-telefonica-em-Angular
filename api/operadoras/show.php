<?php
$filePatch = '../../database/operadoras.json';
$json = file_get_contents($filePatch);
$codigo = $_GET['codigo'];
$operadoras = json_decode($json, true);

foreach ($operadoras as $operadora) {
    if ($operadora['codigo'] === $codigo) {
        echo json_encode($operadora);
    }
}