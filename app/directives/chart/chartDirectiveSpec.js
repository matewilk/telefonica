import chartDirective from 'chartDirective.es5.js';

var directive = chartDirective;
describe('Data Factory', function() {
    var chart, scope;

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope;
        scope.type = "bar";
        scope.pollingUrl = 'http://test/url';

        chart = $compile('<chart flex type="bar" polling-url="http://54.171.95.60:80"></chart>')(scope);

        scope.$digest();
    }));

    it('should have pollingUrl property', function(){
        expect(chart.scope().pollingUrl).toBe('http://test/url');
    });

    it('should have pollingUrl type', function(){
        expect(chart.scope().type).toBe('bar');
    });
});
