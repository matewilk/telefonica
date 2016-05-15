import controllerMain from 'main.es5.js';

var controller = controllerMain;
describe('Main Controller', function() {
    var ctrl,
        mainCtrlScope;

    beforeEach(inject(function($controller, $rootScope){
        mainCtrlScope = $rootScope.$new();
        ctrl = $controller(controller, {
            $scope: mainCtrlScope
        });
        spyOn($rootScope, '$broadcast').and.callThrough();
    }));

    describe('on init', function(){
        it('should have isLoaded variable set to false', function(){
            expect(mainCtrlScope.isLoaded).toBe(false);
        });

        it('should have started variable set to false', function(){
            expect(mainCtrlScope.started).toBe(false);
        });
    });

    describe('Start all', function(){
        beforeEach(function(){
            mainCtrlScope.startAll();
        })
        it('should broadcast "startAll" event', function(){
            expect(mainCtrlScope.$broadcast).toHaveBeenCalledWith('startAll');
        });
    });

    describe('Stop all', function(){
        beforeEach(function(){
            mainCtrlScope.stopAll();
        })
        it('should broadcast "stopAll" event', function(){
            expect(mainCtrlScope.$broadcast).toHaveBeenCalledWith('stopAll');
        });
    });

    describe('Reset all', function(){
        beforeEach(function(){
            mainCtrlScope.resetAll();
        })
        it('should broadcast "resetAll" event', function(){
            expect(mainCtrlScope.$broadcast).toHaveBeenCalledWith('resetAll');
        });
    });
});
