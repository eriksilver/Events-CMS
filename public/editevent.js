angular.module('EventCMS')

.controller("EditCtrl", [
    "$scope", "$state", "$log", "$timeout", "$firebaseArray", "alertsManager", "$rootScope", "$stateParams",
    function($scope, $state, $log, $timeout, $firebaseArray, alertsManager, $rootScope, $stateParams)  {

        $log.info("EditCtrl ran");

        //save the ID of the event to edit that was passed from the list view
        var editEventId = $stateParams.passId;
        $log.info("stateparms", editEventId);

        //Firebase callback to register sync fail/success
        var onComplete = function(error) {
            if (error) {
                $rootScope.$broadcast('saveEvent', {message: "Event Update Failed", result: "failure"});
                $log.log('Synchronization failed');
            } else {
                $rootScope.$broadcast('saveEvent', {message: "Event Updated", result: "success"});
                $log.log('Synchronization succeeded-2');
            }
        };

        //get reference to Firebase events array
        var ref = new Firebase("https://dazzling-torch-1941.firebaseio.com/events");

        //scope event variable to sync with inputs in the view
        $scope.event = {};

        //declare global variable for Updated date
        var unixUpdatedDate = "";

        function transform_to_date_object(start,end) {

            //Dates in Firebase are unix/integer format
            //Convert to date object for date
            eventSnapshot.startDate = new Date(start);
            eventSnapshot.endDate = new Date(end);

            //capture current date for updatedAt in unix/integer format
            var d = new Date ();
            unixUpdatedDate = d.getTime();
        };

        //declare variable to store retrieved event data
        var eventSnapshot = {};

        //retrieve data as object for specific event with Firebase "on" method
        ref.on("value", function(snapshot) {
            eventSnapshot = snapshot.child(editEventId).val(); //single event to edit
            //call transform dates function to convert from unix to date objects
            transform_to_date_object (eventSnapshot.startDate,eventSnapshot.endDate);

        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        //sync retrieved event data to the view
        $scope.event = eventSnapshot;

        //declar variables for date conversion
        var unixStart = " ";
        var unixEnd = " ";
        var unixCurrent = " ";

        function transform_dates_to_unix(start,end) {
            //Date picker dates are in "Zulu time" (UTC)
            //convert to unix/integer format that is acceptable to Firebase
            unixStart = start.getTime();
            // debugger
            unixEnd = end.getTime();
            //capture current date in unix/integer format
            var d = new Date ();
            unixCurrent = d.getTime();
        };

        //editevent function saves edited data to the event in Firebase
        $scope.editEvent = function() {
            //transform dates from date picker to unix
            transform_dates_to_unix($scope.event.startDate,$scope.event.endDate);
            //pull data from view into updatedEvent object
            var updatedEvent = {
                eventTitle: $scope.event.eventTitle,
                startDate: unixStart,
                endDate: unixEnd,
                category: $scope.event.category,
                description: $scope.event.description,
                featuredFlag: $scope.event.featuredFlag,
                // createdAt:  don't need to update this property
                updatedAt: unixCurrent,
            };

            //use firebase 'update' method to save event data
            //onComplete is a callback with Firebase success/error message on data write
            ref.child(editEventId).update(updatedEvent,onComplete);
        };

        //setup alerts in controller scope
        $scope.alerts = alertsManager.alerts;

        //use Broadcast $on method to receive Broadcast of Alert message
        //add the Broadcast message (message, result) to alertsManager
        $scope.$on('saveEvent', function(event,args) {
            alertsManager.add({
                message: args.message,
                type: args.result,
            });
            //use Angular $timeout to call closeAlert function after X milliseconds
            $timeout(function () {$scope.closeAlert();},3000);
            $scope.$apply();
        });

        //close alert when icon is clicked by removing array item
        $scope.closeAlert = function (index) {
            alertsManager.remove(index);
        };

    }]);
