angular.module("listaTelefonica").controller("editarOperadoraCtrl", function ($http, config, $scope, operadorasAPI, serialGenerator, $location, operadora) {
    $scope.app = "Lista Telefônica";
    $scope.operadora = operadora.data;
    const apiOperadoras = config.baseURL + "/api/operadoras";

    $scope.editarOperadora = function (operadora) {
        $http.post(apiOperadoras + "/delete.php", operadora.codigo).then(function () {
            operadora.dataAlteracao = new Date();
            operadorasAPI.saveOperadora(operadora).then(function (response) {
                $location.path("/operadoras");
            });
        })
    };
});