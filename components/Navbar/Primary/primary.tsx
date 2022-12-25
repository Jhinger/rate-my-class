import Image from 'next/image';
import { useSession } from 'next-auth/react';

import logo from '@/static/logo.svg'
import Profile from '@/components/Button/Profile';
import SignIn from '@/components/Button/SignIn';

import type { StatusOptions } from '@/types';

const PrimaryNavbar = ({...props}) => {
    const { data: session, status } = useSession();

    const relevantStatusComponent = (status: StatusOptions) => {
        switch(status) {
            case "loading": {
                return <div>Loading</div>;
            }
            case "authenticated": {
                return <Profile />
            }
            case "unauthenticated": {
                return <SignIn />
            }
        }
    }

    const baseSocialURL = '/static/socials/';

    return (
        <div {...props} className="relative w-screen border-2 border-solid border-red-500 justify-center items-center">
            <nav className="flex justify-between items-center cursor-pointer">
                <Image 
                    src={logo}
                    width={55}
                    height={55}
                    alt="RateMyClass"
                />

                <div className="flex flex-row space-x-10">
                    <Image src={baseSocialURL + 'github.svg'} width={28} height={25} alt={'GitHub'} className="fill-primary hover:fill-white duration-100" priority={true} draggable={false}/>
                    <Image src={baseSocialURL + 'linkedin.svg'} width={28} height={25} alt={'LinkedIn'} className="fill-primary hover:fill-white duration-100" priority={true} draggable={false}/>
                    <Image src={baseSocialURL + 'instagram.svg'} width={28} height={25} alt={'Instagram'} className="fill-primary hover:fill-white duration-100" priority={true} draggable={false}/>
                </div>

                <ul className="flex flex-row space-x-10 text-primary">
                    <li className="hover:text-white duration-100">contact</li>
                    <li className="hover:text-white duration-100">about</li>
                </ul>

                { relevantStatusComponent(status) }
            </nav>
        </div>
    )
}

export default PrimaryNavbar;