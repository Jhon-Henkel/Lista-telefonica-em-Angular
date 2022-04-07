angular.module("listaTelefonica").directive("uiPhone", function () {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            const _formatPhone = function (phone) {
                phone = phone.replace(/[^0-9]+/g, "");

                if (phone.length > 1) {
                    phone = "(" + phone.substring(0, 2) + ") " + phone.substring(2);
                }
                if (phone.length > 3) {
                    if (phone.length > 13) {
                        phone = phone.substring(0,10) + "-" + phone.substring(10,14);
                    }
                    if (phone.length <= 14) {
                        phone = phone.substring(0, 9) + "-" + phone.substring(9, 14);
                    }
                }
                return phone;
            }

            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatPhone(ctrl.$viewValue));
                ctrl.$render();
            });
        }
    };
});