'use strict';

/* Controllers */

var app = angular.module('mcmakler',[]).config(function ($httpProvider) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });

app.config(function ($httpProvider) {
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
});

app.controller('DataCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.items1 = [];

    $scope.init = function() {        
        var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            };
        var url = "http://localhost:8080/api";
        // Stuck Here
        $http.get(url, config)
        .success(function (res, status, headers, config) {
            var data = res["data"].slice(0,9);
            $scope.items = data;
        })
        .error(function (data, status, header, config) {
            $scope.counter = "response.data";
            console.log("error - ", data, status);
        });
    };    
}]);
