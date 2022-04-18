<?php
require '../functions.php';
$contatos = json_decode(obterJson('contatos'), true);
$empresas = json_decode(obterJson('empresas'), true);
$newContato = $newContato ?? [];

foreach ($contatos as $contato) {
    foreach ($empresas as $empresa) {
        if ($contato['empresa'] === $empresa['codigo']) {
            $contato['empresa'] = $empresa['nome'];
        }
    }
    $newContato = array_merge($newContato,[$contato]);
}
echo json_encode($newContato);