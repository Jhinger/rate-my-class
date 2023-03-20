import Image from "next/image";
import logo from '@/static/logo-hero.svg'
import Link from "next/link";

interface IFooterProps {
    className?: string;
}

const Footer = ({ className }: IFooterProps ) => {
    const currentYear = new Date().getFullYear();

    return (
        <div className={`${className} text-white flex flex-col justify-center items-center`}>
            <div className="w-max flex flex-col justify-center items-center border-b-2 border-solid border-primary">
                <div className="flex flex-row">
                    <div className="text-primary flex flex-col mx-8">
                        <span className="font-black my-2">SITE</span>
                        <Link href='/about' className="font-extralight text-sm hover:text-white duration-100">about</Link>
                        <Link href="/contact" className="font-extralight text-sm hover:text-white duration-100">contact</Link>
                        <Link href="/faq" className="font-extralight text-sm hover:text-white duration-100">FAQ</Link>
                    </div>
                    <div className="text-primary flex flex-col mx-8">
                        <span className="font-black my-2">LEGAL</span>
                        <Link href="/terms" className="font-extralight text-sm hover:text-white duration-100">terms & conditions</Link>
                        <Link href="privacy-policy" className="font-extralight text-sm hover:text-white duration-100">privacy policy</Link>
                        <Link href="site-guidelines" className="font-extralight text-sm hover:text-white duration-100">site guidelines</Link>
                    </div>
                    <div className="text-primary flex flex-col mx-8">
                        <span className="font-black my-2">FOLLOW US</span>
                        <Link href="#" className="font-extralight text-sm hover:text-white duration-100">LinkedIn</Link>
                        <Link href="#" className="font-extralight text-sm hover:text-white duration-100">GitHub</Link>
                        <Link href="#" className="font-extralight text-sm hover:text-white duration-100">Instagram</Link>
                        <Link href="#" className="font-extralight text-sm hover:text-white duration-100">Twitter</Link>
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
            <div className="text-primary text-xs mt-4">   
                Copyright &copy; 2022 - {currentYear} RateMyClass
            </div>
        </div>
    )
}

export default Footer;