define([
  'jquery',
  'underscore',
  'backbone',
  'app/models/stock/StockModel',
  'app/collections/stock/StockCollection',
  'app/views/stock/StockView',
  'app/views/stock/StockListView',
   'app/views/watch/WatchView',
  'text!templates/stock/StockTemplate.html',
  'text!templates/watch/WatchTemplate.html'
], function($, _, Backbone, StockModel, StockCollection, StockView, StockListView, WatchView, StockTemplate,WatchTemplate){
var EventAggregator = _.extend({}, Backbone.Events);
  var StockView = Backbone.View.extend({
	  collections:StockCollection,
		  event_aggregator:EventAggregator,
    el: $("#page"),
	initialize : function(){
		//this.stockCollection = new StockCollection();
	},
		events:{
			'click #stock-name': 'stockDetails'
	},
    render: function(){
     
	  this.$el.html(StockTemplate);
      
	  
	  var stockListView = new StockListView({ collection: StockCollection}); 
      
      stockListView.render(); 

      // add the sidebar 
     // var sidebarView = new SidebarView();
     // sidebarView.render();

    },
	stockDetails:function(){
        var watchview = new WatchView();
		watchview.watchDetails();
	 }
  });

  return StockView;
});
