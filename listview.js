angular.module('EventCMS')

.controller("ListCtrl", [
    "$scope", "$state", "$log","$firebaseArray",
    function($scope, $state, $log, $firebaseArray) {

        $log.info("ListCtrl ran");

        //create Firebase events array
        var ref = new Firebase("https://dazzling-torch-1941.firebaseio.com/events");

        // create a synchronized array for events
        $scope.events = $firebaseArray(ref);
        var newChildRef = ref.push();

        $log.info("child key:",newChildRef.key());

        // setup database schema
        // the event is automatically added to our Firebase database
        $scope.addEvent = function() {
            $scope.events.$add({
                eventTitle: " ",
                startDate: " ",
                endDate: " ",
                category: " ",
                description: " ",
                featuredFlag: " ",
                createdAt: Firebase.ServerValue.TIMESTAMP,
                updatedAt: " "
            });
        };

        $scope.getEventId = function () {

        }
    }]);
