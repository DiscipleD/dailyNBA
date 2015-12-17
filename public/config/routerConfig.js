/**
 * @author Disciple_D
 * @since 2015/12/16 15:00
 */
'use strict';
(function (angular, undefined) {
  angular.module('DailyNba.config', [])
    .provider('RouterConfig', routerConfiguration);

  function routerConfiguration(){
    this.routerConfig = {
      home: {
        url: '/',
        templateUrl: './templates/home.html',
        controller: 'HomeCtrl as homeCtrl'
      }
    };
    this.$get = function (){
      return this.routerConfig;
    }
  }
})(window.angular);