<?php
require '../functions.php';
$empresas = json_decode(obterJson('empresas'), true);

foreach ($empresas as $empresa) {
    if ($empresa['codigo'] === $_GET['codigo']) {
        echo json_encode($empresa);
    }
}