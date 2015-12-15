// 'use strict';

var myApp = angular.module('EventCMS', [
    'ui.router',
    'firebase',
]);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //     $logProvider.debugEnabled(true);
});

myApp.factory("alertsManager", ["$log",
    function($log) {
        //create array of alerts, referenced by alertsManager.alerts
        var alerts = [];

        function add_alert(alert) {
            alerts.push(alert);
        }

        function remove_alert(index) {
            alerts.splice(index, 1);
        }
        return {
                alerts: alerts,
                add: add_alert,
                remove: remove_alert,
        };
    }
])

myApp.controller('Controller', ['$scope', function($scope) {
  $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
  $scope.vojta = { name: 'Vojta', address: '3456 Somewhere Else' };
}]);

myApp.directive('myCustomer', function() {
  return {
    restrict: 'E',
    scope: {
      customerInfo: '=info'
    },
    templateUrl: 'my-customer-plus-vojta.html'
  };
});

myApp.directive('myEvent', function() {
  return {
    restrict: 'EA',
    //transclude: true, //only want content of our directive in the template
    scope: {
      description: '@'
    },
    templateUrl: 'eventdetails.html'
  };
});
