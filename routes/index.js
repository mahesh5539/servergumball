
/*
 * GET home page.
 */
var MongoClient = require('mongodb').MongoClient;

exports.index = function(req, res){
		var userName="mahesh";
	var password="mahesh";
	MongoClient.connect("mongodb://"+userName+":"+password+"@ds063160.mongolab.com:63160/gumballmd", function(err, db) {
		  if(!err) {
		    console.log("Now it is connected");
		    var collection=db.collection('gumballmd');
		    collection.find({}).toArray(function(err,docs){
		    	
		    	var data =docs[0];
		    	console.log(data);
		    	res.writeHead(200,{"Content-Type":"application/json"});
		    	res.end(JSON.stringify(data)+"\n");
		    });
		  }else{
			  
			  db.collection('gumballmd',function(err,collection){
				  
				  console.log(collection);
			  });
		  }
		});
};



