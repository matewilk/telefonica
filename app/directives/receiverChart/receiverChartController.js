export default function ($scope, $interval, $timeout, DataFactory)
{
    //chart initial setup
    let index;
    $scope.labels = [];
    $scope.data = [0];

    $scope.seriesExists = function(series){
        return $scope.labels.findIndex((element, index, array) => {
            return element === series;
        });
    }

    $scope.addNewDataAtIndex = function(index){
        $scope.data[index] = $scope.valueObj.value;
    }

    $scope.clearInitialData = function(){
        if(!$scope.data[0]){
            $scope.data = [];
        }
    }

    $scope.addNewSeriesAndData = function(){
        $scope.labels.push($scope.valueObj.series);
        $scope.data.push($scope.valueObj.value);
    }

    $scope.updateChart = function(valueObj){
        $scope.valueObj = valueObj;

        index = $scope.seriesExists(valueObj.series);

        if(~index){
            $scope.addNewDataAtIndex(index);
        } else {
            $scope.clearInitialData();
            $scope.addNewSeriesAndData();
        }
    }

    $scope.$on('addValue', function(event, valueObj){
        $scope.updateChart(valueObj);
    });

    $scope.$on('reset', function(event, valueObj){
        $scope.resetDataAtIndex(valueObj.series);
    });

    $scope.resetDataAtIndex = function(series){
        let seriesIndex = $scope.seriesExists(series);

        if(~seriesIndex){
            $scope.data.splice(seriesIndex, 1);
            $scope.labels.splice(seriesIndex, 1);
            if(!$scope.labels.length){
                $scope.data = [0];
            }
        }
    }

    return $scope;
}
