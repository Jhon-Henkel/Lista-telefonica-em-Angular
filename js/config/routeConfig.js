angular.module("listaTelefonica").config(function ($routeProvider) {
    $routeProvider.when("/contatos", {
        templateUrl: "view/contatos.html",
        controller: "listaTelefonicaCtrl",
        resolve: {
            contatos: function (contatosAPI) {
                return contatosAPI.getContatos();
            },
            empresas: function (empresasAPI) {
                return empresasAPI.getEmpresas();
            }
        }
    });
    $routeProvider.when("/novo-contato", {
        templateUrl: "view/novoContato.html",
        controller: "novoContatoCtrl",
        resolve: {
            empresas: function (empresasAPI) {
                return empresasAPI.getEmpresas();
            }
        }
    });
    $routeProvider.when("/detalhesContato/:codigo", {
        templateUrl: "view/detalhesContato.html",
        controller: "detalhesContatoCtrl",
        resolve: {
            contato: function (contatosAPI, $route) {
                return contatosAPI.getContato($route.current.params.codigo);
            }
        }
    });
    $routeProvider.when("/editar-contato/:codigo", {
        templateUrl: "view/editarContato.html",
        controller: "editarContatoCtrl",
        resolve: {
            contato: function (contatosAPI, $route) {
                return contatosAPI.getContato($route.current.params.codigo);
            },
            empresas: function (empresasAPI) {
                return empresasAPI.getEmpresas();
            }
        }
    });
    $routeProvider.when("/empresas", {
        templateUrl: "view/empresas.html",
        controller: "listaEmpresasCtrl",
        resolve: {
            empresas: function (empresasAPI) {
                return empresasAPI.getEmpresas();
            }
        }
    });
    $routeProvider.when("/nova-empresa", {
        templateUrl: "view/novaEmpresa.html",
        controller: "novaEmpresaCtrl",
    });
    $routeProvider.when("/detalhes-empresa/:codigo", {
        templateUrl: "view/detalhesEmpresa.html",
        controller: "detalhesEmpresaCtrl",
        resolve: {
            empresa: function (empresasAPI, $route) {
                return empresasAPI.getEmpresa($route.current.params.codigo);
            }
        }
    });
    $routeProvider.when("/editar-empresa/:codigo", {
        templateUrl: "view/editarEmpresa.html",
        controller: "editarEmpresaCtrl",
        resolve: {
            empresa: function (empresasAPI, $route) {
                return empresasAPI.getEmpresa($route.current.params.codigo);
            }
        }
    });
    $routeProvider.when("/error", {
        templateUrl: "view/error.html",
    });
    $routeProvider.otherwise({redirectTo: "/contatos"});
});