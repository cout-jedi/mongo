const { MongoClient } = require("mongodb");
const express = require('express');
const assert = require('assert');
const nodemon = require('nodemon');
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.json());


// applicationCache.use()

// Connection URL
const url = 'mongodb+srv://kiranez:z1258974523z@cluster0.mt0on.mongodb.net/test?retryWrites=true&w=majority';
// Create a new MongoClient
const client = new MongoClient(url);
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    // client.close();
    const db = client.db("test");

    db.collection('inventory').insertOne( {
        item: "note",
        qty: 100,
        tags: ["cotton"],
        size: { h: 28, w: 35.5, uom: "cm" }
    })
    .then(function(result) {
    
    })

    var cursor = db.collection('inventory').find({});

    function iterateFunc(doc) {
        console.log(JSON.stringify(doc, null, 4));
    }

    function errorFunc(error) {
        console.log(error);
    }

    cursor.forEach(iterateFunc, errorFunc);
});



