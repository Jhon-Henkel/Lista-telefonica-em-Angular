<?php
require '../functions.php';
$jsonDecode = json_decode(file_get_contents(filePatch('empresas')), true);
$postDecode = json_decode(file_get_contents('php://input'), true);
foreach ($jsonDecode as $empresa) {
    if ($empresa['nome'] == ucwords(strtolower($postDecode['nome']))) {
        echo 'Erro, o nome já existe!';
        exit;
    }elseif ($empresa['codigo'] == $postDecode['codigo']) {
        echo 'Erro, código já existe!';
        exit;
    }elseif ($empresa['telefone'] == $postDecode['telefone']) {
        echo 'Erro, número de telefone já existe!';
        exit;
    }
}
$postDecode['nome'] = ucwords(strtolower($postDecode['nome']));
$arrayPostDecode = [$postDecode];
$merge = array_merge($jsonDecode, $arrayPostDecode);
gravarJson($merge, 'empresas');