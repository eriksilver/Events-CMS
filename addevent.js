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
            startDate: " ",
            endDate: " ",
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
            transform_dates($scope.startDate,$scope.endDate);

            var title = $scope.eventTitle;
            var flag = $scope.featuredFlag;
            var start = unixStart;
            var end = unixEnd;
            var category = $scope.category;
            var description = $scope.description;
            var created = unixCurrent;
            var updated = ' ';
            $log.info("check variables",title,flag,start,end,category,description,created, updated);
            debugger
            // $scope.events.$add($scope.event);
            setup_empty_event_state();
        };

        setup_empty_event_state();

}]);
