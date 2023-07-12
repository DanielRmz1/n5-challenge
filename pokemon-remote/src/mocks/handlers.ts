import { rest } from "msw";

export const handlers = [
	rest.get("https://pokeapi.co/api/v2/stat/1/", (req, res, ctx) =>
		res(
			ctx.status(200),
			ctx.json({
				name: "hp",
				names: [
					{
						language: {
							name: "en",
						},
						name: "beer",
					},
				],
			})
		)
	),
];
