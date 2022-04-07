angular.module("listaTelefonica").controller("detalhesOperadoraCtrl", function ($scope, $routeParams, operadora, config, $http, $location) {
    $scope.operadora = operadora.data;

    const apiContatos = config.baseURL + "/api/operadoras";

    $scope.deleteOperadora = function (codigo) {
        return $http.post(apiContatos + "/delete.php", codigo).then(function (response) {
            $location.path("/operadoras");
        });
    }
});