angular.module("listaTelefonica").service("operadorasAPI", function ($http, config) {

    const apiOperadoras = config.baseURL + "/api/operadoras"

    this.getOperadoras = function () {
        return $http.get(apiOperadoras + "/index.php");
    };
    this.saveOperadora = function (operadora) {
        return $http.post(apiOperadoras + "/post.php", operadora);
    };
    this.getOperadora = function (codigo) {
        return $http.get(apiOperadoras + "/show.php?codigo=" + codigo);
    };
});