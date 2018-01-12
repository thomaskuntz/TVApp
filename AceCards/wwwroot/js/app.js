var app = angular.module('appRoute', ['ngRoute']);

app.config([('$routeProvider')],
    function ($routeProvider) {
        $routeProvider
            .when('/Error', {
                templateUrl: 'Error/Error',
                controller: 'ErrorController'
            })
            .otherwise({ redirectTo: "/Home" });
    });
