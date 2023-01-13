
interface TemporarySchoolProp {
    name: string;
    short: string;
}

interface ISearchBarProps {
    options: TemporarySchoolProp[];
}

const SearchBar = ({ options }: ISearchBarProps) => {
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