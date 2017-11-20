(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menu_data="";
  $scope.lunchMsg = "";

  $scope.feedCheck = function() {
    var texto = $scope.menu_data
    $scope.lunchMsg = "";
    if ($scope.menu_data==""){
      $scope.lunchMsg = "Please enter data first";
      $scope.lunchColor = "red";
    } else{
      var items = texto.split(",");
      // alert(data_items.length);
      if (items.length<=3) {
        $scope.lunchMsg = "Enjoy!";
        $scope.lunchColor = "green";
      }else if (items.length>3) {
          $scope.lunchMsg = "Too much!";
          $scope.lunchColor = "green";
      }
    }

  };

}

})();
