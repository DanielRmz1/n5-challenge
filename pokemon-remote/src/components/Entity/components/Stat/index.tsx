import { usePokemonStat } from "hooks/usePokemons";
import React, { ReactNode, FC } from "react";
import { FormattedMessage } from "react-intl";
import { LanguageProp } from "types/pokemon";

interface Props {
	description?: ReactNode;
	value: number | string;
	url?: string;
}

const Stat: FC<Props & LanguageProp> = ({
	description = null,
	value,
	url = null,
	language,
}) => {
	const [data, isLoading] = usePokemonStat(url);

	if (isLoading) {
		return <FormattedMessage id="app.loading" />;
	}

	const getDescription = () => {
		if (!url) {
			return description;
		}
		if (data) {
			console.log(language);
			const remote = data.names.find(
				(names) => names.language.name === language
			);
			return remote?.name;
		}
	};

	return (
		<div>
			<strong>{getDescription()}: </strong>
			{value}
		</div>
	);
};

export default Stat;
