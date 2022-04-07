angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {
    const apiContatos = config.baseURL + "/api/contatos";

    const _getContatos = function () {
        return $http.get(apiContatos + "/index.php");
    };

    const _getContato = function (codigo) {
        return $http.get(apiContatos + "/show.php?codigo=" + codigo);
    };

    const _saveContato = function (contato) {
        return $http.post(apiContatos + "/post.php", contato);
    };

    return {
        getContatos: _getContatos,
        getContato: _getContato,
        saveContato: _saveContato,
    };
});