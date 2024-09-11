const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const router = express.Router();

//signup and signin routes

const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

router.post("/signup", async (req, res) => {
    const body = req.body;

    //zod input validation safe parse
    const {success} = signupSchema.safeParse(req.body);

    if (!success) {
        res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    //find if the user exists
    const user = User.findOne({
        username: body.username
    })

    if(user._id) {
        return res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    //create a User body
    const dbUser = await User.create(body);

    const token = jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET)

    res.json({
        message: "User created successfully",
        token: token
    })

})

const siginSchema = zod.object({
    username: zod.string(),
    password: zod.string()
})

router.post("/signin", (req, res) => {

    const body = req.body;
    const {success} = siginSchema.safeParse(req.body);

    if(!success) {
        res.json({
            message: "Incorrect inputs"
        })
    }

    const user = User.findOne({
        username: body.username,
        password: body.password
    })

    if(user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);

        res.json({
            token: token
        });
        return;
    }
    
    res.json({
        message: "Error while logging in"
    })

})



module.exports = router;