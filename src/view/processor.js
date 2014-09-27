define(function (require) {

  "use strict";

  var
     _          = require('underscore'),
     Backbone   = require('backbone');
     // Template   = require('text!/templates/application.html'),
     // Processor = require('view/processor'),
     // $ = require('jquery');

  return Backbone.View.extend({
   
    initialize: function(el){
     
    },

    process: function(text){
      alert('processing text: ' + text);
    }

  });
});