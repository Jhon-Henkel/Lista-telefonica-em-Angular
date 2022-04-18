angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, contatosAPI, serialGenerator, $location, empresas) {
    $scope.app = "Lista Telefônica";
    $scope.empresas = empresas.data;

    $scope.adicionarContato = function (contato) {
        contato.codigo = serialGenerator.generate();
        contato.data = new Date();
        contato.dataAlteracao = "Nunca";
        contato.empresa = contato.empresa.codigo;
        contato.empresaCodigo = contato.empresa;
        contatosAPI.saveContato(contato).then(function (response) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path("/contatos");
        });
    };
});