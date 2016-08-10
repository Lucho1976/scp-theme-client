(function () {
  'use strict';

  angular
    .module('app.user')
    .controller('ClientIndexCtrl', ClientIndexCtrl);

  /**
   * @ngInject
   */
  function ClientIndexCtrl(ClientList) {
    var vm = this;

    vm.list = ClientList();

    vm.create = {
      input: {},
      submit: create,
    };

    activate();

    ////////////

    function activate() {
      vm.list.load();
    }

    function create() {
      vm.list.create(vm.create.getData());
    }
  }
})();
