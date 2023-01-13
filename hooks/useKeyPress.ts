import { useEffect, useState } from "react";
import { KEY_DOWN, KEY_UP } from '@/constants/'

interface IUpDown {
    key: string;
}

const useKeyPress = (targetKey: string) => {
    const [keyPressed, setKeyPressed] = useState(false);

    useEffect(() => {
        function downHandler({ key }: IUpDown) {
            if (key === targetKey) {
                setKeyPressed(true);
            }
        }
    
        function upHandler({ key }: IUpDown) {
            if (key === targetKey) {
                setKeyPressed(true);
            }
        }

        window.addEventListener(KEY_DOWN, downHandler);
        window.addEventListener(KEY_UP, upHandler);

        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        }
    }, [targetKey]);

    return keyPressed;
}

export default useKeyPress;