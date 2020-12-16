/* global angular */

'use strict';

/**
 * @ngdoc function
 * @name appPokedex.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appPokedex
 */

angular
        .module('appPokedex')
        .controller('MainCtrl', ['$timeout', '$rootScope', '$scope', '$q', "$log", 'apiService',
            function MainCtrl($timeout, $rootScope, $scope, $q, $log, apiService) {
                var self = this;
                $rootScope.pokemon = '';
                $scope.display = false;

                self.simulateQuery = false;
                self.isDisabled = false;

                // list of `state` value/display objects
                self.states = '';


                function newState(state) {
                    alert("Sorry! You'll need to create a Constitution for " + state + " first!");
                }

                // ******************************
                // Internal methods
                // ******************************

                /**
                 * Search for states... use $timeout to simulate
                 * remote dataservice call.
                 */
                function querySearch(query) {
                    var results = query ? self.states.filter(createFilterFor(query)) : self.states,
                            deferred;
                    if (self.simulateQuery) {
                        deferred = $q.defer();
                        $timeout(function () {
                            deferred.resolve(results);
                        }, Math.random() * 1000, false);
                        return deferred.promise;
                    } else {
                        return results;
                    }
                }

                function searchTextChange(text) {
                    $scope.display = false;
                    $log.info('Text changed to ' + text);
                }

                function selectedItemChange(item) {
                    if (item) {
                        $rootScope.pokemon = item.display;
                        $scope.display = true;
                    }
                    $log.info('Item changed to ' + JSON.stringify(item));
                }

                /**
                 * Build `states` list of key/value pairs
                 */
                function loadAll() {

                    apiService
                            .get("pokemon?limit=2000&offset=0")
                            .then(function (data) {

                                self.states = data.results.map(function (state) {
                                    return {
                                        value: state.name.toLowerCase(),
                                        display: state.name
                                    };
                                });
                            });
                }


                /**
                 * Create filter function for a query string
                 */
                function createFilterFor(query) {
                    var lowercaseQuery = query.toLowerCase();

                    return function filterFn(state) {
                        return (state.value.indexOf(lowercaseQuery) === 0);
                    };

                }

                loadAll();
                self.querySearch = querySearch;
                self.selectedItemChange = selectedItemChange;
                self.searchTextChange = searchTextChange;

                self.newState = newState;
            }
        ]);
