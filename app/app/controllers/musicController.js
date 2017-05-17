var myApp = angular.module('mainModule');

myApp.controller('musicController', ['$scope','vkMusicService', function($scope, vkMusicService) {
        $scope.test = 'Hola!';
        $scope.musicList = vkMusicService.getMusic();
        $scope.masya = "1234567";
}]);

//todo angularjs dependency injection