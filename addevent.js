angular.module('EventCMS')

.controller("AddCtrl", [
    "$scope", "$state", "$log","$firebaseArray",
    function($scope, $state, $log, $firebaseArray) {

        $log.info("AddCtrl ran");

        //Firebase callback to register sync fail/success
        var onComplete = function(error) {
            if (error) {
                console.log('Synchronization failed');
            } else {
                console.log('Synchronization succeeded');
            }
        };

        //create Firebase events array
        var ref = new Firebase("https://dazzling-torch-1941.firebaseio.com/events");

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
            $log.info("start",start);
            unixStart = start.getTime();
            unixEnd = end.getTime();

            var d = new Date ();
            unixCurrent = d.getTime();
        };

        // setup database schema
        // the event is automatically added to our Firebase database
        $scope.addEvent = function() {
            // var cleandEvent = transform_dates($scope.newEvent);
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

            setup_empty_event_state();
        };

        setup_empty_event_state();

    }]);
