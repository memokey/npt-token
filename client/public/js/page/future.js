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
    chartLoad(localStorage.getItem('theme'));
    const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); //add this
        chartLoad(theme)
    };

    var toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    var toggleHcSwitch = document.querySelector('.theme-high-contrast input[type="checkbox"]');

    toggleSwitch.addEventListener('change', switchTheme, false);
    toggleHcSwitch.addEventListener('change', switchTheme, false);

    function switchTheme(e) {
        setTheme(e.target.checked ? 'dark' : 'light');
    }
    function chartLoad(chartTheme) {
        //chart
        new TradingView.widget(
            {
                "autosize": true,
                "symbol": "SOL",
                "interval": "D",
                "timezone": "Etc/UTC",
                "theme": chartTheme,
                "style": "1",
                "locale": "in",
                "toolbar_bg": "#f1f3f6",
                "enable_publishing": false,
                "allow_symbol_change": true,
                "container_id": "tradingview_85dc0"
            }
        );
    }
    // project data table
    $(document).ready(function() {
        $('#priceTableup')
        .addClass( 'nowrap' )
        .dataTable( {
            responsive: true,
            columnDefs: [
                { targets: [-1, -3], className: 'dt-body-right' }
            ]
        });
  
        $('#ordertabone')
        .addClass( 'nowrap' )
        .dataTable( {
            responsive: true,
            columnDefs: [
                { targets: [-1, -3], className: 'dt-body-right' }
            ]
        });

        $('#ordertabtwo')
        .addClass( 'nowrap' )
        .dataTable( {
            responsive: true,
            columnDefs: [
                { targets: [-1, -3], className: 'dt-body-right' }
            ]
        });

        $('#ordertabthree')
        .addClass( 'nowrap' )
        .dataTable( {
            responsive: true,
            columnDefs: [
                { targets: [-1, -3], className: 'dt-body-right' }
            ]
        });

        $('#priceTableup','#ordertabone','#ordertabtwo','#ordertabthree',).DataTable({
            responsive: true
        });

        $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
            $($.fn.dataTable.tables(true)).DataTable()
            .columns.adjust()
            .responsive.recalc();
        });   
        
    });

});


