(function () {
  'use strict';

  angular
    .module('app.hardware.server.list.filters')
    .controller('ServerFiltersCtrl', ServerFiltersCtrl)
    ;

  /**
   * @ngInject
   */
  function ServerFiltersCtrl(Select, Observable, $q, $timeout) {
    var filters = this;

    filters.$onInit = init;
    filters.$onChanges = $onChanges;

    filters.current = {};
    // filters.group = Select('group');
    filters.searchFocus = Observable(false);

    filters.fireChangeEvent = fireChangeEvent;

    //////////

    function init() {
      var promises = [
        $timeout(),
        // filters.group.setSelectedId($state.params['group']),
      ];

      $q.all(promises)
        .then(listenForChanges)
        .then(fireChangeEvent)
        ;
    }

    function listenForChanges() {
      // filters.group.on('change', fireChangeEvent);
    }

    function fireChangeEvent() {
      _.assign(filters.current, {
        // group: filters.group.getSelected('id'),
      });

      if (filters.change) {
        filters.change();
      }
    }

    function $onChanges(changes) {
      if (changes.show) {
        var onShow = filters.searchFocus.set.bind(null, true);
        (changes.show.currentValue ? onShow : angular.noop)();
      }
    }
  }
})();
