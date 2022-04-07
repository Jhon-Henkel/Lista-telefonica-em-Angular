angular.module("listaTelefonica").directive("uiValor", function () {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            const _formatValor = function (valor) {
                valor = valor.replace(/[^0-9]+/g, "");

                if (valor.length > 0) {
                    valor = "R$ " + valor.substring(0, 8);
                }
                if (valor.length > 4) {
                    valor = valor.substring(0,4) + "," + valor.substring(4, 6);
                }
                return valor;
            }
            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatValor(ctrl.$viewValue));
                ctrl.$render();
            });
        }
    };
});