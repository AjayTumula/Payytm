const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const { Account } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const { authMiddleware } = require("../middleware");
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
    const userId = dbUser._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId
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


const updateSchema = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
})

router.put("/", authMiddleware, async(req, res) => {
    const body = req.body;
    const {success} = updateSchema.safeParse(req.body);
    if(!success) {
        res.json({
             message: "Error updating the info"
        })
    }

    await User.updateOne({
        _id: req.userId
    }, body);

    res.json({
        message: "Updated successfully"
    })
})


//

router.get("/bulk", async(req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [
        {
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })

})



module.exports = router;