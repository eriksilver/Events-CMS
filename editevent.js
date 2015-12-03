angular.module('EventCMS')

.controller("EditCtrl", [
    "$scope", "$state", "$log","$firebaseArray", "alertsManager", "$rootScope", "$stateParams",
    function($scope, $state, $log, $firebaseArray, alertsManager, $rootScope, $stateParams)  {

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
                $log.log('Synchronization succeeded');
            }
        };

        //create Firebase events array
        var ref = new Firebase("https://dazzling-torch-1941.firebaseio.com/events");

        $scope.event = {};
        var eventSnapshot = {};
        var isoStart = {};
        var isoEnd = {};
        var unixUpdatedDate = "";

        function transform_dates(start,end) {
            $log.log("start",start);
            $log.log("end",end);

            //Dates in Firebase are unix/integer format
            //Convert to "Zulu time"/ISO (UTC) for date picker
            var isoStart = new Date(start).toISOString();
            $log.info("isoStart",isoStart);
            var isoEnd = new Date(end).toISOString();
            $log.info("isoEnd",isoEnd);


            eventSnapshot.startDate = isoStart;
            eventSnapshot.endDate = isoEnd;

            //capture current date for updatedAt in unix/integer format
            var d = new Date ();
            unixUpdatedDate = d.getTime();
        };

        // Attach an asynchronous callback to read the data at our posts reference
        ref.on("value", function(snapshot) {
            // $log.log("snapshot.val",snapshot.val()); //all events
            eventSnapshot = snapshot.child(editEventId).val(); //single event to edit
            $log.info("eventSnapshot",eventSnapshot);
            $log.info("eventSnapshot - start date",eventSnapshot.startDate);

            //call transform dates function
            transform_dates (eventSnapshot.startDate,eventSnapshot.endDate);

        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });

        $scope.event = eventSnapshot;
        $log.info("$scope.event",$scope.event);


        // ng-change="events.$save(event)"
    }]);
