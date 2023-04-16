import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { ARROW_DOWN, ARROW_UP, ENTER } from "@/constants/"
import useKeyPress from "@/hooks/useKeyPress";
import SearchResults from '@/components/SearchResults'
import { useRouter } from "next/router";

import type { ValueOfType, UntypedObject, Maybe } from "@/types/"

interface ISearchBarProps {

    /**
     * Options that we are searching through, for example schools or classes.
     */
    options: UntypedObject[];

    /**
     * Set selected option to passed in useState variable.
     */
    setUserSelected: Dispatch<SetStateAction<UntypedObject>>

    /**
     * Set input placeholder.
     */
    placeholder: string;

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

const SearchBar = ({ options, numVisibleOptions = 5, placeholder, setUserSelected, className }: ISearchBarProps) => {
    const [filteredOptions, setFilteredOptions] = useState<UntypedObject[]>([]);
    const [userInput, setUserInput] = useState("");
    const [cursor, setCursor] = useState(0);
    const [hovered, setHovered] = useState<UntypedObject>();

    const downPress = useKeyPress(ARROW_DOWN);
    const upPress = useKeyPress(ARROW_UP);
    const enterPress = useKeyPress(ENTER);

    const router = useRouter();

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

    // TODO: Remove later and remove unneccesary dependency array variables.
    useEffect(() => {
        console.log(filteredOptions);
    }, [filteredOptions]);

    useEffect(() => {
        console.log('Cursor Index: ' + cursor);
    }, [cursor]);

    useEffect(() => {
        if (filteredOptions.length && downPress) {
            setCursor(prevState => 
                prevState < Math.min(filteredOptions.length, 5) - 1 ? prevState + 1 : prevState   
            );
        }
    }, [filteredOptions.length, downPress]);

    useEffect(() => {
        if (filteredOptions.length && upPress) {
            setCursor(prevState => 
                prevState > 0 ? prevState - 1 : prevState    
            );
        }
    }, [filteredOptions.length, upPress])

    useEffect(() => {
        if (filteredOptions.length && enterPress) {
            cursor >= 0 ? setUserSelected(filteredOptions[cursor]) : setUserSelected(filteredOptions[0]);
            const nextRoute = filteredOptions[cursor].short ?? filteredOptions[cursor].name;
            router.push(`${router.asPath}/${nextRoute}`)
        }
    }, [filteredOptions, cursor, router, enterPress, setUserSelected]);

    useEffect(() => {
        if (filteredOptions.length && hovered) {
            setCursor(filteredOptions.indexOf(hovered) || 0);
        }
    }, [filteredOptions, hovered]);

    return (
        <div className="relative">
            <input 
                autoFocus
                type="text" 
                className={`${className} px-4 py-2 bg-white rounded-md ring-2 ring-primary ring-offset-2 ring-offset-secondary hover:ring-tertiary duration-100 focus:outline-none`} 
                placeholder={placeholder}
                value={userInput}
                onChange={handleChange}
            />
            <div>
                <SearchResults 
                    className="absolute"
                    cursor={cursor} 
                    results={filteredOptions} 
                    numResults={numVisibleOptions} 
                    setHovered={setHovered}
                    setSelected={setUserSelected}
                />
            </div>
        </div>
    )
}

export default SearchBar;