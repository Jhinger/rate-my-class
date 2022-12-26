import Image from "next/image"

import shapeleft from "@/static/shapeleft.svg"

interface IHeroProps {
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
}

const Hero = ({ 
        title = "RateMyClass",
        subtitle = "Search for your School:", 
        children
    }: IHeroProps) => {
    return (
        <header className="w-full h-[40rem] border-2 border-red-500 border-solid">
            <div className="" />
            <div className="" />

            <h1 className=""> { title } </h1>
            <h4 className=""> { subtitle } </h4>
            <div className="">
                { children }
            </div>
        </header>
    )
}

export default Hero;