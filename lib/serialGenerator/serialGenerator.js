angular.module("serialGenerator", []);
angular.module("serialGenerator").provider("serialGenerator", function () {
    let _length = 6;

    this.getLength = function () {
        return _length
    };
    this.setLength = function (length) {
        _length = length;
    };

    this.$get = function () {
        return {
            generate: function () {
                let serial = "";
                while (serial.length < _length) {
                    serial += Math.floor((Math.random() * 9));
                }
                return serial
            }
        };
    };
});