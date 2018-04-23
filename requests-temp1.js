var express = require("express");
var app = express();

var server = app.listen(process.env.PORT || 8080, function(){
    console.log("PORT:" + server.address().port);
});

app.get("/height", function(req, res, next) {
  res.json(JSON.stringify(address));
});

var nem = require("nem-sdk").default;
var endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.deafultTestnet, nem.model.nodes.defaultPort);

var address = "NA2VKRQKUJDOBIAEX2METU4UBZ6MCSERPKULEPXB";

// Get chain height
nem.com.requests.chain.height(endpoint).then(function(res) {
  console.log("\nChain Height:");
  console.log(res);
}, function(err) {
  console.log(err);
});

// Get account data
nem.com.requests.account.data(endpoint, address).then(function(res) {
  console.log("\nAccount data:");
  console.log(res);
}, function(err) {
  console.log(err);
});
