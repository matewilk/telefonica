//import dependencies
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularMaterial from 'angular-material';
import ngResource from 'angular-resource';
import 'chart.js';
import 'angular-chart.js/dist/angular-chart.js';

//import controllers
//import mainController from '../app/controllers/main';

//import factories
import dataFactory from '../app/factories/data';

//import directives
import {chartDirective} from '../app/directives/chart/chartDirective';

//initialize app
const app = angular.module('app', [uiRouter, angularMaterial, ngResource, 'chart.js',]);

//configure app
app.config(($stateProvider, $urlRouterProvider, $locationProvider, ChartJsProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('main', {
            url: '/',
            template: require('../app/views/main.html')
        });
    $locationProvider.html5Mode(true);
    ChartJsProvider.setOptions({
        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines : true,
        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,
        showTooltips: false
    });
})
//.controller('MainCtrl', mainController)
.factory('DataFactory', dataFactory)
.directive('chart', chartDirective);

export default app;
