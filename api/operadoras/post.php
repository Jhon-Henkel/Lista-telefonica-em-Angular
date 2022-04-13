<?php
require '../functions.php';
$jsonDecode = json_decode(file_get_contents(filePatch('operadoras')), true);
$postDecode = json_decode(file_get_contents('php://input'), true);
foreach ($jsonDecode as $contato) {
    if (
        $contato['codigo'] == $postDecode['codigo'] ||
        $contato['nome'] == ucwords(strtolower($postDecode['nome'])) ||
        $contato['codigoArea'] == $postDecode['codigoArea']
    ) {
        echo 'Erro, código, código de área ou nome já existe!';
        exit;
    }
}
$postDecode['nome'] = ucwords(strtolower($postDecode['nome']));
if (strlen($postDecode['preco']) < 7) {
    if (strlen($postDecode['preco']) == 4) {
        $postDecode['preco'] = $postDecode['preco'] . ',00';
    } elseif (strlen($postDecode['preco']) == 6) {
        $postDecode['preco'] = $postDecode['preco'] . '0';
    }
}
$arrayPostDecode = [$postDecode];
$merge = array_merge($jsonDecode, $arrayPostDecode);
gravarJson($merge, 'operadoras');
