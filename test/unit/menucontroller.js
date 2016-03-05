describe('Controller: MenuController', function () {

  var mockDishes;

  // load the controller's module
  beforeEach(module('conFusion.controllers'));
  beforeEach(module('conFusion.services'));

  beforeEach(module(function($provide) {

    mockDishes = {};
    $provide.value('dishes', mockDishes);
    $provide.value('$ionicListDelegate', {});
    $provide.value('$ionicPlatform', {});
    $provide.value('$cordovaLocalNotification', {});
    $provide.value('$cordovaToast', {});
  }));

  var MenuController, scope, $httpBackend;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _$httpBackend_,  $rootScope, menuFactory) {

    // place here mocked dependencies
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET("http://localhost:3000/dishes").respond([
      {
        "id": 0,
        "name": "Uthapizza",
        "image": "images/uthapizza.png",
        "category": "mains",
        "label": "Hot",
        "price": "4.99",
        "description": "A",
        "comments":[{}]
      },
      {
        "id": 1,
        "name": "Zucchipakoda",
        "image": "images/zucchipakoda.png",
        "category": "mains",
        "label": "New",
        "price": "4.99",
        "description": "A",
        "comments":[{}]
      }
    ]);

    scope = $rootScope.$new();
    MenuController = $controller('MenuController', {
      $scope: scope, menuFactory: menuFactory
    });
    //$httpBackend.flush();

  }));

  it('should have showDetails as false', function () {

    expect(scope.showDetails).toBeFalsy();

  });

  it('should select the Menu tab (first one) as default', function() {

    expect(scope.tab).toBe(1);

  });

});
