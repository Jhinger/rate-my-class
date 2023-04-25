import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import Router from 'next/router';
import Link from 'next/link';

import logo from '@/static/logo.svg'
import { GithubIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';
import Profile from '@/components/Button/Profile';
import SignIn from '@/components/Button/SignIn';
import LoadingSpinner from '@/components/LoadingSpinner';
import Icon from '@/components/Icon';

import type { StatusOptions } from '@/types';

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
                    <Icon icon={<GithubIcon size={25}/>} href="#" className='unselectable text-primary hover:text-tertiary duration-150' />
                    <Icon icon={<LinkedinIcon size={25}/>} href="#" className='unselectable text-primary hover:text-tertiary duration-150' />
                    <Icon icon={<InstagramIcon size={25}/>} href="#" className='unselectable text-primary hover:text-tertiary duration-150' />
                </div>

                <ul className="flex flex-row space-x-10 text-primary font-medium invisible md:visible">
                    <li className="hover:text-tertiary duration-150 cursor-pointer">contact</li>
                    <li className="hover:text-tertiary duration-150 cursor-pointer">about</li>
                </ul>

                { relevantStatusComponent(status) }
            </nav>
        </div>
    )
}

export default PrimaryNavbar;