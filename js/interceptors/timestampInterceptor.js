angular.module("listaTelefonica").factory("timestampInterceptor", function () {
    return {
        request: function (config) {
            var url = config.url;
            if (url.indexOf('view') > -1) return config;
            var timestamp = new Date().getTime();
            if (url.indexOf('?') > -1) {
                config.url = url + "&timestamp=" + timestamp;
            }else {
                config.url = url + "?timestamp=" + timestamp;
            }
            return config;
        }
    };
});