angular.module("listaTelefonica").controller("detalhesEmpresaCtrl", function ($scope, $routeParams, empresa, config, $http, $location) {
    $scope.empresa = empresa.data;
    const apiEmpresas = config.baseURL + "/api/empresas";

    $scope.deleteEmpresa = function (codigo) {
        return $http.post(apiEmpresas + "/delete.php", codigo).then(function (response) {
            $location.path("/empresas");
        });
    }
});