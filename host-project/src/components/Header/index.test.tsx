import React from "react";
import Header from ".";
import { render, screen } from "utils/test-utils";

vi.mock("components/ToggleButton", () => {
	return {
		default: () => <div data-testid="toggle-button-id" />,
	};
});

test("Check Header component has the correct elements", () => {
	render(<Header />);

	expect(screen.getByRole("title")).toHaveTextContent("N5 Challenge");
	screen.getByTestId("toggle-button-id");
});
