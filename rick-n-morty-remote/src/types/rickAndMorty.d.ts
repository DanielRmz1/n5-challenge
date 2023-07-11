export interface Character {
	name: string;
	species: string;
	origin: {
		name: string;
	};
	location: {
		name: string;
	};
	image: string;
}

export interface CharactersResponse {
	info: {
		pages: number;
	};
	results: Character[];
}
