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
    // SIMPLE DONUT
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
          series: [44, 55, 41, 17],
          labels: ['BTC', 'BNB', 'USDT', 'OTHER'], 
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

    //p2p
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
          colors: ['var(--chart-color5)', 'var(--chart-color4)', 'var(--chart-color3)'],
          series: [44, 55, 41],
          labels: ['Buy', 'Sell', 'Transfer'],
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
          document.querySelector("#apex-simple-donutp2p"),
          options
      );
      
      chart.render();
    });

    // margin
    $(document).ready(function() {
      var options = {
          chart: {
              height: 280,
              type: 'radialBar',
          },
          colors: ['#0ecb81', '#ffe28c', '#f6465d'],
          plotOptions: {
              radialBar: {
                  dataLabels: {
                      name: {
                          fontSize: '22px',
                      },
                      value: {
                          fontSize: '15px',
                      },
                      total: {
                          show: true,
                          label: 'Risk',
                          formatter: function (w) {
                              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                              return 55 + "%";
                          }
                      }
                  }
              }
          },
          series: [44, 55, 67],
          labels: ['Low Risk', 'Moderate Risk', 'High Risk'],        
      }
      var chart = new ApexCharts(
          document.querySelector("#apex-circle-chart-multiplemargin"),
          options
      );    
      chart.render();
    });

    // Future
    $(document).ready(function() {
      var options = {
          chart: {
              height: 300,
              type: 'radialBar',
              toolbar: {
                  show: false
              }
          },
          colors: ['var(--chart-color1)'],
          plotOptions: {
              radialBar: {
                  startAngle: -135,
                  endAngle: 225,
                      hollow: {
                      margin: 0,
                      size: '70%',
                      background: '#fff',
                      image: undefined,
                      imageOffsetX: 0,
                      imageOffsetY: 0,
                      position: 'front',

                      dropShadow: {
                          enabled: true,
                          top: 3,
                          left: 0,
                          blur: 4,
                          opacity: 0.24
                      }
                  },
                  track: {
                      background: '#fff',
                      strokeWidth: '67%',
                      margin: 0, // margin is in pixels
                      dropShadow: {
                          enabled: true,
                          top: -3,
                          left: 0,
                          blur: 4,
                          opacity: 0.35
                      }
                  },

                  dataLabels: {
                      showOn: 'always',
                      name: {
                          offsetY: -10,
                          show: true,
                          color: '#888',
                          fontSize: '17px'
                      },
                      value: {
                          formatter: function(val) {
                              return parseInt(val);
                          },
                          color: '#111',
                          fontSize: '36px',
                          show: true,
                      }
                  }
              }
          },
          fill: {
              type: 'gradient',
              gradient: {
                  shade: 'dark',
                  type: 'horizontal',
                  shadeIntensity: 0.5,
                  gradientToColors: ['var(--chart-color2)'],
                  inverseColors: true,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 100]
              }
          },
          series: [75],
          stroke: {
              lineCap: 'round'
          },
          labels: ['Percent'],
      }

      var chart = new ApexCharts(
          document.querySelector("#apex-circle-gradientfuture"),
          options
      );

      chart.render();    
    });

    // Earn
    $(document).ready(function() {
      var options = {
          chart: {
              height: 280,
              type: 'radialBar',
          },
          colors: ['var(--chart-color1)'],
          plotOptions: {
              radialBar: {
                  hollow: {
                      size: '70%',
                  }
              },
          },
          series: [70],
          labels: ['Earn'],
      }
      var chart = new ApexCharts(
          document.querySelector("#apex-circle-chartearn"),
          options
      );
  
      chart.render();
    });

});


// project data table
$(document).ready(function() {
    $('#ordertabthree')
    .addClass( 'nowrap' )
    .dataTable( {
        responsive: true,
        columnDefs: [
            { targets: [-1, -3], className: 'dt-body-right' }
        ]
    });
});