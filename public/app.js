/**
 * @author Disciple_D
 * @since 2015/12/15 20:00
 */
'use strict';
(function (angular, undefined) {
  angular.module('DailyNba', ['ui.router', 'DailyNba.config', 'ngMaterial'])
    .config(routerConfig)
    .run(routerLoader);

  /**
   * ui-router loader
   */
  routerLoader.$inject = ['$rootScope'];
  function routerLoader($rootScope){
    $rootScope.$on('$stateChangeStart', function(){
      $rootScope.loading = true;
    });

    $rootScope.$on('$viewContentLoaded', function(){
      $rootScope.loading = false;
    });
  }

  /**
   * ui-router configuration
   */
  routerConfig.$inject = ['$urlRouterProvider', '$stateProvider', 'RouterConfig'];
  function routerConfig($urlRouterProvider, $stateProvider, RouterConfig){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', RouterConfig.home);
  }
})(window.angular);
