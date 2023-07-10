export interface IPokemon {
	name: string;
	url: string;
}

export interface PokemonDetail {
	name: string;
	weight: number;
	height: number;
	sprites: {
		front_default: string;
	};
	base_experience: number;
	stats: {
		base_stat: number;
		stat: {
			name: string;
			url: string;
		};
	}[];
}
