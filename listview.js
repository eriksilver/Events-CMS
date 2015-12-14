angular.module('EventCMS')

.controller("ListCtrl", [
    "$scope", "$state", "$log","$firebaseArray", "$stateParams",
    function($scope, $state, $log, $firebaseArray, $stateParams) {
        $log.info("ListCtrl ran");

        //create Firebase events array
        var ref = new Firebase("https://dazzling-torch-1941.firebaseio.com/events");

        // create a synchronized array for events
        $scope.events = $firebaseArray(ref);
        console.log("scope.events",$scope.events);

        $scope.test = "testing testing 123";
        console.log("scope.test",$scope.test);

        $scope.vojta = { name: 'Vojta', address: '3456 Somewhere Else' };
        

}]);
