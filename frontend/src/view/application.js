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
       this.$el.html( this.template({}) );
    },

    submit: function(){
      alert ('submitted' + $('textarea').val());
      this.processor.process($('textarea').val());
    }


  });
});