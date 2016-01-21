
describe('AppCtrl hello world controller test', function(){
    var scope; //we'll use this scope in our tests

    //mock Application to allow us to inject our own dependencies
    beforeEach(module('EventCMS'));
    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(inject(function($rootScope, $controller){
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('AppCtrl', {$scope: scope});
    }));
    // tests start here
    it('should have variable text = "Hello World!"', function(){
        expect(scope.text).toBeDefined();
        expect(scope.text).toBe('Hello World!');
    });
});

describe('ListCtrl controller test', function(){
    var scope; //we'll use this scope in our tests
    var listViewCtrl; //define controller to use in tests

    //mock Application to allow us to inject our own dependencies
    beforeEach(module('EventCMS'));
    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(inject(function($rootScope, $controller){
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        listViewCtrl = $controller('ListCtrl', {$scope: scope});
    }));

    // tests start here
    it('should have scope.events be defined', function(){
        //controller exists
        expect(listViewCtrl).not.toBeNull();
        //scope.events is populated
        expect(scope.events).toBeDefined();
    });
});

//Other versions of setting up controller test below

// describe('Hello World example', function() {
//
//      beforeEach(module('EventCMS'));
//
//     var HelloWorldController,
//     scope;
//
//     beforeEach(inject(function ($rootScope, $controller) {
//         scope = $rootScope.$new();
//         HelloWorldController = $controller('HelloWorldController', {
//             $scope: scope
//         });
//     }));
//     it('says hello world!', function () {
//         expect(scope.greeting).toEqual("Hello world!");
//     });
//
// });




// describe("hello world", function () {
//     var appCtrl;
//     beforeEach(module('EventCMS'));
//     beforeEach(inject(function ($controller) {
//         // appCtrl = $controller("AppCtrl", { $scope: $scope });
//         appCtrl = $controller("AppCtrl");
//
//     }))
//
//     describe("controller in app.js", function () {
//         it("should have a message of hello", function () {
//             var $scope = {};
//             // var controller = $controller('AppCtrl', { $scope: $scope });
//             // expect($scope.message).toEqual("Hello");
//             expect(appCtrl.message).toBe("Hello");
//         })
//     })
// })


// describe("hello world", function () {
//     beforeEach(module('EventCMS'));
//
//     var $controller;
//
//     beforeEach(inject(function (_$controller_) {
//         $controller = _$controller_;
//     }));
//
//     describe("controller in App.js", function () {
//         it("should have a message of hello", function () {
//             var $scope = {};
//             var controller = $controller('AppCtrl', { $scope: $scope });
//             expect($scope.message).toEqual("Hello");
//         })
//     })
// })


// describe("hello world", function () {
//
//     beforeEach(module('EventCMS'));
//
//     var $controller;
//
//     beforeEach(inject(function (_$controller_) {
//         $controller = _$controller_;
//     }));
//
//     describe("controller in App.js", function () {
//         it("should have a message of hello", function () {
//             var controller = $controller('AppCtrl');
//             expect(controller.message).toBe("Hello")
//         })
//     })
// })
