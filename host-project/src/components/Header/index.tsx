import React, { FC } from "react";
import styled from "styled-components";
import ToggleButton from "components/ToggleButton";

const StyledHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--secondary-color);
	width: 100%;

	.header__title {
		flex-grow: 1;
		font-size: 1.2rem;
		color: var(--primary-color);
		justify-content: center;
		display: flex;
	}

	.header__intl_toggle {
		padding: 0 1rem;
	}
`;

const Header: FC = () => (
	<StyledHeader>
		<div className="header__title">
			<h1 role="title">N5 Challenge</h1>
		</div>
		<div className="header__intl_toggle">
			<ToggleButton />
		</div>
	</StyledHeader>
);

export default Header;
