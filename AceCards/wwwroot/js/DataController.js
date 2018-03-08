var module = angular.module('appRoute', ['firebase'])
    .controller('DataController', ['$scope', '$firebaseObject', '$timeout', function ($scope, $firebaseObject, $timeout) {
        //*****************************************************************************
        // Initialize Firebase to connect the database.
        //*****************************************************************************
        var config = {
            apiKey: "AIzaSyD8PIZw0APhS_V4GWcvkudLoLki1wMBPY8",
            authDomain: "development-cb392.firebaseapp.com",
            databaseURL: "https://development-cb392.firebaseio.com",
            projectId: "development-cb392",
            storageBucket: "development-cb392.appspot.com",
            messagingSenderId: "1085066223528"
        };

        firebase.initializeApp(config);

        var data = firebase.database().ref().child('Goals');
        var syncObject = $firebaseObject(data);
        syncObject.$bindTo($scope, "Data");

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
            highDpiSupport: true     // High resolution support
        };

        //*****************************************************************************
        // Give AngularFire time to get the data and then set the gauges in each card.
        // Additionally, watch for new changes in the database and set the gauge again.
        //*****************************************************************************

        $timeout(function () {

            //Begin Firebase Goal_1 
            var canvasBudget = document.getElementById('Canvas-Budget');
            var gauge = new Gauge(canvasBudget).setOptions($scope.gaugeOptions);
            gauge.maxValue = $scope.Data.Goal_1.Current_Goal;
            gauge.animationSpeed = 128; // set animation speed (32 is default value)
            gauge.set($scope.Data.Goal_1.Current_Goal);

            $scope.$watchCollection('[Data.Goal_1.Current_Value, Data.Goal_1.Current_Gaol]', function () {

                gauge.maxValue = $scope.Data.Goal_1.Current_Goal;

                if ($scope.Data.Goal_1.Current_Value > $scope.Data.Goal_1.Current_Goal) {
                    gauge.set($scope.Data.Goal_1.Current_Goal);
                }
                else {
                    gauge.set($scope.Data.Goal_1.Current_Value);
                }
            });
            //End Goal_1

            //Begin Firebase Goal_3
            var canvasProjects = document.getElementById('Canvas-Projects');
            var gaugeProjects = new Gauge(canvasProjects).setOptions($scope.gaugeOptions);
            gaugeProjects.maxValue = $scope.Data.Goal_3.Current_Goal;
            gaugeProjects.animationSpeed = 128; // set animation speed (32 is default value)
            gaugeProjects.set($scope.Data.Goal_3.Current_Value);

            $scope.$watchCollection('[Data.Goal_3.Current_Value, Data.Goal_3.Current_Goal]', function () {

                gaugeProjects.maxValue = $scope.Data.Goal_3.Current_Goal;

                if ($scope.Data.Goal_3.Current_Value > $scope.Data.Goal_3.Current_Goal) {
                    gaugeProjects.set($scope.Data.Goal_3.Current_Goal);
                }
                else {
                    gaugeProjects.set($scope.Data.Goal_3.Current_Value);
                }
            });
            //End Goal_3

            //Begin Firebase Goal_4
            var canvasefficiency = document.getElementById('Canvas-Efficiency');
            var gaugeefficiency = new Gauge(canvasefficiency).setOptions($scope.gaugeOptions);
            gaugeefficiency.maxValue = $scope.Data.Goal_4.Current_Goal;
            gaugeefficiency.animationSpeed = 128; // set animation speed (32 is default value)
            gaugeefficiency.set($scope.Data.Goal_4.Current_Value);

            $scope.$watchCollection('[Data.Goal_4.Current_Value, Data.Goal_4.Current_Goal]', function () {

                gaugeefficiency.maxValue = $scope.Data.Goal_4.Current_Goal;

                if ($scope.Data.Goal_4.Current_Value > $scope.Data.Goal_4.Current_Goal) {
                    gaugeefficiency.set($scope.Data.Goal_4.Current_Goal);
                }
                else {
                    gaugeefficiency.set($scope.Data.Goal_4.Current_Value);
                }
            });
            //End Goal_4

            //Begin Firebase Goal_5
            var canvasOutage = document.getElementById('Canvas-Outage');
            var gaugeOutage = new Gauge(canvasOutage).setOptions($scope.gaugeOptions);
            gaugeOutage.maxValue = $scope.Data.Goal_5.Current_Goal;
            gaugeOutage.animationSpeed = 128; // set animation speed (32 is default value)
            gaugeOutage.set($scope.Data.Goal_5.Current_Value);

            $scope.$watchCollection('[Data.Goal_5.Current_Value, Data.Goal_5.Current_Goal]', function () {

                gaugeOutage.maxValue = $scope.Data.Goal_5.Current_Goal;

                if ($scope.Data.Goal_5.Current_Value > $scope.Data.Goal_5.Current_Goal) {
                    gaugeOutage.set($scope.data.Outage_Status.Goal);
                }
                else {
                    gaugeOutage.set($scope.Data.Goal_5.Current_Value);
                }
            });
            //End Goal_5

            //Begin Firebase Goal_2
            var canvasDefect = document.getElementById('Canvas-Defect');
            var gaugeDefect = new Gauge(canvasDefect).setOptions($scope.gaugeOptions);
            gaugeDefect.maxValue = $scope.Data.Goal_2.Current_Goal;
            gaugeDefect.animationSpeed = 128; // set animation speed (32 is default value)
            gaugeDefect.set($scope.Data.Goal_2.Current_Value);

            $scope.$watchCollection('[Data.Goal_2.Current_Value, Data.Goal_2.Current_Goal]', function () {

                gaugeDefect.maxValue = $scope.Data.Goal_2.Current_Goal;

                if ($scope.Data.Goal_2.Current_Value > $scope.Data.Goal_2.Current_Goal) {
                    gaugeDefect.set($scope.Data.Goal_2.Current_Goal);
                }
                else {
                    gaugeDefect.set($scope.Data.Goal_2.Current_Value);
                }
            });
            //End Goal_2

            //Begin Firebase Goal_6
            var canvasChicagoSports = document.getElementById('Canvas-ChicagoSports');
            var gaugeChicagoSports = new Gauge(canvasChicagoSports).setOptions($scope.gaugeOptions);
            gaugeChicagoSports.maxValue = $scope.Data.Goal_6.Current_Goal;
            gaugeChicagoSports.animationSpeed = 128; // set animation speed (32 is default value)
            gaugeChicagoSports.set($scope.Data.Goal_6.Current_Value);

            $scope.$watchCollection('[Data.Goal_6.Current_Value, Data.Goal_6.Current_Goal]', function () {

                gaugeChicagoSports.maxValue = $scope.Data.Goal_6.Current_Goal;

                if ($scope.Data.Goal_6.Current_Value > $scope.Data.Goal_6.Current_Goal) {
                    gaugeChicagoSports.set($scope.Data.Goal_6.Current_Goal);
                }
                else {
                    gaugeChicagoSports.set($scope.Data.Goal_6.Current_Value);
                }
            });
            //End Goal_6
        }, 3000);
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
