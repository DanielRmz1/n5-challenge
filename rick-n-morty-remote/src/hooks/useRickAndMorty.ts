import { Character, CharactersResponse } from "types/rickAndMorty";
import { Uri, get } from "api/service";
import { useState, useEffect } from "react";

export const useCharacterList = (page: number = 0): [Character[], boolean] => {
	const [list, setList] = useState<Character[]>([]);
	const url = Uri.getCharacters(page);
	const {
		data,
		isLoading,
	}: { data: CharactersResponse; isLoading: boolean } = get(url);

	useEffect(() => {
		if (!data) {
			return;
		}
		const newList = data?.results;
		setList([...list, ...newList]);
	}, [data]);

	return [list, isLoading];
};
