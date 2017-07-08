var app = angular.module("myApp", []);
app.controller("cal", cal);

function cal($scope) {
    $scope.add = function() {
        $scope.operator = "+";
        $scope.result = $scope.operand_1 + $scope.operand_2;
        console.log($scope.result);
    };
    $scope.substract = function() {
        $scope.operator = "-";
        $scope.result = $scope.operand_1 - $scope.operand_2;
        console.log($scope.result);
    };
    $scope.multiply = function() {
        $scope.operator = "*";
        $scope.result = $scope.operand_1 * $scope.operand_2;
        console.log($scope.result);
    };
    $scope.divide = function() {
        $scope.operator = "/";
        $scope.result = $scope.operand_1 / $scope.operand_2;
        console.log($scope.result);
    };

}