import React, { FC, Suspense, lazy, useTransition, useState } from "react";
import Button from "components/Button";
import styled from "styled-components";
import useToggle from "hooks/useToggle";
import Header from "components/Header";
import Loader from "components/Loader";
import Pane from "components/Pane";

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
		max-height: 50vh;
	}

	.container__remotes_wrapper--center {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		color: var(--secondary-color);
	}
`;

const Challenge: FC = () => {
	const [showPokemon, togglePokemon] = useToggle();
	const [showRickMorty, toggleRickMorty] = useToggle();

	const renderMessage = () => <div>Click above button to render content</div>;

	return (
		<Container>
			<Header />
			<div className="container__remotes_wrapper">
				<Pane
					className="container__remotes_wrapper--center"
					header={
						<Button secondary onClick={togglePokemon}>
							Pokemons
						</Button>
					}>
					{showPokemon ? (
						<Suspense fallback={<Loader />}>
							<Pokemon />
						</Suspense>
					) : (
						renderMessage()
					)}
				</Pane>
				<Pane
					className="container__remotes_wrapper--center"
					header={
						<Button secondary onClick={toggleRickMorty}>
							Rick And Morty
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
