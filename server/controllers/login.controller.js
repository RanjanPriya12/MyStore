const express = require("express");
const User = require("../models/user.model");
const authenticate=require('../middlewares/authenticate');
const router = express.Router();
const { body, validationResult } = require("express-validator")
const jwt = require('jsonwebtoken');
require("dotenv").config()


const generateToken = (user) => {
    return jwt.sign({ user }, process.env.SECRET_KEY)
}

router.post("/", body("email").not().isEmpty().bail().isEmail()
    .custom(async (value) => {
        let user = await User.findOne({ email: value }).lean().exec()
        if (!user) {
            throw new Error("Email or password incorrect")
        }
        return true
    }).bail(),
    body("password").not().isEmpty().bail(),

    authenticate,
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({ error: errors.array() });
            }
            let user = await User.findOne({ email: req.body.email }).exec();
            const match = user.checkPassword(req.body.password);
            if (!match) {
                return res.status(400).send("Email or password incorrect");
            }
            const token = generateToken(user);
            return res.status(200).send({ user, token });
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }

    });



module.exports = router;