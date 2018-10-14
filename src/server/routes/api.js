const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({
        message: "Here's some data from the api."
    })
});

export default router;