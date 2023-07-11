import React from "react";
import { render, screen } from "utils/test-utils";
import Loader from ".";

test("Check Loader work correctly", () => {
	render(<Loader />);
	screen.getByTestId("loader");
});
