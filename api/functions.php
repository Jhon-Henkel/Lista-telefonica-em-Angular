<?php

function filePatch($file): string
{
    if ($file == 'contatos') {
        return '../../database/contatos.json';
    }elseif ($file == 'operadoras') {
        return '../../database/operadoras.json';
    }
    echo 'Falha ao carregar diretório da database '.$file.'!!!';
    exit;
}

function obterJson($file): string
{
    if ($file == 'contatos') {
        return file_get_contents(filePatch('contatos'));
    }elseif ($file == 'operadoras') {
        return file_get_contents(filePatch('operadoras'));
    }
    echo 'Falha ao obter Json '.$file.'!!!';
    exit;
}

function gravarJson($dados, $file): void
{
    $jsonOpen = fopen(filePatch($file), 'w');
    fwrite($jsonOpen, json_encode($dados));
    fclose($jsonOpen);
}