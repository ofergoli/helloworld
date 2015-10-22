var express = require('express'),
	app = express();

var port = process.argv[2] || 3000;

app.use(express.static('./public'));

app.get('/',function(req,res){
	console.log(port);
	console.log('hello world');
	res.json({res : 'hello world'});
});



app.listen(port,function(){
	console.log('server up on ' + port);
});