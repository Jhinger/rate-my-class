import Image from "next/image";
import logo from '@/static/logo-hero.svg'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-secondary text-white h-[25rem] flex flex-col justify-end items-center">
            <div className="w-max flex flex-col justify-center items-center border-b-2 border-solid border-primary">
                <div className="flex flex-row">
                    <div className="text-primary flex flex-col mx-8">
                        <span className="font-black my-2">SITE</span>
                        <a href="#" className="font-extralight text-sm hover:text-white duration-100">about</a>
                        <a href="#" className="font-extralight text-sm hover:text-white duration-100">contact</a>
                        <a href="#" className="font-extralight text-sm hover:text-white duration-100">FAQ</a>
                    </div>
                    <div className="text-primary flex flex-col mx-8">
                        <span className="font-black my-2">LEGAL</span>
                        <a href="#" className="font-extralight text-sm hover:text-white duration-100">terms & conditions</a>
                        <a href="#" className="font-extralight text-sm hover:text-white duration-100">privacy policy</a>
                        <a href="#" className="font-extralight text-sm hover:text-white duration-100">site guidelines</a>
                    </div>
                    <div className="text-primary flex flex-col mx-8">
                        <span className="font-black my-2">FOLLOW US</span>
                        <a href="#" className="font-extralight text-sm hover:text-white duration-100">LinkedIn</a>
                        <a href="#" className="font-extralight text-sm hover:text-white duration-100">GitHub</a>
                        <a href="#" className="font-extralight text-sm hover:text-white duration-100">Instagram</a>
                        <a href="#" className="font-extralight text-sm hover:text-white duration-100">Twitter</a>
                    </div>
                </div>
                <div className="flex flex-row items-center my-4">
                    <Image
                        className="unselectable"
                        src={logo}
                        width={15}
                        height={15}
                        quality={100}
                        alt=""
                        priority={true}
                    />
                    <div className="pr-2 font-extrabold text-4xl tracking-tightest bg-gradient-to-r bg-clip-text text-transparent from-primary via-tertiaryAccent to-tertiary animate-gradient"> 
                        RateMyClass
                    </div>
                </div>
            </div>
            <div className="text-primary text-xs my-4">   
                Copyright &copy; 2022 - {currentYear} RateMyClass
            </div>
        </div>
    )
}

export default Footer;