import dataFactory from 'data.es5.js';

var factory = dataFactory;
describe('Data Factory', function() {
    var factoryMock,
        mockedResource,
        res,
        mainCtrlScope;

    beforeEach(inject(function($rootScope, $controller){
        mainCtrlScope = $rootScope.$new();
        mockedResource = function(){
            var self = this;
            return {
                query: function(){return self;}
            }
        }
        factoryMock = $controller(factory, {
            $resource: mockedResource
        });
        res = mockedResource();
        spyOn(res, 'query').and.callThrough();
    }));

    it('should have query function defined', function(){
        expect(factoryMock.query).toEqual(jasmine.any(Function));
    });

    xit('should call query function with callback', function(){
        factoryMock.query();
        expect(res.query).toHaveBeenCalled();
    });
});
