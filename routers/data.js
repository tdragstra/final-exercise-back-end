const { Router } = require("express");
const Space = require("../models").space;
const Story = require("../models").story;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/", async (req, res, next) => {
	try {
		const spaces = await Space.findAll({
			include: [Story],
		});
		res.send(spaces);
	} catch (error) {
		console.log(error.message);
		res.status(500).send("Something went wrong!");
	}
});

router.get("/spaces/:id", async (req, res, next) => {
	try {
		const list = await Space.findByPk(req.params.id, {
			order: [[Story, "createdAt", "DESC"]],
			include: { model: Story },
		});
		if (list) {
			res.send(list);
		} else {
			res.sendStatus(404, "User with this id not found");
		}
	} catch (error) {
		res.sendStatus(500, "Something went wrong");
		console.log(error.message);
	}
});

router.patch("/:id", authMiddleware, async (req, res) => {
	const space = await Space.findByPk(req.params.id);
	if (!space.userId === req.user.id) {
		return res
			.status(403)
			.send({ message: "You are not authorized to update this space" });
	}

	const { title, description, backgroundColor, color } = req.body;

	await space.update({ title, description, backgroundColor, color });

	return res.status(200).send({ space });
});

router.post("/:id/stories", authMiddleware, async (req, res) => {
	try {
		const space = await Space.findByPk(req.params.id);
		console.log(space);

		if (space === null) {
			return res.status(404).send({ message: "This space does not exist" });
		}

		if (!space.userId === req.user.id) {
			return res
				.status(403)
				.send({ message: "You are not authorized to update this space" });
		}

		const { name, imageUrl, content } = req.body;

		if (!name) {
			return res.status(400).send({ message: "A story must have a name" });
		}

		const story = await Story.create({
			name,
			imageUrl,
			content,
			spaceId: space.id,
		});

		return res.status(201).send({ message: "Story created", story });
	} catch (e) {
		console.log(e.message);
	}
});

router.delete("/delete/:storyId", authMiddleware, async (req, res, next) => {
	try {
		const { storyId } = req.params;
		const story = await Story.findByPk(storyId, { include: [Space] });
		if (!story) {
			return res.status(404).send("Story not found");
		}

		// Check if this user is the owner of the space
		if (story.space.userId !== req.user.id) {
			return res.status(401).send("You're not authorized to delete this story");
		}

		await story.destroy();
		res.send({ message: "ok", storyId });
	} catch (e) {
		console.log(e.message);
		next(e);
	}
});

module.exports = router;
