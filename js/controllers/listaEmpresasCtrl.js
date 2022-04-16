angular.module("listaTelefonica").controller("listaEmpresasCtrl", function ($scope, empresas, $http, $route, config) {
    $scope.app = "Lista Telefônica";
    $scope.empresas = empresas.data;
    const apiEmpresas = config.baseURL + "/api/empresas";

    $scope.apagarEmpresas = function (empresas) {
        $scope.empresas = empresas.filter(function (empresa) {
            if (empresa.selecionada) {
                $http.post(apiEmpresas + "/delete.php", empresa.codigo)
            }
            $route.reload();
        });
        $scope.verificarEmpresaSelecionada($scope.empresas);
    };
    $scope.verificarEmpresaSelecionada = function (empresas) {
        $scope.hasEmpresaSelecionada = empresas.some(function (empresa) {
            return empresa.selecionada;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioOrdenacao = campo;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    };
});