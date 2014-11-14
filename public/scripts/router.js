"use strict";
// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'app/views/header/HeaderView',
   'app/views/stock/StockView',
   'app/views/watch/WatchView',
     'app/collections/watch/WatchCollection'
], function($, _, Backbone,HeaderView, StockView,WatchView,WatchCollection) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'show': 'showWatchlist',
      'create': 'Createwatchlist',
	  'watchlist' : 'WatchList',
      // Default
      '*actions': 'showWatchlist'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
	var headerView  = new HeaderView();
	headerView.render();
	
    var stockView = new StockView();
    stockView.render();
      
     var WatchList = new WatchView();
     WatchList.render();   
      
    app_router.on('route:showWatchlist', function(){
   
        // Call render on the module we loaded in via the dependency array
        var stockView = new StockView();
        stockView.render();

    });

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
