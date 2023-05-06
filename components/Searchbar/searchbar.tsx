"use client";

import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { ARROW_DOWN, ARROW_UP, ENTER, KEY_DOWN } from "@/constants/"
import useKeyPress from "@/hooks/useKeyPress";
import SearchResults from '@/components/SearchResults'
import { useRouter, usePathname } from "next/navigation";

import type { UntypedObject } from "@/types/"

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

const SearchBar = ({ options, numVisibleOptions = 5, placeholder, setUserSelected, className }: ISearchBarProps) => {
    const [filteredOptions, setFilteredOptions] = useState<UntypedObject[]>([]);
    const [userInput, setUserInput] = useState("");
    const [cursor, setCursor] = useState(0);
    const [hovered, setHovered] = useState<UntypedObject>();

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

    // Enter Press
    // Up Press
    // Down Press
    // Hover

    function onEnter(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === ENTER && filteredOptions.length) {
            cursor >= 0 ? setUserSelected(filteredOptions[cursor]) : setUserSelected(filteredOptions[0]);
            const nextRoute = filteredOptions[cursor].short;
            router.push(nextRoute);
        }
    }

    function onArrowUp(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === ARROW_UP && filteredOptions.length) {
            setCursor(prevState => 
                prevState > 0 ? prevState - 1 : 0
            );
        }
    }

    function onArrowDown(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === ARROW_DOWN && filteredOptions.length) {
            setCursor(prevState => 
                prevState < Math.min(filteredOptions.length, 5) - 1 ? prevState + 1 : prevState   
            );
        }
    }

    function onHover(result: any) {
        if (filteredOptions.length) {
            setCursor(filteredOptions.indexOf(result) || 0)
        }
    }

    function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
        onEnter(event);
        onArrowDown(event);
        onArrowUp(event);
    }

    return (
        <div className="relative">
            <input 
                autoFocus
                type="text" 
                className={`${className} px-4 py-2 text-sm bg-white rounded-md ring-2 ring-primary ring-offset-2 ring-offset-secondary hover:ring-tertiary duration-100 focus:outline-none`} 
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
                    onKeyDown={onKeyDown}
                    onHover={onHover}
                    setSelected={setUserSelected}
                />
            </div>
        </div>
    )
}

export default SearchBar;