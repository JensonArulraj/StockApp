define([
  'jquery',
  'underscore',
  'backbone',
  'app/models/stock/StockModel'
], function($, _, Backbone, StockModel){
  var StockCollection = Backbone.Collection.extend({
    model: StockModel,
    
    initialize: function(){

      //this.add([project0, project1, project2, project3, project4]);

    }

  });
  var stock0 = new StockModel({title: 'TechWatch', url: ''}); 
      var stock1 = new StockModel({title:'HealthCareMarket', url: 'watchlist'}); 
      var stock2 = new StockModel({title:'ServicesMarket', url: ''}); 
      var stock3 = new StockModel({title:'FoodMarket', url: ''});
      var stock4 = new StockModel({title:'Aerospace and Defence', url: ''});
	  var stock5 = new StockModel({title:'Aerospace and Defence', url: ''});

      var Stocknames = [stock0, 
                      stock1,
                      stock2,
                      stock3,
                      stock4,
					  stock5];
var stockCollection = new StockCollection(Stocknames);
//console.log("stockCollection",stockCollection);
  return stockCollection;
});
