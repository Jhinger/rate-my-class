"use client";

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

import type { UntypedObject } from '@/types/'

interface ISearchResultProps {
    results: UntypedObject[];
    numResults: number;
    cursor: number;
    onHover: (result: any) => void;
    className?: string;
}

const SearchResult = ({ 
        cursor, 
        results, 
        numResults, 
        onHover, 
        className 
    }: ISearchResultProps) => {
    const pathname = usePathname();

    const renderResults = results.slice(0, numResults).map((result, index) => {
            const cursorClass = cursor === index ? "bg-gray-200 text-black rounded-md" : "";
            const nextRoute = result.short ?? result.name;
            const path = pathname === '/' ? "" : pathname;

            return (
                <div 
                    key={index} 
                    onMouseEnter={() => onHover(result)}
                    className={`${cursorClass} duration-100 px-2 py-2 text-sm indent-2 text-gray-500 hover:text-black hover:cursor-pointer hover:bg-gray-200 hover:rounded-md`}
                >
                    <Link href={`${path}/${nextRoute}`}>
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