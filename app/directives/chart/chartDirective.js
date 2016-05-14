import DataPollingController from './dataPollingController'

export function chartDirective() {
    return {
        controller: DataPollingController,
        controllerAs: 'controller',
        scope: {
            type: '@'
        },
        template: require('./chart.html')
  };
}
