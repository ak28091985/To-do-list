const express=require("express");
const bodyParser=require("body-parser");
const app=express();
var items=["buy food","eat food","cook food"];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.get("/",function(req,res)
{

  var today=new Date();
  var options=
  {
    weekday:"long",
    day:"numeric",
    month:"long"
  };

  var day=today.toLocaleDateString("en-US",options);
  res.render("list",{kindofday:day,newlistItems:items});
});
app.post("/",function(req,res)
{
  var item=req.body.newlistItem;
  items.push(item);
  res.redirect("/");
})

app.listen(3000,function() {
  console.log("Server has started at port 03000");

});
