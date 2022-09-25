// const authMiddleware = require("../auth/middleware");
// const User = require("../models/").user;
// const Myspace = require("../models/").myspace;
// const { Router } = require("express");

// const router = new Router();

// router.get("/", authMiddleware, async (req, res, next) => {
// 	const data = await User.findByPk(req.user.id);
// 	const dataPk = data.userId;
// 	const myspace = await Myspace.userId.findOne(dataPk, {
// 		include: [Story],
// 	});

// 	res.send({ myspace });
// });

// router.post("/post", authMiddleware, async (req, res, next) => {
//     const {name, content, imageUrl} = req.body

// }
