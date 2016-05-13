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
        spyOn(ctrl, 'start').and.callThrough();
        spyOn(ctrl, 'startPolling').and.callThrough();
        spyOn(ctrl, 'intervalPollingCallback').and.callThrough();
        spyOn(ctrl, 'stopPolling').and.callThrough();
        spyOn(ctrl, 'sendRequest');

        spyOn(ctrl, 'indicateRequest');
        spyOn(ctrl, 'clearData').and.callThrough();
        spyOn(ctrl, 'increaseLabelCout').and.callThrough();
        spyOn(ctrl, 'addValueToData').and.callThrough();
    });

    describe('Start', function(){
        beforeEach(function(){
            ctrl.start();
        });

        it('should set started variable to true', function() {
            expect(ctrl.started).toBe(true);
        });

        it('should call startPolling method', function(){
            expect(ctrl.startPolling).toHaveBeenCalled();
        });

        it('should set progressValue variable to 10', function(){
            expect(ctrl.progressValue).toBe(10);
        });

        it('should call interval with callback function and 1000ms interval', function(){
            expect(mockedInterval).toHaveBeenCalledWith(ctrl.intervalPollingCallback, 1000);
        });
    });

    describe('Interval Polling', function(){
        beforeEach(function(){
            ctrl.intervalPollingCallback();
        });

        it('should increase progressValue by 10 every call', function(){
            expect(ctrl.progressValue).toBe(20);
            ctrl.intervalPollingCallback();
            expect(ctrl.progressValue).toBe(30);
        });

        it('should stop polling if progressValue is greater than 100', function(){
            ctrl.progressValue = 100;
            ctrl.intervalPollingCallback();
            expect(ctrl.stopPolling).toHaveBeenCalled();
        });

        it('should send data request if progressValue is greater than 100', function(){
            ctrl.progressValue = 100;
            ctrl.intervalPollingCallback();
            expect(ctrl.sendRequest).toHaveBeenCalled();
        });
    });

    describe('Data response callback', function(){
        beforeEach(function(){
            ctrl.responseCallback({value: 10});
            ctrl.data = [0];
        })

        it('should set fetchData to false', function(){
            expect(ctrl.indicateRequest).toHaveBeenCalled();
            expect(ctrl.fetchData).toBe(false);
        });

        it('should clear data if first element of data is 0', function(){
            expect(ctrl.data).toEqual([0]);
            ctrl.clearData();
            expect(ctrl.data).toEqual([]);
        });

        it('should increase labels array on every call', function(){
            expect(ctrl.increaseLabelCout.calls.count()).toEqual(1);
            expect(ctrl.labels).toEqual([0,1,2]);
        });

        it('should fill data array', function(){
            expect(ctrl.addValueToData).toHaveBeenCalledWith(10);
        });

        it('should continue polling', function(){
            expect(ctrl.startPolling).toHaveBeenCalled();
        });
    });

    describe('Stop', function(){
        beforeEach(function(){
            ctrl.stop();
        });

        it('should set started variable to false', function() {
            expect(ctrl.started).toBe(false);
        });

        it('should stop polling', function(){
            expect(ctrl.stopPolling).toHaveBeenCalled();
        });
    });

    describe('Reset', function(){
        beforeEach(function(){
            ctrl.reset();
        });

        it('should reset data array to inital value', function(){
            expect(ctrl.data).toEqual([0]);
        });

        it('should reset labels array to initial value', function(){
            expect(ctrl.labels).toEqual([]);
        });
    });
})
