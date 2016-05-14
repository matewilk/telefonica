import DataPollingController from './dataPollingController'

export function chartDirective() {
    return {
        controller: DataPollingController,
        controllerAs: 'controller',
        scope: {
            type: '@',
            'polling-url': '='
        },
        template: require('./chart.html'),
        link: function(scope, element, attributes) {
            scope.pollingUrl = attributes.pollingUrl;

            scope.$on('startAll',function(event, data){
                scope.start();
            });
            scope.$on('stopAll', function(event, data){
                scope.stop();
            });
            scope.$on('resetAll', function(event, data){
                scope.reset();
            });
        }
  };
}
