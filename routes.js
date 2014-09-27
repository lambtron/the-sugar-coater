'use strict';

(function() {

  // Public functions. =========================================================
  module.exports = function (app) {
    // API Routes ==============================================================
    app.post('/api/message', function (req, res) {

    });

    // Application routes ======================================================
    app.get('/*', function (req, res) {
      res.sendfile('index.html', {'root': './public/'});
    });
  };

}());