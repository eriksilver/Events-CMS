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

myApp.directive('myEvent', function() {
  return {
    restrict: 'EA',
    //transclude: true, //only want content of our directive in the template
    scope: {
      description: '@',
      featured: '@',
      start: '@',
      end: '@',
      category: '@',
      created: '@',
      updated: '@'
    },
    templateUrl: 'eventdetails.html'
  };
});
