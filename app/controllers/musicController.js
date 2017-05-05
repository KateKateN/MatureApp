var myApp = angular.module('mainModule');

myApp.controller('musicController', ['$scope','vkMusicService', function($scope, vkMusicService) {
        $scope.test = 'Hola!';
        $scope.musicList = vkMusicService.getMusic();
}]);

//todo angularjs dependency injection