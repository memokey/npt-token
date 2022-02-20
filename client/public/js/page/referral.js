/*
* Admin Layout (cryptoon)
* @author: Pixelwibes
* @design by: Pixelwibes.
* @event-namespace:cryptoon
* Copyright 2021 Pixelwibes
*/

if (typeof jQuery === "undefined") {
    throw new Error("jQuery plugins need to be before this file");
}
$(function() {
    "use strict";
    $(document).ready(function() {
        var options = {
            chart: {
                height: 250,
                type: 'donut',
            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                position: 'right',
                horizontalAlign: 'center',
                show: true,
            },
            colors: ['var(--chart-color1)', 'var(--chart-color2)', 'var(--chart-color3)', 'var(--chart-color4)'],
            series: [30, 43, 124, 112],
            labels: ['BALANCE', 'BONUS', 'FRIENDS', 'TRADING'], 
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }

        var chart = new ApexCharts(
            document.querySelector("#apex-simple-donut"),
            options
        );
        
        chart.render();
    });

});


