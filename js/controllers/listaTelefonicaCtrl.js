angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatos, operadoras, serialGenerator) {
    $scope.app = "Lista Telefônica";
    $scope.contatos = contatos.data;
    $scope.operadoras = operadoras.data;

    const generateSerial = function (contatos) {
        contatos.forEach(function (item) {
            item.serial = serialGenerator.generate();
        });
    };
    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioOrdenacao = campo;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    };
    generateSerial($scope.contatos);
});