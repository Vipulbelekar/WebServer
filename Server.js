var exp=require('express')
var app=exp();

app.use(express.static(path.join(__dirname,'public')));

var bp=require("body-parser");
app.use(bp.json());


app.get('/getform',function(req,res){
    res.sendFile(__dirname+'/Form.html')
})

app.post('/getDataTable',function(req,res){
    str=""
    str+="<table>"
    str+="<tr>"
    str+="<td> Name </td>"
    str+="<td>"+req.body.nm+"</td></tr>"
    str+="<tr>"
    str+="<td> Birthdate </td>"
    str+="<td>"+req.body.bd+"</td></tr>"
    str+="<tr>"
    str+="<td> EmailId </td>"
    str+="<td>"+req.body.emailid+"</td></tr>"
    str+="<tr>"
    str+="<td> Qualification </td>"
    str+="<td>"+req.body.qua+"</td></tr>"
    str+="</table>"
    res.send(str);
})

app.listen(9000,function(){
    console.log("Server started on Port 9000");
})