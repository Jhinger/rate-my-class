import { useState } from "react";
import { ARROW_DOWN, ARROW_UP, ENTER } from "@/constants/"
import useKeyPress from "@/hooks/useKeyPress";

interface TemporarySchoolProp {
    name: string;
    short: string;
}

interface ISearchBarProps {
    options: TemporarySchoolProp[];
}

const SearchBar = ({ options }: ISearchBarProps) => {
    const [userInput, setUserInput] = useState("");
    const [selected, setSelected] = useState();
    const [cursor, setCursor] = useState();
    const [hovered, setHovered] = useState();

    const downPress = useKeyPress(ARROW_DOWN);
    const upPress = useKeyPress(ARROW_UP);
    const enterPress = useKeyPress(ENTER);
    

    return (
        <div>
            <input 
                autoFocus
                type="text" 
                className="w-[60rem] px-4 py-2 bg-white rounded-md ring-2 ring-primary ring-offset-2 ring-offset-secondary hover:ring-tertiary duration-100 focus:outline-none" 
                placeholder={`ex. 'Simon Fraser University' or 'SFU'`}
            />
        </div>
    )
}

export default SearchBar;