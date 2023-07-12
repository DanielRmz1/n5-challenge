import { rest } from "msw";
import { PokemonDetail } from "types/pokemon";

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
	rest.get("https://pokeapi.co/api/v2/stat/2/", (req, res, ctx) =>
		res(
			ctx.status(200),
			ctx.json({
				name: "hp",
				names: [
					{
						language: {
							name: "en",
						},
						name: "power",
					},
				],
			})
		)
	),
	rest.get("https://pokeapi.co/api/v2/pokemon/1/", (req, res, ctx) =>
		res(
			ctx.status(200),
			ctx.json<PokemonDetail>({
				name: "bulbasaur",
				weight: 69,
				height: 7,
				sprites: {
					front_default:
						"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
				},
				base_experience: 64,
				stats: [
					{
						base_stat: 45,
						stat: {
							name: "hp",
							url: "https://pokeapi.co/api/v2/stat/1/",
						},
					},
					{
						base_stat: 49,
						stat: {
							name: "attack",
							url: "https://pokeapi.co/api/v2/stat/2/",
						},
					},
				],
			})
		)
	),
];
