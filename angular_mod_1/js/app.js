// Define the `phonecatApp` module
courseraApp = angular.module('courseraApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
courseraApp.controller('MainController', function MainController($scope) {
    $scope.list = "";
    $scope.message = "";
    $scope.checkList = function () {
        if ($scope.list) {
            var elements = $scope.list.split(',');
            if (elements.length < 4) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        }
        else {
            $scope.message = "Please enter data first";
        }

    }


});