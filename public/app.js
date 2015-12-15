/**
 * @author Disciple_D
 * @since 2015/12/15 20:00
 */
'use strict';

angular.module('DailyNba', ['ui.router', 'ngMaterial'])
  .run(routerLoader);

routerLoader.$inject = ['$rootScope'];
function routerLoader($rootScope){
  $rootScope.$on('$stateChangeStart', function(){
    $rootScope.loading = true;
  });

  $rootScope.$on('$viewContentLoaded', function(){
    $rootScope.loading = false;
  });
}