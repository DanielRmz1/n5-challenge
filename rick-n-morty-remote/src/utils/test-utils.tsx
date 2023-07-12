import React, { FC, ReactNode } from "react";
import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";
import { IntlProvider } from "react-intl";
import english from "./stubs/en.json";
import LanguageContext from "context/LanguageContext";

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
			<LanguageContext.Provider value={{ language: "en" }}>
				<IntlProvider locale="en" messages={english}>
					{children}
				</IntlProvider>
			</LanguageContext.Provider>
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
