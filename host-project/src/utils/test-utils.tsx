import React, { FC, ReactNode } from "react";
import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";
import { IntlProvider } from "react-intl";
import translations from "translations";
import useStore from "hooks/useStore";

afterEach(() => {
	cleanup();
	vi.resetAllMocks();
});

function customRender(
	ui: React.ReactElement,
	{ locale = "en", ...options } = {}
) {
	const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
		const { code } = useStore((state) => state.language);
		return (
			<IntlProvider locale={code} messages={translations[code]}>
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
