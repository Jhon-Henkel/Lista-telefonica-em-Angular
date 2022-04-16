angular.module("listaTelefonica").controller("novaEmpresaCtrl", function ($scope, empresasAPI, serialGenerator, $location) {
    $scope.app = "Lista Telefônica";

    $scope.adicionarEmpresa = function (empresa) {
        empresa.codigo = serialGenerator.generate();
        empresa.data = new Date();
        empresa.dataAlteracao = "Nunca";
        empresasAPI.saveEmpresa(empresa).then(function (response) {
            delete $scope.empresa;
            $scope.empresaForm.$setPristine();
            $location.path("/empresas");
        });
    };
});