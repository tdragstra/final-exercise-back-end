const { user, space, story } = require("./models");

async function listsWithUsers() {
	const lists = await space.findAll({
		include: [story],
	});

	return lists.map((list) => list.toJSON());
}

listsWithUsers().then((lists) => console.log(lists));
