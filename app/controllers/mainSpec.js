import controllerMain from 'main.es5.js';

var controller = controllerMain;
describe('Main Controller', function() {
    var ctrl,
        mockedInterval,
        mockedScope;
    beforeAll(function(){
        mockedInterval = jasmine.createSpy();
        mockedInterval.cancel = function(){};
        mockedScope = {}
        ctrl = controller(mockedScope, mockedInterval);
    })

    beforeEach(function(){

    });
})
