const express = require("express");
const { randomUUID } = require('crypto'); 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This section will help you get a list of all the records.
recordRoutes.route("/api/link/:id").get(async function (req, res) {
    const dbConnect = dbo.getDb();
    console.log(req.params.id);
    dbConnect.collection("links").findOne({ "uid" :req.params.id}, function(err, result){
        if (err) throw err;
        if(result){
            res.status(302).json(result)
        }else{
            res.status(404).json({messsage:"Not found"})
        }
    });

});
recordRoutes.route("/test").get(function(req, res){
    console.log(randomUUID().slice(0,8));
    res.send("Yes ")
});
// This section will help you create a new record.
recordRoutes.route("/api/generate-link").post(function (req, res) {
    const dbConnect = dbo.getDb();
    console.log(req.body);
    var uid =  randomUUID().slice(0,8);
    const doc = {
        uid: uid,
        last_modified: new Date(),
        upiid: req.body.upiid,
        name: req.body.name,
        amount: req.body.amount,
        desc: req.body.desc,
    };
    if(!req.body.upiid || !req.body.name || !req.body.amount || ! req.body.desc){
        res.status(400).send("All parameters are required");
    }else{
        dbConnect
            .collection("links")
            .insertOne(doc, function (err, result) {
            if (err) {
                res.status(400).send({success:false});
            } else {
                res.status(201).send({success:true,uid: uid});
            }
        });
    }
});


// This section will help you delete a record.
recordRoutes.route("/listings/delete/:id").delete((req, res) => {
    const dbConnect = dbo.getDb();
    const listingQuery = { listing_id: req.body.id };

    dbConnect
        .collection("listingsAndReviews")
        .deleteOne(listingQuery, function (err, _result) {
        if (err) {
            res
            .status(400)
            .send(`Error deleting listing with id ${listingQuery.listing_id}!`);
        } else {
            console.log("1 document deleted");
        }
        });
});

module.exports = recordRoutes;
