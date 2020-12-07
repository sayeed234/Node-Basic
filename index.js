var express=require('express');

app=express();

app.get("/",function(req,res){
           
    res.send("Hello Express.js");
});

app.get("/sayeed",function(req,res){
           
    res.send("I Love You Sayeed");
});

app.get("/json",function(req,res){
           
         let data=[
             {
                 name:"Sayeed",
                 phone:"01318712782",
                 address:"Dhaka,Bangladesh"
             },
             {
                 name:"Lovely",
                 phone:"01750758262",
                 

             },
             {
                 name:"Safiul Islam",
                 phone:"01763885921",
                 address:"Manda,Noagaon"
             }
         ]
         res.json(data);
});
app.get("/load",function(req,res){
        res.download('./file/Sayeed.docx');
});

app.get("/bd",function(req,res){
    res.redirect("http://127.0.0.1:3000/india");
})
app.get("/india",function(req,res){
    res.send("I am Indian");
})

app.get("/seven",function(req,res){
      res.cookie("Sayeed","is My name");
      res.cookie("love","is My Love");
      res.send("OK")
})



app.listen(3000,function(err){
    console.log("Server Run");
});