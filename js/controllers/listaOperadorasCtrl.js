angular.module("listaTelefonica").controller("listaOperadorasCtrl", function ($scope, operadoras) {
    $scope.app = "Lista Telefônica";
    $scope.operadoras = operadoras.data;

    $scope.apagarOperadoras = function (operadoras) {
        $scope.operadoras = operadoras.filter(function (operadora) {
            if (!operadora.selecionado) return operadora;
        });
    };
    $scope.isOperadoraSelecionada = function (operadoras) {
        return operadoras.some(function (operadora) {
            return operadora.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioOrdenacao = campo;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    };
});