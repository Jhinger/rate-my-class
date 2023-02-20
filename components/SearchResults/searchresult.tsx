import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

import type { UntypedObject } from '@/types/'
import { useRouter } from 'next/router';

interface ISearchResultProps {
    results: UntypedObject[];
    numResults: number;
    cursor: number;
    setHovered: Dispatch<SetStateAction<UntypedObject>>;
    setSelected: Dispatch<SetStateAction<UntypedObject>>;
    className?: string;
}

const SearchResult = ({ cursor, results, numResults, setHovered, setSelected, className, ...rest }: ISearchResultProps) => {
    const router = useRouter();

    const renderResults = results.slice(0, numResults).map((result, index) => {
            const cursorClass = cursor === index ? "bg-gray-200 text-black rounded-md" : "";
            const nextRoute = `${router.asPath}/` + (result.short ?? result.name);

            return (
                <div 
                    key={index} 
                    onMouseEnter={() => setHovered(result)} 
                    onClick={() => setSelected(result)} 
                    className={`${cursorClass} duration-100 px-2 py-3 indent-2 text-gray-500 hover:text-black hover:cursor-pointer hover:bg-gray-200 hover:rounded-md text-sm`}
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
                <div className={`${className} z-10 w-full bg-white mt-4 rounded-md ring-2 ring-primary ring-offset-2 ring-offset-secondary hover:ring-tertiary`}>
                    { renderResults } 
                </div>
            }
        </>
    )
}

export default SearchResult;