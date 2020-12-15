/* global angular */

'use strict';

/**
 * @ngdoc function
 * @name appPokedex.component:pokemonCard
 * @description
 * # pokemonCard
 * Component of the appPokedex
 */

angular
    .module('appPokedex')
    .component('pokemonCard', {
        templateUrl: 'scripts/components/pokemon-card/pokemon-card.template.html',
        controller: ['$scope', 'apiService',
            function pokemonCardController($scope, apiService) {
                apiService
                    .get('pokemon/' + $scope.$root.pokemon)
                    .then(function(data) {

                        Object.keys(data).map(function(key) {
                            $scope[key] = data[key];
                            return data[key];
                        });

                        console.log($scope);
                    });

            }
        ]
    });
