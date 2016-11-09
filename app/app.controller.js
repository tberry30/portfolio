(function () {
'use strict';

angular.module('tbDevPortfolio')
  .controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$state'];

  function AppCtrl($state) {
    var appCtrl = this;

    appCtrl.counter = 0;
    var folio = ['waitr','wasatch-sports','canyon-sports','weather-app']

    appCtrl.back = back;
    appCtrl.forward = forward;

    ////////////////

    function back() {
      appCtrl.direction = 'back';
      if (appCtrl.counter > 0) {
        appCtrl.counter--;
        $state.go(folio[appCtrl.counter]);
      } else {
        appCtrl.counter = folio.length - 1;
        $state.go(folio[appCtrl.counter]);
        }
    }

    function forward() {
      appCtrl.direction = 'forward';
      if (appCtrl.counter < folio.length - 1) {
        appCtrl.counter++;
        $state.go(folio[appCtrl.counter]);
      } else {
        appCtrl.counter = 0;
        $state.go(folio[appCtrl.counter]);
      }
    }

  }
})();
