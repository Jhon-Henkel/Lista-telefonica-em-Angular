angular.module("listaTelefonica").factory("empresasAPI", function ($http, config) {
    const apiEmpresas = config.baseURL + "/api/empresas";

    const _getEmpresas = function () {
        return $http.get(apiEmpresas + "/index.php");
    };

    const _getEmpresa = function (codigo) {
        return $http.get(apiEmpresas + "/show.php?codigo=" + codigo);
    };

    const _saveEmpresa = function (empresa) {
        return $http.post(apiEmpresas + "/post.php", empresa);
    };

    return {
        getEmpresas: _getEmpresas,
        getEmpresa: _getEmpresa,
        saveEmpresa: _saveEmpresa,
    };
});