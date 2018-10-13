import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
    res.end("Welcome to the user routes.")
})

export default router;