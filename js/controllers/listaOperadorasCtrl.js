angular.module("listaTelefonica").controller("listaOperadorasCtrl", function ($scope, operadoras, $http, $route, config) {
    $scope.app = "Lista Telefônica";
    $scope.operadoras = operadoras.data;
    const apiOperadoras = config.baseURL + "/api/operadoras";

    $scope.apagarOperadoras = function (operadoras) {
        $scope.operadoras = operadoras.filter(function (operadora) {
            if (operadora.selecionado) {
                $http.post(apiOperadoras + "/delete.php", operadora.codigo)
            }
            $route.reload();
        });
        $scope.verificarOperadoraSelecionada($scope.operadoras);
    };
    $scope.verificarOperadoraSelecionada = function (operadoras) {
        $scope.hasOperadoraSelecionada = operadoras.some(function (operadora) {
            return operadora.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioOrdenacao = campo;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    };
});