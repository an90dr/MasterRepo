(function(app) {

import {platformBrowserDynamic } from '@angular/platform-browser-dynamic';


  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic
      .platformBrowserDynamic()
      .bootstrapModule(app.AppModule);
  });
})(window.app || (window.app = {}));