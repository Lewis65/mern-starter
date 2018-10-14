const router = require("express").Router();

router.get("/", (req, res) => {
    console.log("api routes");
    res.json({
        message: "Here's some data from the api."
    })
});

export default router;