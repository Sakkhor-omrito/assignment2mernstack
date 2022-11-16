var fs=require('fs');
var http=require('http');
var server=http.createServer(function(req,res){

if(req.url=='/'){
    let data=fs.readFileSync('home.html','utf8');
    res.end(data);
}
else if(req.url=='/about'){
  let data=fs.readFileSync('about.html','utf8');
  res.end(data);
}
else if(req.url=='/myTeam'){
    let data=fs.readFileSync('myTeam.html','utf8');
    res.end(data);
}
else if(req.url=='/portfolio'){
    let data=fs.readFileSync('portfolio.html','utf8');
    res.end(data);
}




});

server.listen(5555);
console.log("server run success");