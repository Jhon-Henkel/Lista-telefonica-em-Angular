<?php
require '../functions.php';
$contatos = json_decode(obterJson('contatos'), true);

foreach ($contatos as $contato => $row) {
    if ($row['codigo'] === file_get_contents('php://input')) {
        unset($contatos[$contato]);
        rsort($contatos);
        gravarJson($contatos, 'contatos');
    }
}