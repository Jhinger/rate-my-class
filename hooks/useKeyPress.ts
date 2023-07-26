import { useEffect, useState } from "react";
import { KEY_DOWN, KEY_UP } from "@/constants/";

interface IUpDown {
	key: string;
}

const useKeyPress = (targetKey: string) => {
	const [keyPressed, setKeyPressed] = useState(false);

	function downHandler({ key }: IUpDown): void {
		if (key === targetKey) {
			setKeyPressed(true);
		}
	}

	function upHandler({ key }: IUpDown): void {
		if (key === targetKey) {
			setKeyPressed(false);
		}
	}

	useEffect(() => {
		window.addEventListener(KEY_DOWN, downHandler);
		window.addEventListener(KEY_UP, upHandler);

		return () => {
			window.removeEventListener(KEY_DOWN, downHandler);
			window.removeEventListener(KEY_UP, upHandler);
		};
	});

	return keyPressed;
};

export default useKeyPress;
