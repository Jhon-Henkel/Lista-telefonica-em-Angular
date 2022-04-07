angular.module("listaTelefonica").controller("detalhesContatoCtrl", function ($scope, $routeParams, contato, config, $http, $location) {
    $scope.contato = contato.data;

    const apiContatos = config.baseURL + "/api/contatos";

    $scope.deleteContato = function (codigo) {
        return $http.post(apiContatos + "/delete.php", codigo).then(function (response) {
            $location.path("/contatos");
        });
    }
});