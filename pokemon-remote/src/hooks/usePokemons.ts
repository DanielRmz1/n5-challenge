import { IPokemon, PokemonDetail } from "types/pokemon";
import { Uri, get } from "api/service";
import { useState, useEffect } from "react";

export const usePokemonList = (offset: number = 0): [IPokemon[], boolean] => {
	const [list, setList] = useState<IPokemon[]>([]);
	const url = Uri.pokemonList(offset);
	const { data, isLoading } = get(url);

	useEffect(() => {
		if (!data?.results) {
			return;
		}
		const newList = data?.results as IPokemon[];
		setList([...list, ...newList]);
	}, [data]);

	return [list, isLoading];
};

export const usePokemonDetail = (url: string): [PokemonDetail, boolean] => {
	const { data, isLoading } = get(url);
	return [data as PokemonDetail, isLoading];
};
