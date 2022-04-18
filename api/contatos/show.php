<?php
require '../functions.php';
$contatos = json_decode(obterJson('contatos'), true);
$empresas = json_decode(obterJson('empresas'), true);

foreach ($contatos as $contato) {
    foreach ($empresas as $empresa) {
        if ($contato['codigo'] === $_GET['codigo']) {
            if ($contato['empresa'] === $empresa['codigo']) {
               $contato['empresa'] = $empresa['nome'];
                echo json_encode($contato);
            }
        }
    }
}