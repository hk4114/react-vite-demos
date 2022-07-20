import { useRef, useLayoutEffect, useCallback } from "react";

export default function useEvent(handler: any) {
	const handlerRef = useRef(null);

	// 视图渲染完成后更新`handlerRef.current`指向
	useLayoutEffect(() => {
		handlerRef.current = handler;
	});

	// 用useCallback包裹，使得render时返回的函数引用一致
	return useCallback((...args: any) => {
		const fn: any = handlerRef.current;
		return fn(...args);
	}, []);
}
