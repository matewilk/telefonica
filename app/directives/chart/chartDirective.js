import DataPollingController from './dataPollingController'

export function chartDirective() {
    return {
        controller: DataPollingController,
        controllerAs: 'controller',
        scope: {
            type: '@',
            'polling-url': '='
        },
        template: `<div layout="column" layout-align="center stretch">
            <div layout="row">
                <div flex>
                    <div data-ng-include src="getChartTemplate(type)"></div>
                </div>
            </div>

            <div layout="row">
                <div flex>
                    <md-progress-linear class="md-dashed md-warn" md-mode="indeterminate" ng-show="fetchData"></md-progress-linear>
                    <md-progress-linear ng-hide="fetchData" class="md-primary" md-mode="buffer" value="{{progressValue}}"
                                        md-buffer-value="{{progressValue}}"></md-progress-linear>
                </div>
            </div>

            <div layout="row">
                <div flex>
                    <md-content>
                        <section layout="row" layout-align="center center" layout-wrap>
                            <md-button class="md-raised md-primary" ng-disabled="started" ng-click="start()">Start</md-button>
                            <md-button class="md-raised md-warn" ng-disabled="!started" ng-click="stop()">Stop</md-button>
                            <md-button class="md-raised" ng-disabled="started" ng-click="reset()">Reset</md-button>
                        </section>
                    </md-content>
                </div>
            </div>
        </div>`,
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
