<?php
require '../functions.php';
$contatos = json_decode(obterJson('contatos'), true);
$operadoras = json_decode(obterJson('operadoras'), true);
$newContato = $newContato ?? [];

foreach ($contatos as $contato) {
    foreach ($operadoras as $operadora) {
        if ($contato['operadora'] === $operadora['codigo']) {
            $contato['operadora'] = $operadora['nome'];
        }
    }
    $newContato = array_merge($newContato,[$contato]);
}
echo json_encode($newContato);