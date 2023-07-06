import React, { FC } from "react";
import styled from "styled-components";

interface StyleButtonProps {
	secondary: boolean;
	disabled: boolean;
}

const StyledButton = styled.button<StyleButtonProps>`
	border: none;
	outline: none;
	font-size: 1rem;
	padding: 0.75rem 1.5rem;
	font-weight: 500;
	border-radius: 0.25rem;
	cursor: pointer;

	${(props) =>
		props.disabled &&
		`opacity: 0.4; user-select: none; pointer-events: none;`}

	background-color: var(
		${(props) => (props.secondary ? "--accent-color" : "--primary-color-100")}
	);
	color: var(
		${(props) =>
			props.secondary ? "--primary-color" : "--secondary-text-color"}
	);

	&:hover {
		background-color: var(
			${(props) =>
				props.secondary ? "--accent-color-100" : "--primary-color-200"}
		);
	}

	&:active {
		background-color: var(
			${(props) =>
				props.secondary ? "--accent-color-200" : "--primary-color-300"}
		);
	}
`;

interface ButtonProps {
	secondary?: boolean;
	children: string;
	disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
	secondary = false,
	children,
	disabled = false,
}) => (
	<StyledButton secondary={secondary} disabled={disabled}>
		{children}
	</StyledButton>
);

export default Button;
