<?php
require '../functions.php';
$operadoras = json_decode(obterJson('operadoras'), true);

foreach ($operadoras as $operadora) {
    if ($operadora['codigo'] === $_GET['codigo']) {
        echo json_encode($operadora);
    }
}