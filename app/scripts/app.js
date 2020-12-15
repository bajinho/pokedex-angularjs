/* global angular */

'use strict';

/**
 * @ngdoc overview
 * @name appPokedex
 * @description
 * # appExemploApp
 *
 * Main module of the application.
 */
angular
        .module('appPokedex', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            'ngMaterial',
            'ngMessages'
        ])
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl',
                        controllerAs: 'main'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
        });
