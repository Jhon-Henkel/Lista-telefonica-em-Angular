angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, contatosAPI, serialGenerator, $location, operadoras) {
    $scope.app = "Lista Telefônica";
    $scope.operadoras = operadoras.data;

    $scope.adicionarContato = function (contato) {
        contato.codigo = serialGenerator.generate();
        contato.data = new Date();
        contato.dataAlteracao = "Nunca";
        contatosAPI.saveContato(contato).then(function (response) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path("/contatos");
        });
    };
});