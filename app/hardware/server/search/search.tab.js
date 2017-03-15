(function () {
  'use strict';

  angular
    .module('app.hardware.server.search')
    .factory('ServerSearchTab', ServerSearchTabFactory)
    .run(addServerSearchTab)
    ;

  /**
   * Add the ServerSearchTab to the Search tabs list.
   *
   * @ngInject
   */
  function addServerSearchTab(Search, ServerSearchTab) {
    Search.tab.add(ServerSearchTab());
  }

  /**
   * ServerSearchTab Factory
   *
   * @ngInject
   */
  function ServerSearchTabFactory($state, ServerList, ListFilter, RouteHelpers) {
    return function () {
      var list = ServerList();
      return new ServerSearchTab(
        list,
        $state,
        ListFilter(list),
        RouteHelpers
      );
    };
  }

  function ServerSearchTab (list, $state, filter, RouteHelpers) {
    var tab = this;

    tab.name = 'servers';
    tab.list = list;
    tab.text = 'server.search.TITLE';
    tab.lang = 'server';
    tab.filter = filter;
    tab.select = onSelect;
    tab.results = {
      url: RouteHelpers.basepath('hardware/server/search/search.tab.html'),
    };
    tab.typeaheadTemplateUrl = RouteHelpers.basepath(
      'hardware/server/search/search.item.html'
    );

    //////////

    function onSelect($item, shouldOpenInNewTab, openSelected) {
      openSelected('app.hardware.server.view.manage', {
          id: $item.id,
        }, shouldOpenInNewTab);
    }


  }
})();
