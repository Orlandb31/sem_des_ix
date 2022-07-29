const express = require("express");
const userSchema = require("../models/User");
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post("/signup", async (req, res) => {
    const user = await userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

    const token = jwt.sign({_id: user._id}, 'secretKey')
    res.status(200).json({token})
});


router.post("/signin", async (req, res) => {
    const { userName, password } = req.body;

    const user = await userSchema.findOne({userName})
    if (!user) return res.status(401).send("No exists")
    if (user.password !== password) return res.status(401).send("Something wrong")

    const token = jwt.sign({_id: user._id}, 'secretKey')
    res.status(200).json({token})

});

async function verifyToken(req, res, next) {
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('Unauhtorized Request');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Unauhtorized Request');
		}

		const payload = await jwt.verify(token, 'secretKey');
		if (!payload) {
			return res.status(401).send('Unauhtorized Request');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		console.log(e)
		return res.status(401).send('Unauhtorized Request');
	}
}

module.exports = router;