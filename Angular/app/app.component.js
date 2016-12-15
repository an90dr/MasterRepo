(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      templateUrl: "./app/app.template.html"
    })
    .Class({
      constructor: function() {
          
      }
    });
})(window.app || (window.app = {}));