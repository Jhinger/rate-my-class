import type { UntypedObject } from '@/types/'

interface ISearchResultProps {
    results: UntypedObject[];
    className?: string;
}

const SearchResult = ({ results, className, ...rest }: ISearchResultProps) => {

    const renderResults = results.map((result, index) => 
        <div key={index} {...rest} className="duration-100 px-2 py-3 indent-2 text-gray-500 hover:text-black hover:cursor-pointer hover:bg-gray-200 hover:rounded-md text-sm" >
            { result.name }
        </div>
    )

    return (
        <>
            {results.length !== 0 && 
                <div className={`${className} w-full bg-white mt-4 rounded-md ring-2 ring-primary ring-offset-2 ring-offset-secondary hover:ring-tertiary`}>
                    { renderResults } 
                </div>
            }
        </>
    )
}

export default SearchResult;