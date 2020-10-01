const express = require ('express');
const path = require ('path');
const __dirname = path.resolve();
const app = express();
app.use(express.static(__dirname + '/dist/product-list'));
app.get('/*', function(req, res){

    res.sendFile(path.join(__dirname + '/dist/product-list/index.html'));
});
app.listen(process.env.PORT || 8080);
