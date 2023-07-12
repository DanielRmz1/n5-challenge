import { useEffect, RefObject, useRef } from "react";

export default function useIntersection(
	ref: RefObject<Element>,
	callback: () => void
) {
	const prevY = useRef<number>(0);
	const handleObserver: IntersectionObserverCallback = ([entry]) => {
		const positionY = entry.boundingClientRect.y;
		if (prevY.current > positionY && entry.isIntersecting) {
			callback && callback();
		}
		prevY.current = positionY;
	};

	const observer = useRef(
		new IntersectionObserver(handleObserver, {
			root: null,
			rootMargin: "0px",
			threshold: 1,
		})
	);

	useEffect(() => {
		ref.current && observer.current.observe(ref.current);
		return () => {
			observer.current.disconnect();
		};
	});
}
