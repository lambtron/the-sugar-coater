'use strict';

(function() {
  // Helper libraries. =========================================================
  var sugarcoater = require('./sugarcoater.js');
  var _ = require("underscore");

  // Public functions. =========================================================
  module.exports = function (app) {
    // API Routes ==============================================================
    app.post('/api/message', function (req, res) {

      var message = (req.body.message);
      var responseMessage = sugarcoater.getMessage(message);
console.log("mesage", message, message.indexOf("clown") );
      if (message.indexOf("in a fire") > -1 ){
        responseMessage = "It's so brave of you to age naturally.";
      }
      if( message.indexOf("clown") > -1) {
        responseMessage = "My cousin is a little slow. You know him, right? I thihnk you two went to college together?";
      }
      if(message.indexOf("nerdy") > -1){
        responseMessage = "Good job attempting to be funny, everyone. You really tried."
      }
      res.send({message: responseMessage}, 200);
    });

    // Application routes ======================================================
    app.get('/*', function (req, res) {
      res.sendfile('index.html', {'root': './public/'});
    });
  };

}());