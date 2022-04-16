angular.module("listaTelefonica").controller("editarEmpresaCtrl", function ($http, $scope, empresasAPI, serialGenerator, empresa, $location, config) {
    $scope.app = "Lista Telefônica";
    $scope.empresa = empresa.data;
    const apiEmpresas = config.baseURL + "/api/empresas";

    $scope.editarEmpresa = function (empresa) {
        $http.post(apiEmpresas + "/delete.php", empresa.codigo).then(function () {
            empresa.dataAlteracao = new Date();
            empresasAPI.saveEmpresa(empresa).then(function (response) {
                delete $scope.empresa;
                $scope.empresaForm.$setPristine();
                $location.path("/empresas");
            });
        })
    };
});