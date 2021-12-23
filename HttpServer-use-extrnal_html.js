var http = require('http');
var fs = require('fs');
var path = require('path');
var localname='localhost';
var port = 3000;

var server = http.createServer(function(req,res){
    console.log('requst for  ' + req.url + ' by method: '+req.method); // print user url and request method 

    if (req.method == 'GET'){
        var fileurl;

        if(req.url =='/') fileurl = '/index.html';
        else fileurl = req.url;

        var filePath =path.resolve('./public'+fileurl);    // make one path 
        var fileExt = path.extname(filePath);              // know what is type of user requested file
        if(fileExt == '.html'){
            fs.exists(filePath,function(exists){            // check if file is exists or not 
                if(!exists){  // file is not existed
                    res.writeHead(404,{'Content-Type':'text/html'});
                    res.end('<html><body><h1> Error 404 : '+fileurl+'</h1></body></html>');
                    return;
                }

                res.writeHead(200,{'Content-Type':'text/html'});
                fs.createReadStream(filePath).pipe(res);
            });
        }
        else {
            res.writeHead(404,{'Content-Type':'text/html'});
            res.end('<html><body><h1> Error 404 : '+fileurl+' Not a HTML file</h1></body></html>');
        }
                
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end('<html><body><h1> Error 404 : '+req.method+' Not supported</h1></body></html>');
    }
});

server.listen(port,localname,function(){
    console.log('server is running at http://'+localname+' : '+port);
});

