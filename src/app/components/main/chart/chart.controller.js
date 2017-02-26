
'use strict';
const FusionCharts = require("fusioncharts");
require("fusioncharts/fusioncharts.charts")(FusionCharts);

function chartController($scope,testService,$http) {

  'ngInject';

  var vm = this;

  testService.getChart().then((data)=>{
    console.log("charts",data);

  });
  $scope.myDate = new Date();
   $scope.minDate = new Date(
     $scope.myDate.getFullYear(),
     $scope.myDate.getMonth() - 2,
     $scope.myDate.getDate());
   $scope.maxDate = new Date(
     $scope.myDate.getFullYear(),
     $scope.myDate.getMonth() + 2,
     $scope.myDate.getDate());

  // $http.get('chart.json').success(function(data) {
  //       console.log("chartinfo",data);
  //      });

    FusionCharts.ready(function() {
        var revenueChart = new FusionCharts({
            type: 'column2d',
            renderAt: 'chart-container',
            width: '550',
            height: '350',
            dataFormat: 'json',
            //sto data
            dataSource: {
                "chart": {
                    "caption": "Monthly revenue for last year",
                    "subCaption": "Harry's SuperMart",
                    "xAxisName": "Month",
                    "yAxisName": "Revenues (In USD)",
                    "numberPrefix": "$",
                    "paletteColors": "#0075c2",
                    "bgColor": "#ffffff",
                    "borderAlpha": "20",
                    "canvasBorderAlpha": "0",
                    "usePlotGradientColor": "0",
                    "plotBorderAlpha": "10",
                    "placevaluesInside": "1",
                    "rotatevalues": "1",
                    "valueFontColor": "#ffffff",
                    "showXAxisLine": "1",
                    "xAxisLineColor": "#999999",
                    "divlineColor": "#999999",
                    "divLineIsDashed": "1",
                    "showAlternateHGridColor": "0",
                    "subcaptionFontBold": "0",
                    "subcaptionFontSize": "14"
                },
                "data": [{
                        "label": "Jan",
                        "value": "420000"
                    },
                    {
                        "label": "Feb",
                        "value": "810000"
                    },
                    {
                        "label": "Mar",
                        "value": "720000"
                    },
                    {
                        "label": "Apr",
                        "value": "550000"
                    },
                    {
                        "label": "May",
                        "value": "910000"
                    },
                    {
                        "label": "Jun",
                        "value": "510000"
                    },
                    {
                        "label": "Jul",
                        "value": "680000"
                    },
                    {
                        "label": "Aug",
                        "value": "620000"
                    },
                    {
                        "label": "Sep",
                        "value": "610000"
                    },
                    {
                        "label": "Oct",
                        "value": "490000"
                    },
                    {
                        "label": "Nov",
                        "value": "900000"
                    },
                    {
                        "label": "Dec",
                        "value": "730000"
                    }
                ],
                "trendlines": [{
                    "line": [{
                        "startvalue": "700000",
                        "color": "#1aaf5d",
                        "valueOnRight": "1",
                        "displayvalue": "Monthly Target"
                    }]
                }]
            }
            //eno data
        }).render();
    });
    console.log("charts");


}

export default chartController;
