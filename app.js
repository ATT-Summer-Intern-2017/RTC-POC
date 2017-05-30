var host = "localhost";
var port = 1337;
var express = require("express");

var app = express();
app.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder

app.get("/", function(request, response){ //root dir
    response.send("public/index.html");
});

app.get("/rtc-input/", function(request, response){ //root dir
    response.send("api/rtc-listener.js");
});

app.listen(port, host, (function() {
	console.log("Running server on port " + port);
}));