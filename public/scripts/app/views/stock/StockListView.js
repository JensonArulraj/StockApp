// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above,
  'app/models/stock/StockModel',
  'app/collections/stock/StockCollection',
  'text!templates/stock/stockListTemplate.html'

], function($, _, Backbone, StockModel, StockCollection, stockListTemplate){
  var StockListView = Backbone.View.extend({
    el: $("#stock-list"),

    render: function(){
      
      var data = {
        stocks: this.collection.models,
        _: _ 
      };
		//console.log("stocks",this.collection.models);

      var compiledTemplate = _.template( stockListTemplate, data );
      $("#stock-list").html( compiledTemplate ); 
    }
  });
  return StockListView;
});
