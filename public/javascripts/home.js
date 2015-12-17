/**
 * @author Disciple_D
 * @since 2015/12/15 20:00
 */
'use strict';
angular.module('DailyNba')
  .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$http'];
function HomeCtrl($http){
  let vm = this;

  $http.get('/games/2015-12-16').success(function(data){
    vm.gameList = data;
  });
}