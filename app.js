// Create AngularJS module
var app = angular.module('myApp', []);

// Create controller
app.controller('MainCtrl', function($scope) {
    // Initialize items array
    $scope.items = [];
    $scope.newItem = '';

    // Add item function
    $scope.addItem = function() {
        if ($scope.newItem.trim() !== '') {
            $scope.items.push($scope.newItem);
            $scope.newItem = '';
        }
    };

    // Remove item function
    $scope.removeItem = function(index) {
        $scope.items.splice(index, 1);
    };
});
