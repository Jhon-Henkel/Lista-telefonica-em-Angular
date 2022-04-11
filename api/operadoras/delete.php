<?php
require '../functions.php';
$operadoras = json_decode(obterJson('operadoras'),true);

foreach ($operadoras as $operadora => $row) {
    if ($row['codigo'] === file_get_contents('php://input')) {
        unset($operadoras[$operadora]);
        rsort($operadoras);
        gravarJson($operadoras,'operadoras');
    }
}