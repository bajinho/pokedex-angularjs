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
        .service('apiService', ['$http', 'api', function ($http, api) {
                return {
                    get: function (url) {
                        return $http.get(api.baseUrl + url, {
                            headers: {
                                "Authorization": 'Bearer <my-token>'
                            }
                        }).then(function (response) {
                            return response.data;
                        });
                    },
                    post: function (url) {
                        return $http.post(api.baseUrl + url, {
                            headers: {
                                "Authorization": 'Bearer <my-token>'
                            }
                        }).then(function (response) {
                            return response.data;
                        });
                    }
                };
            }]);
