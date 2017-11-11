(function () {
  'use strict';

  angular.module('myFirstApp',[])

  .controller('myFirstController', function($scope){
    $scope.name = "Yaakov";
    $scope.sayHello = function(){
      return "Hello Coursera!";
    }
  });
}
)();
