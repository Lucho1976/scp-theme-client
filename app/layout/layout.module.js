(function () {
  'use strict';

  angular
    .module('app.layout', [
      'app.layout.loadingbar',
      'app.layout.sidebar',
      'app.layout.alert',
      'app.layout.utils',
      'app.layout.editable',
      'app.search',
    ]);
})();
