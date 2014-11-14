define([
'jquery',
  'underscore',
  'backbone',
  'app/views/watch/WatchView',
  'app/collections/watch/WatchCollection',
   'text!templates/stock/StockTemplate.html',
  'text!templates/watch/watchTemplate.html'
], function($, _, Backbone, WatchView,  WatchCollection, StockTemplate,watchTemplate){
var EventAggregator = _.extend({}, Backbone.Events);

  var WatchView = Backbone.View.extend({
    el: $("#watchlist-details"),
	collections:WatchCollection,
    event_aggregator:EventAggregator,
	initialize : function(){
		//this.stockCollection = new StockCollection();
		_.bindAll(this, "watchDetails");
		this.event_aggregator.bind("stock_list:show", this.watchDetails);
        
        
	},render : function(res,flag){
        var data = 
        { watchlists: this.collections.models,
        _: _ 
	     
        }
    },
    
	watchDetails: function(){
       var data = {  watchlists: this.collections.models,
        _: _ 
	  }
       //$("#watchlist-details").style("height",302px);
       var arrayvalue = _(data).toArray()[0][0].attributes;
        var compiledTemplate = _.template( watchTemplate, arrayvalue);
	 //console.log(compiledTemplate);
        $("#watchlist-details").toggle();
      $("#watchlist-details").html(compiledTemplate);
        $("#watchlist-details").css("height","302px");
        
           if( $("#watchlist-details").is(':visible') ){
               $(".watchlist").addClass("open");
           }else{
               $(".watchlist").removeClass("open");
           }
        
        
	}
  });
  return WatchView;
});
