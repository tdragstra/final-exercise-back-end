module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"stories",
			[
				{
					name: "A journey awaits",
					content:
						"Look to my coming on the first light of the fifth day, at dawn look to the east.",
					imageUrl:
						"http://samanthapfield.com/wp-content/uploads/2016/07/gandalf-and-the-rohirim-1080x437.png",
					createdAt: new Date(),
					updatedAt: new Date(),
					spaceId: 1,
				},
				{
					name: "Winter is coming",
					content: "Its all going tits up",
					imageUrl:
						"https://iforum-sg.c.huawei.com/dddd/images/2020/10/24/85f6e4c2-5d78-464c-a6c2-cf1cbeb63adb_s.jpg",
					createdAt: new Date(),
					updatedAt: new Date(),
					spaceId: 1,
				},
				{
					name: "Coco go's nuts",
					content: "Look what i did now",
					imageUrl:
						"https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX4042569.jpg",
					createdAt: new Date(),
					updatedAt: new Date(),
					spaceId: 2,
				},
				{
					name: "Coala travels",
					content: "Coalaland",
					imageUrl:
						"https://d1jyxxz9imt9yb.cloudfront.net/medialib/1474/image/p1300x1300/DR_2020-01-18_Koroit-Victoria-AU_Bushfires-MosswoodWildlife-RescuedKoalas_1D_MelanieMahoney_094V1176.webp",
					createdAt: new Date(),
					updatedAt: new Date(),
					spaceId: 2,
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("stories", null, {});
	},
};
