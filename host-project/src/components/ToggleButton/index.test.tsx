import React from "react";
import { fireEvent, render, screen, waitFor } from "utils/test-utils";
import ToggleButton from ".";

test("Check ToggleButton component works correctly", async () => {
	render(<ToggleButton />);
	const englishBtn = screen.getByRole("button", { name: /english/i });
	const spanishBtn = screen.getByRole("button", { name: /spanish/i });

	// Switch language to spanish
	fireEvent.click(spanishBtn);

	await waitFor(() => {
		screen.getByRole("button", { name: /inglés/i });
		screen.getByRole("button", { name: /español/i });
	});

	// Switch language to english
	fireEvent.click(englishBtn);

	await waitFor(() => {
		screen.getByRole("button", { name: /english/i });
		screen.getByRole("button", { name: /spanish/i });
	});
});
