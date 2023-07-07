import { useState, useTransition } from "react";

export default (): [boolean, () => void] => {
	const [value, set] = useState(false);
	const [, startTransition] = useTransition();
	const toggle = (): void => {
		startTransition(() => {
			set((prev) => !prev);
		});
	};
	return [value, toggle];
};
