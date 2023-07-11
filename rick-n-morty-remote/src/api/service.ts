import useSWRImmutable from "swr/immutable";

interface UriCollection {
	getCharacters: (page: number) => string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Uri: UriCollection = {
	getCharacters: (page) =>
		`https://rickandmortyapi.com/api/character/?page=${page}`,
};

export const get = (url: string | null) => useSWRImmutable(url, fetcher);
