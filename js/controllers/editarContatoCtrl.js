angular.module("listaTelefonica").controller("editarContatoCtrl", function ($http, $scope, contatosAPI, serialGenerator, $location, operadoras, contato, config) {
    $scope.app = "Lista Telefônica";
    $scope.operadoras = operadoras.data;
    $scope.contato = contato.data;
    const apiContatos = config.baseURL + "/api/contatos";

    $scope.editarContato = function (contato) {
        $http.post(apiContatos + "/delete.php", contato.codigo).then(function () {
            contato.dataAlteracao = new Date();
            contatosAPI.saveContato(contato).then(function (response) {
                delete $scope.contato;
                $scope.contatoForm.$setPristine();
                $location.path("/contatos");
            });
        })
    };
});