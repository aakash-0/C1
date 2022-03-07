const express=require("express");

const app=express();

app.listen(5000,function(){
    console.log("listening at port 5000")
})
var rout={
    route:"/libraries"
}
var auth={
    route:"/authors"
}
app.get("/books",logger,function(req,res){
    res.send({ route: "/books"});
   
});
app.get("/libraries",logger,checkPermission,function(req,res){
    res.send(rout);
   
});
app.get("/authors",logger,checkPermission,function(req,res){
    res.send(auth);
   
});


function logger(req,res,next){
   console.log(req.path);
   next();
}
function  checkPermission(req,res,next){
    if(req.path=="/libraries"){
        rout.permission="true";
        next()
    }
    else if(req.path=="/authors"){
        auth.permission="true";
        next()
    }
}