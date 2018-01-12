var module = angular.module('appRoute', ['firebase'])
    .controller('DataController', ['$scope', '$firebaseObject', '$timeout', function ($scope, $firebaseObject, $timeout) {
        //*****************************************************************************
        // Initialize Firebase to connect the database.
        //*****************************************************************************
        var config = {
            apiKey: "AIzaSyDr1MKTlGOEsBRrmjW4DFWX81t-1SiIy1I",
            authDomain: "chris-project-fd2f7.firebaseapp.com",
            databaseURL: "https://chris-project-fd2f7.firebaseio.com",
            projectId: "chris-project-fd2f7",
            storageBucket: "chris-project-fd2f7.appspot.com",
            messagingSenderId: "192604718135"
        };

        firebase.initializeApp(config);

        var data = firebase.database().ref().child('Angular');
        var syncObject = $firebaseObject(data);
        syncObject.$bindTo($scope, "data");

        //*****************************************************************************
        // Gauge setup
        //*****************************************************************************

        $scope.gaugeOptions = {
            angle: 0, // The span of the gauge arc
            lineWidth: 0.37, // The line thickness
            radiusScale: 1, // Relative radius
            pointer: {
                length: 0.38, // // Relative to gauge radius
                strokeWidth: 0.057, // The thickness
                color: '#000000' // Fill color
            },
            limitMax: true,   // If true, the pointer will not go past the end of the gauge
            percentColors: [[0.0, "#F03E3E"], [0.50, "#FFDD00"], [1.0, "#30B32D"]], // Gauge Changes colors depending on position
            colorStart: '#6FADCF',   // Colors
            colorStop: '#8FC0DA',    // just experiment with them
            strokeColor: '#E0E0E0',  // to see which ones work best for you
            generateGradient: true,
            highDpiSupport: true,     // High resolution support
        }

        //*****************************************************************************
        // Give AngularFire time to get the data and then set the gauges in each card.
        // Additionally, watch for new changes in the database and set the gauge again.
        //*****************************************************************************

        $timeout(function () {

            var canvasBudget = document.getElementById('Canvas-Budget');
            var gauge = new Gauge(canvasBudget).setOptions($scope.gaugeOptions);
            gauge.maxValue = $scope.data.Budget_Status.Goal;
            gauge.animationSpeed = 128; // set animation speed (32 is default value)
            gauge.set($scope.data.Budget_Status.Current);

            $scope.$watchCollection('[data.Budget_Status.Current, data.Budget_Status.Goal]', function () {

                gauge.maxValue = $scope.data.Budget_Status.Goal;

                if ($scope.data.Budget_Status.Current > $scope.data.Budget_Status.Goal) {
                    gauge.set($scope.data.Budget_Status.Goal);
                }
                else {
                    gauge.set($scope.data.Budget_Status.Current);
                }
            });

            var canvasProjects = document.getElementById('Canvas-Projects');
            var gaugeProjects = new Gauge(canvasProjects).setOptions($scope.gaugeOptions);
            gaugeProjects.maxValue = $scope.data.Projects_Status.Goal;
            gaugeProjects.animationSpeed = 128; // set animation speed (32 is default value)
            gaugeProjects.set($scope.data.Projects_Status.Current);

            $scope.$watchCollection('[data.Projects_Status.Current, data.Projects_Status.Goal]', function () {

                gaugeProjects.maxValue = $scope.data.Projects_Status.Goal;

                if ($scope.data.Projects_Status.Current > $scope.data.Projects_Status.Goal) {
                    gaugeProjects.set($scope.data.Projects_Status.Goal);
                }
                else {
                    gaugeProjects.set($scope.data.Projects_Status.Current);
                }
            });

            var canvasefficiency = document.getElementById('Canvas-Efficiency');
            var gaugeefficiency = new Gauge(canvasefficiency).setOptions($scope.gaugeOptions);
            gaugeefficiency.maxValue = $scope.data.Efficiency_Status.Goal;
            gaugeefficiency.animationSpeed = 128; // set animation speed (32 is default value)
            gaugeefficiency.set($scope.data.Efficiency_Status.Current);

            $scope.$watchCollection('[data.Efficiency_Status.Current, data.Efficiency_Status.Goal]', function () {

                gaugeefficiency.maxValue = $scope.data.Efficiency_Status.Goal;

                if ($scope.data.Efficiency_Status.Current > $scope.data.Efficiency_Status.Goal) {
                    gaugeefficiency.set($scope.data.Efficiency_Status.Goal);
                }
                else {
                    gaugeefficiency.set($scope.data.Efficiency_Status.Current);
                }
            });

            var canvasOutage = document.getElementById('Canvas-Outage');
            var gaugeOutage = new Gauge(canvasOutage).setOptions($scope.gaugeOptions);
            gaugeOutage.maxValue = $scope.data.Outage_Status.Goal;
            gaugeOutage.animationSpeed = 128; // set animation speed (32 is default value)
            gaugeOutage.set($scope.data.Outage_Status.Current);

            $scope.$watchCollection('[data.Outage_Status.Current, data.Outage_Status.Goal]', function () {

                gaugeOutage.maxValue = $scope.data.Outage_Status.Goal;

                if ($scope.data.Outage_Status.Current > $scope.data.Outage_Status.Goal) {
                    gaugeOutage.set($scope.data.Outage_Status.Goal);
                }
                else {
                    gaugeOutage.set($scope.data.Outage_Status.Current);
                }
            });

            var canvasDefect = document.getElementById('Canvas-Defect');
            var gaugeDefect = new Gauge(canvasDefect).setOptions($scope.gaugeOptions);
            gaugeDefect.maxValue = $scope.data.Defect_Status.Goal;
            gaugeDefect.animationSpeed = 128; // set animation speed (32 is default value)
            gaugeDefect.set($scope.data.Defect_Status.Current);

            $scope.$watchCollection('[data.Defect_Status.Current, data.Defect_Status.Goal]', function () {

                gaugeDefect.maxValue = $scope.data.Defect_Status.Goal;

                if ($scope.data.Defect_Status.Current > $scope.data.Defect_Status.Goal) {
                    gaugeDefect.set($scope.data.Defect_Status.Goal);
                }
                else {
                    gaugeDefect.set($scope.data.Defect_Status.Current);
                }
            });

            var canvasChicagoSports = document.getElementById('Canvas-ChicagoSports');
            var gaugeChicagoSports = new Gauge(canvasChicagoSports).setOptions($scope.gaugeOptions);
            gaugeChicagoSports.maxValue = $scope.data.ChicagoSports_Status.Goal;
            gaugeChicagoSports.animationSpeed = 128; // set animation speed (32 is default value)
            gaugeChicagoSports.set($scope.data.ChicagoSports_Status.Current);

            $scope.$watchCollection('[data.ChicagoSports_Status.Current, data.ChicagoSports_Status.Goal]', function () {

                gaugeChicagoSports.maxValue = $scope.data.ChicagoSports_Status.Goal;

                if ($scope.data.ChicagoSports_Status.Current > $scope.data.ChicagoSports_Status.Goal) {
                    gaugeChicagoSports.set($scope.data.ChicagoSports_Status.Goal);
                }
                else {
                    gaugeChicagoSports.set($scope.data.ChicagoSports_Status.Current);
                }
            });
        }, 1000);
    }]);


//*****************************************************************************
// Here will check to see if the computer is connected to the internet (WiFi or LAN).
// If the computer is connected we will return true else
// return false and show it to the user.
//*****************************************************************************
module.run(function ($window, $rootScope) {
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
