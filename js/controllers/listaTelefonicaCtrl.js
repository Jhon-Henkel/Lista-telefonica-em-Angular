angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatos, serialGenerator, $http, config, $route) {
    $scope.app = "Lista Telefônica";
    $scope.contatos = contatos.data;
    const apiContatos = config.baseURL + "/api/contatos";

    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (contato.selecionado) {
                $http.post(apiContatos + "/delete.php", contato.codigo)
            }
            $route.reload();
        });
        $scope.verificarContatoSelecionado($scope.contatos);
    };
    $scope.verificarContatoSelecionado = function (contatos) {
        $scope.hasContatoSelecionado = contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioOrdenacao = campo;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    };
});