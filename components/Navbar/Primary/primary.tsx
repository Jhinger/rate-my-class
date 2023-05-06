"use client";

import Image from 'next/image';
import { signIn, signOut } from 'next-auth/react';
import Router from 'next/router';

import logo from '@/static/logo.svg'
import { GithubIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';
import Profile from '@/components/Button/Profile';
import SignIn from '@/components/Button/SignIn';
import Icon from '@/components/Icon';

import type { Session } from 'next-auth';

interface IPrimaryNavbarProps {
    session: Session | null;
}

const PrimaryNavbar = ({ session }: IPrimaryNavbarProps) => {

    const relevantStatusComponent = (session: Session | null) => {
        if (session?.user !== undefined) {
            return <Profile session={session} onClickTask={() => signOut()} className="relative right-7"/>
        }
        return <SignIn onClickTask={() => signIn()} className="relative right-4" />
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
                    width={50}
                    height={50}
                    alt="RateMyClass"
                />

                <div className="flex flex-row space-x-10 invisible md:visible">
                    <Icon icon={<GithubIcon size={22}/>} href="#" className='unselectable text-primary hover:text-tertiary duration-150' />
                    <Icon icon={<LinkedinIcon size={22}/>} href="#" className='unselectable text-primary hover:text-tertiary duration-150' />
                    <Icon icon={<InstagramIcon size={22}/>} href="#" className='unselectable text-primary hover:text-tertiary duration-150' />
                </div>

                <ul className="flex flex-row space-x-10 text-primary font-medium invisible md:visible">
                    <li className="hover:text-tertiary duration-150 cursor-pointer">contact</li>
                    <li className="hover:text-tertiary duration-150 cursor-pointer">about</li>
                </ul>

                { relevantStatusComponent(session) }
            </nav>
        </div>
    )
}

export default PrimaryNavbar;