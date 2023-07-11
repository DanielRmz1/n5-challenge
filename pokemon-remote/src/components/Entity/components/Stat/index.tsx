import LanguageContext from "context/LanguageContext";
import { usePokemonStat } from "hooks/usePokemons";
import React, { ReactNode, FC, useContext } from "react";
import { FormattedMessage } from "react-intl";

interface Props {
	description?: ReactNode;
	value: number | string;
	url?: string;
}

const Stat: FC<Props> = ({ description = null, value, url = null }) => {
	const [data, isLoading] = usePokemonStat(url);
	const { language } = useContext(LanguageContext);

	if (isLoading) {
		return <FormattedMessage id="app.loading" />;
	}

	const getDescription = () => {
		if (!url) {
			return description;
		}
		if (data) {
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
