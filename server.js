var express = require('express');
var app = express();

// CONTRIBUTED MIDDLEWARE
var serveStatic = require('serve-static');
app.use(serveStatic('public', {'index': ['index.html']}));

app.listen(3000);
