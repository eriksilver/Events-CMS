angular.module('EventCMS')

.controller("AddCtrl", [
    "$scope", "$state", "$log","$firebaseArray", "alertsManager", "$rootScope",
    function($scope, $state, $log, $firebaseArray, alertsManager, $rootScope) {

        $log.info("AddCtrl ran");

        //Firebase callback to register sync fail/success
        var onComplete = function(error) {
            if (error) {
                $rootScope.$broadcast('saveEvent', {message: "Event Creation Failed", result: "failure"});
                $log.log('Synchronization failed');
            } else {
                $rootScope.$broadcast('saveEvent', {message: "Event Created!", result: "success"});
                $log.log('Synchronization succeeded');
            }
        };

        //create Firebase events array
        var ref = new Firebase("https://dazzling-torch-1941.firebaseio.com/events");

        //define empty event/ database schema
        var EMPTY_EVENT = {
            eventTitle: " ",
            startDate: new Date(),
            endDate: new Date(),
            category: " ",
            description: " ",
            featuredFlag: " ",
            createdAt:  " ",
            updatedAt: " "
        };

        function setup_empty_event_state() {
            $scope.newEvent = angular.copy(EMPTY_EVENT);
        };

        var unixStart = " ";
        var unixEnd = " ";
        var unixCurrent = " ";

        function transform_dates(start,end) {
            //convert data picker dates to integer format that is acceptable to Firebase
            unixStart = start.getTime();
            unixEnd = end.getTime();
            //capture current date in unix/integer format
            var d = new Date ();
            unixCurrent = d.getTime();
        };

        //addEvent function will add a newEvent based on database schema
        $scope.addEvent = function() {
            transform_dates($scope.newEvent.startDate,$scope.newEvent.endDate);

            $scope.newEvent = {
                eventTitle: $scope.newEvent.eventTitle,
                startDate: unixStart,
                endDate: unixEnd,
                category: $scope.newEvent.category,
                description: $scope.newEvent.description,
                featuredFlag: $scope.newEvent.featuredFlag,
                createdAt:  unixCurrent,
                updatedAt: " "
            };

            //Firebase push method to save newEvent data to array
            ref.push($scope.newEvent,onComplete);

            //call setup empty state to reset the entry form after new event is added
            setup_empty_event_state();
        };

        //call setup empty state to reset the entry form
        setup_empty_event_state();

        //setup alerts in controller scope
        $scope.alerts = alertsManager.alerts;

        //use $on method to receive Broadcast of Alert message
        //add the Broadcast message (message, result) to alertsManager
        $scope.$on('saveEvent', function(event,args) {
            alertsManager.add({
                message: args.message,
                type: args.result,
                // timeout: 6000,
            });
            $scope.$apply();
        });

        //close alert when icon is clicked by removing array item
        $scope.closeAlert = function (index) {
            alertsManager.remove(index);
        };

    }]);
