const express =require ('express');

const app = express();

const port = 3200;

app.get('/home', function(req,res){
    res.send("Hello Boys!");
})
app.get ('/about', function (req,res){ 
        res.sendFile(__dirname + '/page/index.html');
    })

    app.get ('/about', function (req,res){
        res.send("Success!!");
    })      
app.post('/contact', function(req,res){
    res.send("post() request");
})
app.listen(port,function() {
    console.log('Listening at port:' + port)
});
