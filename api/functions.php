<?php

function filePatch($file): string
{
    if ($file == 'contatos') {
        return '../../database/contatos.json';
    }elseif ($file == 'empresas') {
        return '../../database/empresas.json';
    }
    echo 'Falha ao carregar diretório da database '.$file.'!!!';
    exit;
}

function obterJson($file): string
{
    if ($file == 'contatos') {
        return file_get_contents(filePatch('contatos'));
    }elseif ($file == 'empresas') {
        return file_get_contents(filePatch('empresas'));
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