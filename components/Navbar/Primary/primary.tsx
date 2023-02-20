import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

import logo from '@/static/logo.svg'
import Profile from '@/components/Button/Profile';
import SignIn from '@/components/Button/SignIn';
import LoadingSpinner from '@/components/LoadingSpinner';

import type { StatusOptions } from '@/types';
import Router from 'next/router';

const PrimaryNavbar = () => {
    const { data: session, status } = useSession();

    const relevantStatusComponent = (status: StatusOptions) => {
        switch(status) {
            case "loading": {
                return <LoadingSpinner className="relative right-7" />
            }
            case "authenticated": {
                return <Profile session={session} onClickTask={() => signOut()} className="relative right-7"/>
            }
            case "unauthenticated": {
                return <SignIn onClickTask={() => signIn()} className="relative right-4" />
            }
        }
    }

    const goHome = () => {
        Router.push('/');
    }

    const baseSocialURL = '/static/socials/';

    return (
        <div className="relative w-full mt-2 mb-2">
            <nav className="max-w-[2100px] flex justify-between center items-center">
                <Image 
                    className="unselectable cursor-pointer"
                    onClick={goHome}
                    src={logo}
                    width={55}
                    height={55}
                    alt="RateMyClass"
                />

                <div className="flex flex-row space-x-10 invisible md:visible">
                    <Image className="unselectable cursor-pointer" src={baseSocialURL + 'github.svg'} width={28} height={25} alt={'GitHub'} priority={true} />
                    <Image className="unselectable cursor-pointer" src={baseSocialURL + 'linkedin.svg'} width={28} height={25} alt={'LinkedIn'} priority={true} />
                    <Image className="unselectable cursor-pointer" src={baseSocialURL + 'instagram.svg'} width={28} height={25} alt={'Instagram'} priority={true} />
                </div>

                <ul className="flex flex-row space-x-10 text-primary invisible md:visible">
                    <li className="hover:text-white duration-100 cursor-pointer">contact</li>
                    <li className="hover:text-white duration-100 cursor-pointer">about</li>
                </ul>

                { relevantStatusComponent(status) }
            </nav>
        </div>
    )
}

export default PrimaryNavbar;