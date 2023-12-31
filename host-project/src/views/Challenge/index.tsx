import React, { FC, Suspense, lazy } from "react";
import Button from "components/Button";
import styled from "styled-components";
import useToggle from "hooks/useToggle";
import Header from "components/Header";
import Loader from "components/Loader";
import Pane from "components/Pane";
import useStore from "hooks/useStore";
import { FormattedMessage } from "react-intl";

// Lazy remotes
const Pokemon = lazy(() => import("remotePokemon/Pokemon") as any);
const RickAndMorty = lazy(
	() => import("remoteRickAndMorty/RickAndMorty") as any
);

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	.container__remotes_wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 90%;
		gap: 2rem;
	}

	.container__remotes_wrapper--center {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 2rem;
		color: var(--secondary-color);
		overflow-x: hidden;
		max-height: calc(100vh - 18rem);
	}
`;

const Challenge: FC = () => {
	const [showPokemon, togglePokemon] = useToggle();
	const [showRickMorty, toggleRickMorty] = useToggle();
	const language = useStore((state) => state.language);

	const renderMessage = () => <FormattedMessage id="app.clickAboveButton" />;

	return (
		<Container>
			<Header />
			<div className="container__remotes_wrapper">
				<Pane
					data-testid="pokemon-container"
					className="container__remotes_wrapper--center"
					header={
						<Button secondary onClick={togglePokemon}>
							<FormattedMessage id="app.pokemons" />
						</Button>
					}>
					{showPokemon ? (
						<Suspense fallback={<Loader />}>
							<Pokemon language={language.code} />
						</Suspense>
					) : (
						renderMessage()
					)}
				</Pane>
				<Pane
					data-testid="rick-and-morty-container"
					className="container__remotes_wrapper--center"
					header={
						<Button secondary onClick={toggleRickMorty}>
							<FormattedMessage id="app.rickAndMorty" />
						</Button>
					}>
					{showRickMorty ? (
						<Suspense fallback={<Loader />}>
							<RickAndMorty />
						</Suspense>
					) : (
						renderMessage()
					)}
				</Pane>
			</div>
		</Container>
	);
};

export default Challenge;
