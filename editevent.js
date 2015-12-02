angular.module('EventCMS')

.controller("EditCtrl", [
    "$scope", "$state", "$log","$firebaseArray", "alertsManager", "$rootScope",
    function($scope, $state, $log, $firebaseArray, alertsManager, $rootScope) {

        $log.info("EditCtrl ran");

        //Firebase callback to register sync fail/success
        var onComplete = function(error) {
            if (error) {
                $rootScope.$broadcast('saveEvent', {message: "Event Update Failed", result: "failure"});
                $log.log('Synchronization failed');
            } else {
                $rootScope.$broadcast('saveEvent', {message: "Event Updated", result: "success"});
                $log.log('Synchronization succeeded');
            }
        };

        //create Firebase events array
        var ref = new Firebase("https://dazzling-torch-1941.firebaseio.com/events");

    }]);
