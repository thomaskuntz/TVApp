//TODO:
// * Instead of setting timer check if the DOM Changes -- BETTER APPROACH
// * Then use setTimeOut function to give AngularJS the change to finish.

setInterval(function () {
    //*****************************************************************************
    //Budget Card Settings
    //*****************************************************************************
    var budgetCardSettings = {
        angle: 0, // The span of the gauge arc
        lineWidth: 0.2, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.54, // // Relative to gauge radius
            strokeWidth: 0.031, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF',   // Colors
        colorStop: '#8FC0DA',    // just experiment with them
        strokeColor: '#E0E0E0',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support

        staticZones: [
            { strokeStyle: "#F03E3E", min: 0, max: 222222 }, // Red
            { strokeStyle: "#FFA500", min: 222222, max: 444444 }, // Orange
            { strokeStyle: "#FFDD00", min: 444444, max: 666666 }, // Yellow
            { strokeStyle: "#30B32D", min: 666666, max: 888888 }  // Green
        ],

        staticLabels: {
            font: "15px sans-serif",  // Specifies font
            labels: [0, 222222, 444444, 666666, 888888],  // Print labels at these values
            color: "#000000",  // Optional: Label text color
            fractionDigits: 0  // Optional: Numerical precision. 0=round off.
        }
    };

    var current = document.getElementById('minVal').textContent;
    var target = document.getElementById('canvas-preview'); // your canvas element
    var gauge = new Gauge(target).setOptions(budgetCardSettings); // create gauge!

    gauge.maxValue = 888888; // set max gauge value
    gauge.setMinValue(0); /// default set to 0.
    gauge.animationSpeed = 1; // set animation speed (32 is default value)
    gauge.set(parseInt(current)); // set the value
    gauge.setTextField(document.getElementById("preview-textfield"));

    //*****************************************************************************
    //Projects_Closed Card Settings
    //*****************************************************************************
    var opts = {
        angle: 0, // The span of the gauge arc
        lineWidth: 0.2, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.54, // // Relative to gauge radius
            strokeWidth: 0.031, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF',   // Colors
        colorStop: '#8FC0DA',    // just experiment with them
        strokeColor: '#E0E0E0',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support

        staticZones: [
            { strokeStyle: "#F03E3E", min: 0, max: 8 }, // Red
            { strokeStyle: "#FFA500", min: 8, max: 16 }, // Orange
            { strokeStyle: "#FFDD00", min: 16, max: 24 }, // Yellow
            { strokeStyle: "#30B32D", min: 24, max: 32 }  // Green
        ],

        staticLabels: {
            font: "15px sans-serif",  // Specifies font
            labels: [0, 8, 16, 24, 32],  // Print labels at these values
            color: "#000000",  // Optional: Label text color
            fractionDigits: 0  // Optional: Numerical precision. 0=round off.
        }
    };

    var current = document.getElementById('minVal2').textContent;
    var target = document.getElementById('canvas-preview2'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create gauge!
    gauge.maxValue = 32; // set max gauge value
    gauge.animationSpeed = 1; // set animation speed (32 is default value)
    gauge.set(parseInt(current));
    gauge.setTextField(document.getElementById("preview-textfield"));

    //*****************************************************************************
    // EFFICIENCY_Hours Card Settings
    //*****************************************************************************
    var opts = {
        angle: 0, // The span of the gauge arc
        lineWidth: 0.2, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.54, // // Relative to gauge radius
            strokeWidth: 0.031, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF',   // Colors
        colorStop: '#8FC0DA',    // just experiment with them
        strokeColor: '#E0E0E0',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support

        staticZones: [
            { strokeStyle: "#F03E3E", min: 0, max: 520 }, // Red
            { strokeStyle: "#FFA500", min: 520, max: 1040 }, // Orange
            { strokeStyle: "#FFDD00", min: 1040, max: 1560 }, // Yellow
            { strokeStyle: "#30B32D", min: 1560, max: 2080 }  // Green
        ],

        staticLabels: {
            font: "15px sans-serif",  // Specifies font
            labels: [0, 520, 1040, 1560, 2080],  // Print labels at these values
            color: "#000000",  // Optional: Label text color
            fractionDigits: 0  // Optional: Numerical precision. 0=round off.
        }
    };
    var current = document.getElementById('minVal3').textContent;
    var target = document.getElementById('canvas-preview3'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create gauge!
    gauge.maxValue = 2080; // set max gauge value
    gauge.animationSpeed = 1; // set animation speed (32 is default value)
    gauge.set(parseInt(current));
    gauge.setTextField(document.getElementById("preview-textfield"));

    //*****************************************************************************
    //Outage_Hours Settings
    //*****************************************************************************
    var opts = {
        angle: 0, // The span of the gauge arc
        lineWidth: 0.2, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.54, // // Relative to gauge radius
            strokeWidth: 0.031, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF',   // Colors
        colorStop: '#8FC0DA',    // just experiment with them
        strokeColor: '#E0E0E0',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support

        staticZones: [
            { strokeStyle: "#F03E3E", min: 0, max: 7 }, // Red
            { strokeStyle: "#FFA500", min: 7, max: 15 }, // Orange
            { strokeStyle: "#FFDD00", min: 15, max: 22 }, // Yellow
            { strokeStyle: "#30B32D", min: 22, max: 29 }  // Green
        ],

        staticLabels: {
            font: "14px sans-serif",  // Specifies font
            labels: [0, 7, 15, 22, 29],  // Print labels at these values
            color: "#000000",  // Optional: Label text color
            fractionDigits: 0  // Optional: Numerical precision. 0=round off.
        }
    };
    var current = document.getElementById('minVal4').textContent;
    var target = document.getElementById('canvas-preview4'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create gauge!
    gauge.maxValue = 29; // set max gauge value
    gauge.animationSpeed = 1; // set animation speed (32 is default value)
    gauge.set(parseInt(current));
    gauge.setTextField(document.getElementById("preview-textfield"));

    //*****************************************************************************
    //Defect_Reduction Settings
    //*****************************************************************************
    var opts = {
        angle: 0, // The span of the gauge arc
        lineWidth: 0.2, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.54, // // Relative to gauge radius
            strokeWidth: 0.031, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF',   // Colors
        colorStop: '#8FC0DA',    // just experiment with them
        strokeColor: '#E0E0E0',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support

        staticZones: [
            { strokeStyle: "#F03E3E", min: 0, max: 25 }, // Red
            { strokeStyle: "#FFA500", min: 25, max: 50 }, // Orange
            { strokeStyle: "#FFDD00", min: 50, max: 75 }, // Yellow
            { strokeStyle: "#30B32D", min: 75, max: 100 }  // Green
        ],

        staticLabels: {
            font: "14px sans-serif",  // Specifies font
            labels: [0, 25, 50, 75, 100],  // Print labels at these values
            color: "#000000",  // Optional: Label text color
            fractionDigits: 0  // Optional: Numerical precision. 0=round off.
        }
    };

    var current = document.getElementById('minVal5').textContent;
    var target = document.getElementById('canvas-preview5'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create gauge!
    gauge.maxValue = document.getElementById('maxVal5').textContent; // set max gauge value
    gauge.animationSpeed = 1; // set animation speed (32 is default value)
    gauge.set(parseInt(current));
    gauge.setTextField(document.getElementById("preview-textfield"));

    //*****************************************************************************
    //Chicago_Sports_Wins Card Settings
    //*****************************************************************************
    var opts = {
        angle: 0, // The span of the gauge arc
        lineWidth: 0.2, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.54, // // Relative to gauge radius
            strokeWidth: 0.031, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF',   // Colors
        colorStop: '#8FC0DA',    // just experiment with them
        strokeColor: '#E0E0E0',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support

        staticZones: [
            { strokeStyle: "#F03E3E", min: 0, max: 13}, // Red
            { strokeStyle: "#FFA500", min: 13, max: 26}, // Orange
            { strokeStyle: "#FFDD00", min: 26, max: 39 }, // Yellow
            { strokeStyle: "#30B32D", min: 39, max: 52 } // Green
        ],

        staticLabels: {
            font: "14px sans-serif",  // Specifies font
            labels: [0, 13, 26, 39, 52],  // Print labels at these values
            color: "#000000",  // Optional: Label text color
            fractionDigits: 0  // Optional: Numerical precision. 0=round off.
        }
    };
    var current = document.getElementById('minVal6').textContent;
    var target = document.getElementById('canvas-preview6'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create gauge!
    gauge.maxValue = 52; // set max gauge value
    gauge.animationSpeed = 1; // set animation speed (32 is default value)
    gauge.set(parseInt(current));
    gauge.setTextField(document.getElementById("preview-textfield"));
}, 5000);