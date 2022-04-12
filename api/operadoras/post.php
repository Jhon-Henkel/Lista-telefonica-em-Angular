<?php
require '../functions.php';
$jsonDecode = json_decode(file_get_contents(filePatch('operadoras')), true);
$postDecode = json_decode(file_get_contents('php://input'), true);
$postDecode['nome'] = ucwords(strtolower($postDecode['nome']));
$arrayPostDecode = [$postDecode];
$merge = array_merge($jsonDecode, $arrayPostDecode);
gravarJson($merge, 'operadoras');