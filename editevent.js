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

        // Attach an asynchronous callback to read the data at our posts reference
        ref.on("value", function(snapshot) {
            // $log.log("snapshot.val",snapshot.val()); //all events
            var eventSnapshot = snapshot.child(editEventId).val(); //single event to edit
            // $log.info("eventSnapshot",eventSnapshot);

        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });


        // ng-change="events.$save(event)"
    }]);
