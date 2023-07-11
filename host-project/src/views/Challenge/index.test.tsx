import React from "react";
import {
	getByRole,
	render,
	screen,
	getByText,
	fireEvent,
	waitFor,
	act,
} from "utils/test-utils";
import Challenge from ".";
import useStore from "hooks/useStore";
import { languages } from "constants/constants";
import english from "translations/en.json";
import spanish from "translations/es.json";

vi.mock("components/Header", () => {
	return {
		default: () => <div data-testid="header-id" />,
	};
});

vi.mock("remotePokemon/Pokemon", () => ({
	default: () => <div data-testid="remote-pokemon-component" />,
}));

vi.mock("remoteRickAndMorty/RickAndMorty", () => ({
	default: () => <div data-testid="remote-rick-morty-component" />,
}));

test("Check Challenge view functionality", async () => {
	render(<Challenge />);

	screen.getByTestId("header-id");

	// Check pokemon component is rendered on button click
	const pokemonContainer = screen.getByTestId("pokemon-container");
	const pokemonBtn = getByRole(pokemonContainer, "button", {
		name: english["app.pokemons"],
	});
	getByText(pokemonContainer, english["app.clickAboveButton"]);
	fireEvent.click(pokemonBtn);
	await waitFor(() => screen.getByTestId("remote-pokemon-component"));

	// Check rick and morty component is rendered on button click
	const rickMortyContainer = screen.getByTestId("rick-and-morty-container");
	const rickMortyBtn = getByRole(rickMortyContainer, "button", {
		name: english["app.rickAndMorty"],
	});
	getByText(rickMortyContainer, english["app.clickAboveButton"]);
	fireEvent.click(rickMortyBtn);
	await waitFor(() => screen.getByTestId("remote-rick-morty-component"));
});

test("Check Challenge view internationalization works correctly", async () => {
	render(<Challenge />);
	const setLanguage = useStore.getState().setLanguage;

	expect(
		screen.queryByRole("button", { name: english["app.pokemons"] })
	).toBeInTheDocument();
	expect(
		screen.queryByRole("button", { name: english["app.rickAndMorty"] })
	).toBeInTheDocument();
	expect(screen.queryAllByText(english["app.clickAboveButton"])).toHaveLength(
		2
	);

	// Switch to spanish
	await act(async () => setLanguage(languages[1]));

	await waitFor(() => {
		expect(
			screen.queryByRole("button", { name: spanish["app.pokemons"] })
		).toBeInTheDocument();
		expect(
			screen.queryByRole("button", { name: spanish["app.rickAndMorty"] })
		).toBeInTheDocument();
		expect(
			screen.queryAllByText(spanish["app.clickAboveButton"])
		).toHaveLength(2);
	});
});
