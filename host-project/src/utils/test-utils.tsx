import React, { FC, ReactNode } from "react";
import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";
import { IntlProvider } from "react-intl";
import translations from "translations";
import { vi } from "vitest";

afterEach(() => {
	cleanup();
	vi.resetAllMocks();
});

function customRender(
	ui: React.ReactElement,
	{ locale = "en", ...options } = {}
) {
	const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
		return (
			<IntlProvider locale="en" messages={translations.en}>
				{children}
			</IntlProvider>
		);
	};
	return render(ui, {
		// wrap provider(s) here if needed
		wrapper: Wrapper,
		...options,
	});
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
