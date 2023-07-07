import Button from "components/Button";
import React, { FC } from "react";
import Pokemon from "remotePokemon/Pokemon";
import RickAndMorty from "remoteRickAndMorty/RickAndMorty";

const Challenge: FC = () => (
	<div>
		<div>Challenge</div>
		<div>Buttons</div>
		<div>
			<Button>Primary</Button>
			<Button secondary>Secondary</Button>
			<Button secondary disabled>
				Disabled
			</Button>
			<Button disabled>Disabled 2</Button>
		</div>
		<Pokemon />
		<RickAndMorty />
	</div>
);

export default Challenge;
