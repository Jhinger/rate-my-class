import { useState } from "react";

const Request = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [request, setRequest] = useState("");

    const updateFormVisibility = () => {
        setIsOpen(!isOpen);
    }

    const updateRequest = (newValue: string) => {
        setRequest(newValue);
    }

    const stopPropagation = (event: React.MouseEvent<HTMLFormElement>)  => {
        event.stopPropagation();
    }

    return (
        <div className="flex flex-col justify-center items-center" onClick={updateFormVisibility}>
            <button className="font-semibold bg-primary rounded-md px-24 py-4 hover:bg-tertiaryAccent duration-150">
                REQUEST A SCHOOL / CLASS
            </button>
            {isOpen && 
                <form onClick={stopPropagation} className="flex flex-col bg-primary p-2 m-2 w-full rounded-md">
                    <label htmlFor="request" className="m-2 font-extralight text-sm">Enter a school and optionally a class:</label>
                    <input 
                        id="request" 
                        className="rounded-sm p-2 m-2"
                        value={request} 
                        type="text" 
                        placeholder="ex. Stanford - CS107" 
                        onChange={(e) => updateRequest(e.target.value)}
                        autoFocus
                    />
                </form>
            }
        </div>
    )
}

export default Request;