export default function ($scope, $interval, $timeout, DataFactory)
{
    //chart initial setup
    let index;
    $scope.labels = ['xyz'];
    $scope.data = [0];

    $scope.updateChart = function(valueObj){
        $scope.valueObj = valueObj;
        index = $scope.labels.findIndex(function(element, index, array){
            return element === $scope.valueObj.series
        });

        if(~index){
            $scope.data[index] = valueObj.value;
        } else {
            if($scope.labels[0] === 'xyz'){
                $scope.labels = [];
                $scope.data = [];
            }
            $scope.labels.push(valueObj.series);
            $scope.data.push(valueObj.value);
        }
    }

    $scope.$on('addValue', function(event, valueObj){
        $scope.updateChart(valueObj);
    });

    return $scope;
}
