angular.module("listaTelefonica").controller("novaOperadoraCtrl", function ($scope, operadorasAPI, serialGenerator, $location) {
    $scope.app = "Lista Telefônica";

    $scope.adicionarOperadora = function (operadora) {
        operadora.codigo = serialGenerator.generate();
        operadora.data = new Date();
        operadora.dataAlteracao = "Nunca";
        operadorasAPI.saveOperadora(operadora).then(function (response) {
            delete $scope.operadora;
            $scope.operadoraForm.$setPristine();
            $location.path("/operadoras");
        });
    };
});