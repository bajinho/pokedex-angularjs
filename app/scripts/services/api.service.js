/* global angular */

'use strict';

/**
 * @ngdoc function
 * @name appPokedex.service:apiService
 * @description
 * # apiService
 * Service of the appPokedex
 */

angular
    .module('appPokedex')
    .service('apiService', function($http) {
        var WSURL = 'https://pokeapi.co/api/v2/';

        return {
            get: function(url) {
                return $http.get(WSURL + url, {
                    headers: {
                        "Authorization": 'Bearer <my-token>'
                    }
                }).then(function(response) {
                    return response.data;
                });
            }
        };
    });
