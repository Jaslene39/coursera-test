(function(){
'use strict';

angular.module('lunchChecker', [])
.controller('lunchCheckerController', lunchCheckerController);

lunchCheckerController.$inject = ['$scope'];

function lunchCheckerController($scope){
    $scope.menu = "";
    $scope.message = "";

    $scope.checkAmount = function(){
        var menu = $scope.menu;
        var menuItems = menu.split(",").filter(item => item.trim() !== ""); // filter out empty items

        if(menuItems.length === 0){
            $scope.message = "Please enter data first";
        }else if(menuItems.length <= 3){
            $scope.message = "Enjoy!";
        }else{
            $scope.message = "Too much!";
        }
    };
}
})();