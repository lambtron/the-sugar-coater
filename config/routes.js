'use strict';

(function() {

  /**
   * Import helpers ============================================================
   */
  var Worldcup = require('../app/helpers/worldcup');
  var Yo = require('../app/helpers/yo');

  // Public functions. =========================================================
  module.exports = function (app) {

  	// Application routes ======================================================
  	app.get('/*', function (req, res) {
      res.sendfile('index.html', {'root': './public/views/'});
    });
  };

}());