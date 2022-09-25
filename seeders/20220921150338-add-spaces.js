module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"spaces",
			[
				{
					title: "Apple's space",
					description: "A space of apples",
					backgroundColor: "#FFFFFF",
					color: "#000000",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 1,
				},
				{
					title: "Coco's space",
					description: "A place of Coconuts",
					backgroundColor: "#FF0000",
					color: "#000000",
					createdAt: new Date(),
					updatedAt: new Date(),
					userId: 3,
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("spaces", null, {});
	},
};
