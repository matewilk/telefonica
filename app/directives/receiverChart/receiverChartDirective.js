import ReceiverChartController from './receiverChartController'

export function receiverChartDirective() {
    return {
        controller: ReceiverChartController,
        controllerAs: 'controller',
        template: require('./receiverChart.html')
  };
}
