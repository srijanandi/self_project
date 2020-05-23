var express=require("express");
var app=express();
//const port=process.env.PORT || 10002
//app.set('view engine','ejs');
app.get("/",function(req,res){
res.render("main.ejs");});

app.get("/image",function(req,res){
res.render("html1.ejs");
});
app.get("/feedback",function(req,res){
res.render("feedback.ejs");
});
app.get("/login",function(req,res){
res.render("login.ejs");
});
app.get("/help",function(req,res){
res.render("help.ejs");
})
app.get("/timetable",function(req,res){
res.render("timetable.ejs");});
app.get("/os",function(req,res){
res.render("os.ejs");});
app.get("/timetable/ada",function(req,res){
res.render("ada.ejs");});
app.get("/web",function(req,res){
res.render("web.ejs");});
app.get("/timetable/software",function(req,res){
res.render("software.ejs");});
app.listen(3000,function(){
  console.log("ServerStarted");
  });
