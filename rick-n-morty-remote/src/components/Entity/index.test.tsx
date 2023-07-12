import React from "react";
import { render, screen, getByText } from "utils/test-utils";
import Entity from ".";
import { Character } from "types/rickAndMorty";

const renderEntity = () => {
	const prop: Character = {
		name: "pickle rick!!",
		species: "vegetable",
		origin: {
			name: "earth",
		},
		location: {
			name: "earth2",
		},
		image: "",
	};
	render(<Entity {...prop} />);
};

test.each([
	["name", "Name", "pickle rick!!"],
	["species", "Species", "vegetable"],
	["origin", "Origin", "earth"],
	["location", "Location", "earth2"],
])(
	"Check Entity render correctly with %s %s %s",
	async (testId, text, expectValue) => {
		renderEntity();
		const description = screen.getByTestId(testId);
		getByText(description, text + ":");
		getByText(description, expectValue);
	}
);
