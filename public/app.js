// 'use strict';

var myApp = angular.module('EventCMS', [
    'ui.router',
    'firebase'
]);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //     $logProvider.debugEnabled(true);
});

myApp.controller("AppCtrl", ['$scope',
function ($scope) {
    $scope.text = 'Hello World!';
}]);

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
]);
//myEvent directive attached specified behavior/data to a DOM element/tag
//restricted to 'E' - element name only (my-event) - directive is in the listview.html
//isolate scope defined; binds outer scope to directive scope with '@'
//directive pulls template via ajax from specified url
myApp.directive('myEvent', function() {
    return {
        restrict: 'E',
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
