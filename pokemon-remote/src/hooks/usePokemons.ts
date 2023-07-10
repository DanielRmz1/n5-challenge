import { IPokemon, PokemonDetail } from "types/pokemon";
import { Uri, get } from "api/service";

export const usePokemonList = (offset: number = 0): [IPokemon[], boolean] => {
	const url = Uri.pokemonList(offset);
	const { data, isLoading } = get(url);
	return [data?.results as IPokemon[], isLoading];
};

export const usePokemonDetail = (url: string): [PokemonDetail, boolean] => {
	const { data, isLoading } = get(url);
	return [data as PokemonDetail, isLoading];
};
