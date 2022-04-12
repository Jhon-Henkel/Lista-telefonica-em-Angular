<?php
require '../functions.php';
$operadoras = json_decode(obterJson('operadoras'), true);
$contatos = json_decode(obterJson('contatos'), true);

foreach ($operadoras as $operadora => $row) {
    foreach ($contatos as $contato) {
        if ($row['codigo'] === file_get_contents('php://input')) {
            if ($row['codigo'] == $contato['operadora']) {
                echo 'Erro, operadora já vinculada a um contato!';
                exit;
            }
            unset($operadoras[$operadora]);
            rsort($operadoras);
            gravarJson($operadoras, 'operadoras');
        }
    }
}