var myApp = angular.module('mainModule');

myApp.controller('loginController', ['$scope', 'loginService', 'vkLoginDataService', function($scope, vkLoginDataService) {
         function login(){
    	}

        $scope.loginService = function(){
        	loginService.login();
        };
}]);
