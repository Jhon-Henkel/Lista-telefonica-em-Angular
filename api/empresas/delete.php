<?php
require '../functions.php';
$empresas = json_decode(obterJson('empresas'), true);
$contatos = json_decode(obterJson('contatos'), true);

foreach ($empresas as $empresa => $row) {
    if ($row['codigo'] === file_get_contents('php://input')) {
        foreach ($contatos as $contato) {
            if ($contato['empresa'] != file_get_contents('php://input')) {
                unset($empresas[$empresa]);
                rsort($empresas);
                gravarJson($empresas, 'empresas');
                exit;
            }
        }
    }
    echo 'Erro, empresa já vinculada a um contato!';
}