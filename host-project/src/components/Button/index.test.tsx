import React from "react";
import { fireEvent, render, screen, waitFor } from "utils/test-utils";
import Button from "components/Button";
import { vi } from "vitest";

test("Check render", async () => {
	const fn = vi.fn();
	render(<Button onClick={fn}>Text</Button>);
	const button = screen.getByRole("button");
	expect(button).toHaveTextContent("Text");

	fireEvent.click(button);

	await waitFor(() => expect(fn).toHaveBeenCalled());
});
