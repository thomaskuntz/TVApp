var app = angular.module('OnlineStatus', []);

//app.controller('MainCtrl', function ($scope, $rootScope) {
//    $scope.status = $rootScope.online;

//});

app.run(function ($window, $rootScope) {
    $rootScope.online = navigator.onLine;
    $window.addEventListener("offline", function () {
        $rootScope.$apply(function () {
            $rootScope.online = false;
        });
    }, false);
    $window.addEventListener("online", function () {
        $rootScope.$apply(function () {
            $rootScope.online = true;
        });
    }, false);
});

