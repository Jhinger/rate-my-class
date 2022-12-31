import Image from 'next/image';
import logo from '@/static/logo-hero.svg'

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
        <header className="w-full h-[40rem] flex flex-col justify-center items-center border-2 border-red-500 border-solid">
            <div className="flex flex-col justify-center items-center relative -top-10">
                <div className="flex flex-row items-center">
                    <Image
                        className="unselectable"
                        src={logo}
                        width={40}
                        height={30}
                        quality={100}
                        alt=""
                        priority={true}
                    />
                    <h1 className="p-2 font-extrabold text-8xl tracking-tightest bg-gradient-to-r bg-clip-text text-transparent from-primary to-tertiary animate-gradient"> 
                        { title } 
                    </h1>
                </div>
                <h4 className="text-white font-extralight"> { subtitle } </h4>
            </div>
            <div className="search-bar-passed-in-as-child">
                { children }
            </div>
        </header>
    )
}

export default Hero;