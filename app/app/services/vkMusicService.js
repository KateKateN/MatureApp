var myModule = angular.module('mainModule');

myModule.service('vkMusicService', function() {
  
    function getMusic(){
        return [{name: "Katinka",singer: "asassa"},{name: "Katinka",singer: "asassa"}];
    }


    var service = { getMusic: getMusic };

    return service;
});



//todo service vs factory intro
//todo learn OBJECT 
//https://learn.javascript.ru/objects-more