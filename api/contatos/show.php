<?php
require '../functions.php';
$contatos = json_decode(obterJson('contatos'), true);
$operadoras = json_decode(obterJson('operadoras'), true);

foreach ($contatos as $contato) {
    foreach ($operadoras as $operadora) {
        if ($contato['codigo'] === $_GET['codigo']) {
            if ($contato['operadora'] === $operadora['codigo']) {
                $contato['operadora'] = $operadora['nome'];
                echo json_encode($contato);
            }
        }
    }
}