import Image from 'next/image';
import logo from '@/static/logo-hero.svg'
import SearchBar from '@/components/SearchBar';
import isEmpty from '@/util/isEmpty';
import { useEffect, useState } from 'react';
import Router from 'next/router';

import type { UntypedObject } from '@/types';
import type { Class, School } from '@prisma/client';

interface IHeroProps {
    schools: (Partial<School>)[];
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
}

const Hero = ({ 
        title = "RateMyClass",
        subtitle = "Search for your School:",
        schools,
        children
    }: IHeroProps) => {
    
    const [userSchool, setUserSchool] = useState<UntypedObject>({});
    const [userClass, setUserClass] = useState<UntypedObject>({});
    const [userClassOptions, setUserClassOptions] = useState<Class[]>([]);

    /* useEffect(() => {
        async function getUserClasses(): Promise<void> {
            const res = await fetch('/api/classes', {
                method: "POST",
                body: JSON.stringify({ school: userSchool })
            })
    
            if (res.ok) {
                const json = await res.json();
                console.log(json);
                setUserClassOptions(json);
            } else {
                console.error("Failed to fetch user's school classes: " + res.statusText);
            }
        }

        getUserClasses();
    }, [userSchool]); */
    
    return (
        <header className="w-full h-[40rem] flex flex-col justify-center items-center">
            <div className="flex flex-col relative -top-10">
                <div className="flex flex-col justify-center items-center">
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
                        <h1 className="p-2 font-extrabold text-8xl tracking-tightest bg-gradient-to-r bg-clip-text text-transparent from-primary via-tertiaryAccent to-tertiary animate-gradient"> 
                            { title } 
                        </h1>
                    </div>
                    <h4 className="text-white font-light mt-4"> { subtitle } </h4>
                </div>
                <div className="m-4 relative">
                    <SearchBar options={schools} setUserSelected={setUserSchool} className="w-[60rem]" />
                </div>
                <div className="text-white text-sm font-extralight text-center">
                    Can&lsquo;t find your school? Request it to be <a href='#request' className='text-blue-400 hover:text-tertiary hover:cursor-pointer'>added here</a>.
                </div>
            </div>
        </header>
    )
}

export default Hero;