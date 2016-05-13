import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularMaterial from 'angular-material';
import ngResource from 'angular-resource';
import 'chart.js';
import 'angular-chart.js/dist/angular-chart.js';

import mainController from '../controllers/main';

const app = angular.module('app', [uiRouter, angularMaterial, ngResource, 'chart.js',]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider, ChartJsProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('main', {
            url: '/',
            template: require('../views/main.html')
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
.factory('DataFactory', function ($resource) {
    return $resource('http://localhost:80', {}, {
        query: { method: 'GET', params: {}, headers: {'Access-Control-Allow-Origin': '*'}}
    });
})
.controller('MainCtrl', mainController);

export default app;
