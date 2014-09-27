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
      alert ('submitted' + $('textarea').val());
      this.userText = $('textarea').val();
      this.processor.process(this.userText).then(
        _.bind(function(processedText){
          this.processedText = processedText;
          this.render();
        }, this));
    }


  });
});