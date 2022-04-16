<?php
require '../functions.php';
$empresas = json_decode(obterJson('empresas'), true);

foreach ($empresas as $empresa => $row) {
    if ($row['codigo'] === file_get_contents('php://input')) {
        unset($empresas[$empresa]);
        rsort($empresas);
        gravarJson($empresas, 'empresas');
    }
}