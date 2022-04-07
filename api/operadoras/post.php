<?php
$filePatch = '../../database/operadoras.json';

$json = file_get_contents($filePatch);
$post = file_get_contents('php://input');

$jsonDecode = json_decode($json, true);
$postDecode = json_decode($post, true);

$arrayPostDecode = [$postDecode];
$merge = array_merge($jsonDecode, $arrayPostDecode);
$newJson = json_encode($merge);
$jsonOpen = fopen($filePatch, 'w');
fwrite($jsonOpen, $newJson);
fclose($jsonOpen);