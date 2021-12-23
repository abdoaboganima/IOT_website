var express= require('./public/node_modules/express');
var morgan = require('./public/node_modules/morgan');
var hostname ='localhost';
var port= 3000;
var app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.listen(port,hostname,function(){
    console.log(' express server is running, http://' +hostname +':'+port);
});