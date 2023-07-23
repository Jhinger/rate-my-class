"use client";

import Image from "next/image";
import logo from '@/static/logo.svg'
import { useRouter } from "next/navigation";

const Home = () => {
    const router = useRouter();

    const goHome = () => {
        router.push('/');
    }

    return (
        <div>
                <Image 
                    className="relative left-3 unselectable cursor-pointer"
                    onClick={goHome}
                    src={logo}
                    width={50}
                    height={50}
                    alt="RateMyClass"
                />
        </div>
    )
}

export default Home;