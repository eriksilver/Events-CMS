angular.module('EventCMS')

.controller("AddCtrl", [
    "$scope", "$state", "$log","$firebaseArray",
    function($scope, $state, $log, $firebaseArray) {

        $log.info("AddCtrl ran");



        //create Firebase events array
        var ref = new Firebase("https://dazzling-torch-1941.firebaseio.com/events");


        // create a synchronized array for events
        $scope.events = $firebaseArray(ref);

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
            // var test = $scope.newEvent;
            // $log.info("test=$scope.newEvent",test);

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


            $scope.events.$add($scope.newEvent);

            //use push or set method instead of $add to get access to callback??

            // console.log('oncomplete:',onComplete);




            setup_empty_event_state();
        };
        // $scope.events.$watch(function(event) {
        //     console.log("event:",event);
        // });

        setup_empty_event_state();

    }]);
