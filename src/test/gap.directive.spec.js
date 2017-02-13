'use strict';



describe('Gap Directive', function () {


  // load the controller's module
  beforeEach(module('cartProject'));

  beforeEach(module(function($provide) {
    $provide.service('GetJson', function() {
      return {
        getAnswers: jasmine.createSpy('getAnswers').and.returnValue( [{"id": "1", "type": "text", "answers": ["a1", "a2"]}, {"id": "2", "type": "select", "answers": ["a1", "a2"], "options":["a1", "a2", "a3"]}])
      };
    });
    $provide.service('ExerciseModel', function() {
      return {
        addItem: jasmine.createSpy('addItem')
      };
    });
    /**
    $provide.factory('Item', function() {
      var ItemMock = function() {};
      ItemMock.prototype = {
        setId: jasmine.createSpy('setId'),
        setOptions: jasmine.createSpy('setOptions'),
        setAnswers: jasmine.createSpy('setAnswers'),
        setInputType: jasmine.createSpy('setInputType')
      };
      return ItemMock;
    });*/
  }));
  var ItemModel,
      $compile,
      $rootScope,
      sut;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$compile_, _$rootScope_, _Item_, $httpBackend) {
    //$httpBackend.whenGET("answers1.json").respond({ content: '<h1>lallala</h1>', answers: [{"id": "1", "type": "text", "answers": ["a1", "a2"]}] });
    ItemModel = _Item_;
    $compile = _$compile_;
    $rootScope =  _$rootScope_;

    //sut = new ItemModel();
  }));

  it('should compile a text type directive', inject(function (GetJson, ExerciseModel) {
    var element = $compile("<gap id='1'></gap>")($rootScope);
    $rootScope.$digest();

    var sut = element,
        input = element.find("input");

    expect(GetJson.getAnswers).toHaveBeenCalled();
    expect(ExerciseModel.addItem).toHaveBeenCalled();
    expect(element.html()).toContain("input");
    expect(element.html()).toContain("type=\"text\"");
    expect(element.html()).toContain("ng-model=\"Model.inputValue\"");
    expect(input.attr("class")).toContain("directiveInput");
  }));

  it('should compile a select type directive', function () {
    var element = $compile("<gap id='2'></gap>")($rootScope);

    $rootScope.$digest();

    var sut = element,
        input = element.find("select");

    expect(element.html()).toContain("select");
    expect(element.html()).toContain("ng-model=\"Model.inputValue\"");
    expect(input.attr("class")).toContain("directiveInput");
  });

});
