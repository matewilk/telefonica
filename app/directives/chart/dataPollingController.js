export default function ($scope, $interval, $timeout, DataFactory)
{
    //progress bar variables
    $scope.progressValue = 0;
    $scope.fetchData = false;

    //chart initial setup
    $scope.labels = [];
    $scope.series = ['Series A'];
    $scope.data = [0];

    //status variable
    $scope.started = false;

    $scope.start = function(){
        $scope.started = true;
        $scope.startPolling();
    }

    $scope.stop = function(){
        $scope.started = false;
        $scope.stopPolling();
    }

    $scope.reset = function(){
        $scope.data = [0];
        $scope.labels = [];
    }

    var interval;
    $scope.intervalPollingCallback = function(){
        $scope.progressValue += 10;
        if($scope.progressValue > 100){
            $scope.stopPolling();
            $scope.sendRequest();
        }
    }
    $scope.startPolling = function() {
        $scope.progressValue = 10;
        interval = $interval($scope.intervalPollingCallback, 1000);
    }

    $scope.stopPolling = function() {
        $interval.cancel(interval);
        interval = undefined;
        $scope.progressValue = 0;
    }

    $scope.indicateRequest = function(bool){
        $scope.fetchData = bool;
    }

    $scope.sendRequest = function(){
        $scope.indicateRequest(true);
        DataFactory.query($scope.responseCallback);
    }

    $scope.responseCallback = function(response){
        $scope.indicateRequest(false);
        $scope.clearData();
        $scope.increaseLabelCout();
        $scope.addValueToData(response.value);
        $scope.startPolling();
    }

    $scope.clearData = function() {
        if($scope.data[0] === 0){
            $scope.data = [];
        }
    }

    $scope.increaseLabelCout = function(){
        $scope.labels.push($scope.labels.length)
    }

    $scope.addValueToData = function(value){
        $scope.data.push(value);
    }

    return $scope;
}
