import { ChangeEvent, useEffect, useState } from "react";
import { ARROW_DOWN, ARROW_UP, ENTER } from "@/constants/"
import useKeyPress from "@/hooks/useKeyPress";
import { ValueOfType, UntypedObject } from "@/types/"

interface ISearchBarProps {

    /**
     * Options that we are searching through, for example schools or classes.
     */
    options: UntypedObject[];

    /**
     * Classes to append to search bar - width required.
     */
    className: string;

    /**
     * The number of visible options displayed to the user in the search results dropdown.
     * Default number is 5.
     */
    numVisibleOptions?: number;
};

type OptionKeys = keyof ValueOfType<Pick<ISearchBarProps, "options">>[number];

const SearchBar = ({ options, numVisibleOptions = 5, className }: ISearchBarProps) => {
    const [filteredOptions, setFilteredOptions] = useState<UntypedObject[]>()
    const [userInput, setUserInput] = useState("");
    const [selected, setSelected] = useState();
    const [cursor, setCursor] = useState(0);
    const [hovered, setHovered] = useState();

    const downPress = useKeyPress(ARROW_DOWN);
    const upPress = useKeyPress(ARROW_UP);
    const enterPress = useKeyPress(ENTER);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): undefined => {
        const input = e.target.value;
        setUserInput(input);

        if (!input.length) {
            setFilteredOptions([]);
            setCursor(0);
            return;
        }

        const newFilter = options.filter((option) => {
            for (const key in option) {
                if (option[key].toLowerCase().includes(input.toLowerCase())) {
                    return true;
                }
            }

            return false;
        });

        setFilteredOptions(newFilter);
    }

    useEffect(() => {
        console.log(filteredOptions);
    }, [filteredOptions]);
    

    return (
        <div>
            <input 
                autoFocus
                type="text" 
                className={`${className} px-4 py-2 bg-white rounded-md ring-2 ring-primary ring-offset-2 ring-offset-secondary hover:ring-tertiary duration-100 focus:outline-none`} 
                placeholder={`ex. 'Simon Fraser University' or 'SFU'`}
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchBar;