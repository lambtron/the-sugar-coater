define(function (require) {

  "use strict";

  var
     _          = require('underscore'),
     Backbone   = require('backbone'),
     Template   = require('text!/templates/application.html'),
     Processor = require('view/processor'),
     $ = require('jquery');

  return Backbone.View.extend({
    events: {
      "click button": "submit"
    },
    initialize: function(el){
      // this.$el = el;
      this.render();
      this.processor = new Processor();
    },

    template: _.template(Template),
    render : function(){
       this.$el.html( this.template({ processedText: this.processedText, userText: this.userText}) );
    },

    submit: function(){
      this.userText = $('textarea').val();
      var callback = _.bind(function( response ) {
        this.processedText = response.message;
        this.render();
      }, this);
      $.post( "api/message", {message: this.userText}, callback)
        .fail(_.bind(function() {
          callback({message: "No offense, but " + this.userText});
        }, this));
    }


  });
});