'use strict';

(function() {
  // Helper libraries. =========================================================
  var sugarcoater = require('./sugarcoater.js');

  // Public functions. =========================================================
  module.exports = function (app) {
    // API Routes ==============================================================
    app.post('/api/message', function (req, res) {
      res.send({message: sugarcoater.getMessage(req.body.message)}, 200);
    });

    // Application routes ======================================================
    app.get('/*', function (req, res) {
      res.sendfile('index.html', {'root': './public/'});
    });
  };

}());