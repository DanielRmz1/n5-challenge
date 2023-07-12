import React from "react";
import { render, screen, waitFor } from "utils/test-utils";
import Stat from ".";

test("Check Stat component renders correctly simple component", () => {
	const props = {
		description: "some stat",
		value: 10,
	};
	render(<Stat {...props} />);

	screen.getByText(props.description + ":");
	screen.getByText(props.value);
});

// https://pokeapi.co/api/v2/stat/1/
test("Check Stat component renders correctly fetched stat", async () => {
	const props = {
		url: "https://pokeapi.co/api/v2/stat/1/",
		value: 10,
	};
	render(<Stat {...props} />);
	await waitFor(() => screen.getByText(/beer/i));
});
