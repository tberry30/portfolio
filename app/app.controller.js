(function () {
'use strict';

angular.module('tbDevPortfolio')
  .controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$state', '$http'];

  function AppCtrl($state, $http) {
    var appCtrl = this;

    appCtrl.counter = 0;
    var folio = ['waitr','wasatch-sports','canyon-sports','weather-app']

    appCtrl.back = back;
    appCtrl.forward = forward;
    appCtrl.submitContact = submitContact;

    toastr.options = {
      "closeButton": true,
      "timeOut": "2000"
    }

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

    function submitContact(contact) {
      console.log(contact);
      $http
        .post('/api/contact', contact)
        .then(function(res) {
          appCtrl.contact.fromName = '';
          appCtrl.contact.fromEmail = '';
          appCtrl.contact.content = '';
          toastr.success('Contact form succussfully submitted.');
        });
    }


  }
})();
