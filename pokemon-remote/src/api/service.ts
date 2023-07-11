import useSWRImmutable from "swr/immutable";

interface UriCollection {
	pokemonList: (offset: number) => string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Uri: UriCollection = {
	pokemonList: (offset) =>
		`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`,
};

export const get = (url: string | null) => useSWRImmutable(url, fetcher);
