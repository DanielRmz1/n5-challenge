import React, { FC } from "react";
import { usePokemonList } from "hooks/usePokemons";
import Entity from "components/Entity";

interface Props {
	language: "en" | "es";
}

const Pokemon: FC<Props> = ({ language = "en" }) => {
	const [list, isLoading] = usePokemonList(0);
	if (isLoading) {
		return <div>Loading pokemons</div>;
	}
	return list.map((pokemon) => <Entity {...pokemon} />);
};

export default Pokemon;
