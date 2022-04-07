angular.module("listaTelefonica").directive("uiCodigoArea", function () {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            const _formatCodigoArea = function (codigo) {
                codigo = codigo.replace(/[^0-9]+/g, "");
                codigo = codigo.substring(0,2);
                return codigo;
            }
            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatCodigoArea(ctrl.$viewValue));
                ctrl.$render();
            });
        }
    };
});