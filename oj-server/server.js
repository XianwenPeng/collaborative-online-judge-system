var express = require('express')
var app = express()
var restRouter = require("./routes/rest");
var indexRouter = require("./routes/index");
var mongoose = require("mongoose");
var path = require("path");

mongoose.connect("mongodb://user:user@ds237700.mlab.com:37700/cos");
app.use(express.static(path.join(__dirname, '../public')));
app.use("/", indexRouter);
app.use("/api/v1", restRouter);

app.use(function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, '../public')});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
