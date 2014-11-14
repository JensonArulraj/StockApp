define([
'jquery',
  'underscore',
  'backbone',
  'app/views/header/HeaderView',
  'text!templates/header/headerTemplate.html'
], function($, _, Backbone, HeaderView,  headerTemplate){

  var HeaderView = Backbone.View.extend({
    el: $("#header"),
    render: function(){
      
      this.$el.html(headerTemplate);

     
    }
  });

  return HeaderView;
});
