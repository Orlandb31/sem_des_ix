const express = require("express");
const eventSchema = require("../models/Events");
const router = express.Router();
const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');
const upload = require('../utils/storage')
const axios = require("axios").default;

router.post("/create-event", upload.single('image') ,verifyToken, async (req, res) => {
    let decodedToken = jwt_decode(req.headers.authorization)
    let { _id } = decodedToken
    req.body['userId'] = _id
	
	console.log(req.file)
	if(req.file){
		const { filename } = req.file
		req.body['imgUrl'] = filename
	}

    const event = await eventSchema(req.body);
    event
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

router.get("/events", (req, res) => {
    eventSchema
		.find()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }))
});

router.get("/event/:id", (req, res) => {
	const { id } = req.params;
    eventSchema
		.findById(id)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }))
});

router.delete("/event/:id", verifyToken, (req, res) => {
	const { id } = req.params;
	eventSchema
	  .remove({ _id: id })
	  .then((data) => res.json(data))
	  .catch((error) => res.json({ message: error }));
  });

router.get("/events-category/:id",(req, res) => {
	const { id } = req.params;
	locResults()
    eventSchema
		.find({ category:id })
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }))
	});

router.put("/event/:id", (req, res) => {
	const { id } = req.params;
	const { name, age, email } = req.body;
	userSchema
		.updateOne({ _id: id }, { $set: { name, age, email } })
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
	});
	  

	
async function locResults() {
	try {
		await axios.get('https://jsonkeeper.com/b/DEP4')
			.then(function(res){
				res.json()
			})
	} catch (error) {
		console.log(error)
	}
}


async function verifyToken(req, res, next) {
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('Unauhtorized Request l');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Unauhtorized Request');
		}

		const payload = await jwt.verify(token, 'secretKey');
		if (!payload) {
			return res.status(401).send('Unauhtorized Reques');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		console.log(e)
		return res.status(401).send('Unauhtorized Request ooo');
	}
}

module.exports = router;