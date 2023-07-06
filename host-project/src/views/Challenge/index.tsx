import Button from "components/Button";
import React, { FC } from "react";

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
	</div>
);

export default Challenge;
