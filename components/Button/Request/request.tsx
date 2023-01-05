import { useState } from "react";

const Request = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col">
            <button className="font-semibold bg-primary rounded-md px-24 py-4 hover:bg-tertiaryAccent duration-150">
                REQUEST A SCHOOL / CLASS
            </button>
            {isOpen && 
                <div className="">
                    <span>Enter a school and optionally a class:</span>
                    <input type="text" placeholder="ex. Stanford - CS107" />
                </div>
            }
        </div>
    )
}

export default Request;