const router = require("express").Router();
const mongoose = require("mongoose");

router.get("/messages", (req, res) => {
    mongoose.connect(process.env.MONGO_URI, (err, db) => {
        if (err) throw err;
        db.collection("messages").find().toArray((err, result) => {
            if (err) throw err;
            res.json({
                messages: result
            })
        })
    })
});

router.get("/", (req, res) => {
    res.json({
        message: "Here's some data from the api."
    })
});

export default router;