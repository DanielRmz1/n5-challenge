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

export interface PokemonStats {
	names: {
		language: {
			name: string;
		};
		name: string;
	}[];
}

export interface LanguageProp {
	language?: string;
}
