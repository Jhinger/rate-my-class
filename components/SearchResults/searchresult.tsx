"use client";

import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { usePathname } from 'next/navigation';

import type { UntypedObject } from '@/types/'

interface ISearchResultProps {
    results: UntypedObject[];
    numResults: number;
    cursor: number;
    setHovered: Dispatch<SetStateAction<UntypedObject>>;
    setSelected: Dispatch<SetStateAction<UntypedObject>>;
    className?: string;
}

const SearchResult = ({ cursor, results, numResults, setHovered, setSelected, className, ...rest }: ISearchResultProps) => {
    const pathname = usePathname();

    const renderResults = results.slice(0, numResults).map((result, index) => {
            const cursorClass = cursor === index ? "bg-gray-200 text-black rounded-md" : "";
            const nextRoute = `${pathname}/` + (result.short ?? result.name);

            return (
                <div 
                    key={index} 
                    onMouseEnter={() => setHovered(result)} 
                    onClick={() => setSelected(result)} 
                    className={`${cursorClass} duration-100 px-2 py-2 text-sm indent-2 text-gray-500 hover:text-black hover:cursor-pointer hover:bg-gray-200 hover:rounded-md`}
                    {...rest} 
                >
                    <Link href={nextRoute}>
                        { result.name }
                    </Link>
                </div>
            )
        }
    )

    return (
        <>
            {results.length !== 0 && 
                <div className={`${className} z-10 w-full backdrop-blur-lg bg-white mt-4 rounded-md ring-2 ring-primary ring-offset-2 ring-offset-secondary hover:ring-tertiary`}>
                    { renderResults } 
                </div>
            }
        </>
    )
}

export default SearchResult;