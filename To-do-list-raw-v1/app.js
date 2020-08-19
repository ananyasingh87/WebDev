const express = require("express");
const bodyParser = require("body-parser");
const e = require("express");

const app = express();
var items = ['Exercise', 'Meditate'];
var worklist = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); 

app.get("/", function(req, res){
    var today = new Date();
    var options={
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {listTitle: day, newListItems: items});
});


app.post("/", function(request, response){
    let item = request.body.newItem;
    if(request.body.list === "Work"){
        worklist.push(item);
        response.redirect("/work");
    }
    else{
        items.push(item);
        response.redirect("/");
    }
    
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: worklist});
});

app.get("/about", function(req, res){
    res.render("about");
})

app.listen(3000, function(){
    console.log("server started ar port 3000");
});