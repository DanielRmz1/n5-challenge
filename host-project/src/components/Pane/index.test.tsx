import React from "react";
import { render, screen } from "utils/test-utils";
import Pane from ".";

test("Pane component works correctly", () => {
	render(
		<Pane header={<div data-testid="pane-header" />}>
			<div data-testid="pane-body" />
		</Pane>
	);
	// Check pane renders body and header
	screen.getByTestId("pane-header");
	screen.getByTestId("pane-body");
});
