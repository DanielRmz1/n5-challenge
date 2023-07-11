import React from "react";
import { render, screen } from "utils/test-utils";
import Button from "components/Button";

test("Check render", () => {
	render(<Button onClick={() => console.log("clicked")}>Text</Button>);
	expect(screen.getByRole("button")).toHaveTextContent("Text");
	screen.debug();
});
