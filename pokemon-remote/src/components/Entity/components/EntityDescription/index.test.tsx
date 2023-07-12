import React from "react";
import { getByText, render, screen, waitFor } from "utils/test-utils";
import EntityDescription from ".";
import { PokemonDetail } from "types/pokemon";

const renderEntityDescription = () => {
	const props: PokemonDetail = {
		name: "Pikachu",
		base_experience: 30,
		height: 2,
		weight: 4,
		sprites: {
			front_default: "",
		},
		stats: [
			{
				base_stat: 10,
				stat: {
					name: "power",
					url: "https://pokeapi.co/api/v2/stat/2/",
				},
			},
			{
				base_stat: 20,
				stat: {
					url: "https://pokeapi.co/api/v2/stat/1/",
					name: "beer",
				},
			},
		],
	};
	render(<EntityDescription {...props} />);
};

test.each([
	["name", "Name", "Pikachu"],
	["base_experience", "Experience", 30],
	["height", "Height", 2],
	["weight", "Weight", 4],
	["power", "power", 10],
	["beer", "beer", 20],
])(
	"Check EntityDescription render <Stat /> correctly with %s %s %s",
	async (testId, text, expectValue) => {
		renderEntityDescription();
		let stat = null;
		await waitFor(() => {
			stat = screen.getByTestId(`stat-${testId}`);
			getByText(stat, text + ":");
			getByText(stat, expectValue);
		});
	}
);
