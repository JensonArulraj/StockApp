define([
  'jquery',
  'underscore',
  'backbone',
  'app/models/watch/WatchModel',
    'app/views/watch/WatchView'
], function($, _, Backbone, WatchModel){
  var WatchCollection = Backbone.Collection.extend({ // collection 
    model: WatchModel,
    url :'js/app/watchlist.json',
	parse: function(response) { // parse the fetch data in json object
                               var modelData = new WatchModel();	
			var newArray = [];
			
		   for(var i=0;i<response.watchlists.length;i +=1 ){
			   newArray.push(response.watchlists[i]);
		   }	
                               
		   modelData.set('watchlists',newArray);	
                               
	       return modelData;
    },
    initialize: function(){ // initialize
      this.bind("reset", function (model, options) {
		     // console.log(model);
           
		});

    },render:function(model){
        //console.log(model);
    }
	

  });
    
    var watchCollection = new WatchCollection({model:WatchModel});
    watchCollection.fetch({success : function(collection, response) {
           console.log("Success");
      },
       error : function(collection, response) {
        console.log("errr");
      }
    });
    
    return watchCollection;
  
});
