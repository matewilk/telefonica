import ReceiverChartController from './receiverChartController'

export function receiverChartDirective() {
    return {
        controller: ReceiverChartController,
        controllerAs: 'controller',
        template: `<div layout="column" layout-align="center stretch">
            <div layout="row">
                <div flex>
                    <canvas id="polar-area" class="chart chart-polar-area" chart-data="data"
                    chart-labels="labels" chart-options="{legend: {display: labels.length}}">
                    </canvas>
                </div>
            </div>
        </div>`
  };
}
