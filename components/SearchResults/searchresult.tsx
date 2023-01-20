import type { UntypedObject } from '@/types/'

interface ISearchResultProps {
    results: UntypedObject[];
    className?: string;
}

const SearchResult = ({ results, className }: ISearchResultProps) => {

    const renderResults = results.map((result, index) => 
        <div key={index}>
            { result.name ?? "Could not render" }
        </div>
    )

    return (
        <div className={`${className} `}>
            {results.length !== 0 && 
                renderResults
            }
        </div>
    )
}

export default SearchResult;