import React from "react";
import { render, screen, waitFor } from "utils/test-utils";
import Entity from ".";
import { IPokemon } from "types/pokemon";

vi.mock("./components/EntityDescription", () => {
	return {
		default: () => <div data-testid="entity-description" />,
	};
});

test("Check <Entity /> component works correctly", async () => {
	const props: IPokemon = {
		name: "",
		url: "https://pokeapi.co/api/v2/pokemon/1/",
	};
	render(<Entity {...props} />);

	await waitFor(() => screen.getByTestId("entity-description"));
	screen.debug();
});
