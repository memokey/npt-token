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
    // top sparklines
    $(document).ready(function() {
        
        var randomizeArray = function (arg) {
            var array = arg.slice();
            var currentIndex = array.length,
            temporaryValue, randomIndex;
    
            while (0 !== currentIndex) {  
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
        
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }  
            return array;
        }
    
        // data for the sparklines that appear below header area
        var sparklineData = [47, 45, 54, 38, 56, 47, 45, 54, 38, 56, 38, 56, 24, 65, 31];
    
        // topb big chart    
        var spark1 = {
            chart: {
                type: 'area',
               
                height: 30,
                sparkline: {
                enabled: true
                },
            },
            stroke: {
                width: 1
            },
            series: [{
                data: randomizeArray(sparklineData)
            }],
            colors: ['#f8921a'],
        }
        var spark1 = new ApexCharts(document.querySelector("#apexspark1"), spark1); spark1.render();
        
        var spark2 = {
            chart: {
                type: 'area',
               
                height: 30,
                sparkline: {
                enabled: true
                },
            },
            stroke: {
                width: 1
            },
            series: [{
                data: randomizeArray(sparklineData)
            }],
            colors: ['#0077af'],
        }
        var spark2 = new ApexCharts(document.querySelector("#apexspark2"), spark2); spark2.render();
        
        var spark3 = {
            chart: {
                type: 'area',
               
                height: 30,
                sparkline: {
                enabled: true
                },
            },
            stroke: {
                width: 1
            },
            colors: ['#6fb92c'],
            series: [{
                data: randomizeArray(sparklineData)
            }],
        }
        var spark3 = new ApexCharts(document.querySelector("#apexspark3"), spark3); spark3.render();

        var spark4 = {
            chart: {
                type: 'area',
                height: 30,
                sparkline: {
                enabled: true
                },
            },
            stroke: {
                width: 1
            },
            colors: ['#141414'],
            series: [{
                data: randomizeArray(sparklineData)
            }],
        }
        var spark4 = new ApexCharts(document.querySelector("#apexspark4"), spark4); spark4.render();
    
    });

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


