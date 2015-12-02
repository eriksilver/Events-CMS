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
