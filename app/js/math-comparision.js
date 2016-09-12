
var mathComparisionCtrl = learning.controller('mathComparisionCtrl', function( $scope, $http) {

  $scope.leftValue = generateRandomInt();
  $scope.rightValue = generateRandomInt();
  $scope.result = "";

  function generateRandomInt() {
    return Math.floor(Math.random() * (20 - 1) + 1);
  }

  $scope.less = function () {
    console.log('less');
    var result = $scope.leftValue < $scope.rightValue;
    console.log('result', result);
    validateResult(result, '<');
  }



  $scope.equals = function () {
    var result = $scope.leftValue == $scope.rightValue;
    validateResult(result, '=');

  }

  $scope.greater = function () {
    var result = $scope.leftValue > $scope.rightValue;
    validateResult(result, '>');
  }

  function validateResult(result, ch) {
    var text = ' ' + $scope.leftValue + ' ' + ch + ' ' + $scope.rightValue;
    if ( result ) {
      $scope.result = text + ' 😀';
    }
    else  {
      $scope.result = text + ' 😟';
    }
    $scope.leftValue = generateRandomInt();
    $scope.rightValue = generateRandomInt();


  }
});
