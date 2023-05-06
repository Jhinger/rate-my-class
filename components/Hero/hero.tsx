"use client";

import Image from 'next/image';
import logo from '@/static/logo-hero.svg'
import SearchBar from '@/components/SearchBar';
import { useState } from 'react';

import type { UntypedObject } from '@/types';
import type { School } from '@prisma/client';

interface IHeroProps {
    schools: (Partial<School>)[];
    title?: string;
    subtitle?: string;
}

const Hero = ({ 
        title = "RateMyClass",
        subtitle = "Search for your School:",
        schools,
    }: IHeroProps) => {
    
    const [userSchool, setUserSchool] = useState<UntypedObject>({});
    
    return (
        <header className="w-full h-[35rem] flex flex-col justify-center items-center">
            <div className="flex flex-col relative -top-10">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row items-center">
                        <Image
                            className="unselectable"
                            src={logo}
                            width={35}
                            height={30}
                            quality={100}
                            alt=""
                            priority={true}
                        />
                        <h1 className="px-2 font-extrabold text-[5.5rem] tracking-tightest bg-gradient-to-r bg-clip-text text-transparent from-primary via-tertiaryAccent to-tertiary animate-gradient"> 
                            { title } 
                        </h1>
                    </div>
                    <h5 className="text-white text-sm font-base"> { subtitle } </h5>
                </div>
                <div className="m-4 relative">
                    <SearchBar options={schools} setUserSelected={setUserSchool} placeholder={`ex. 'Simon Fraser University' or 'SFU'`} className="w-[60rem]" />
                </div>
                <div className="text-white text-xs font-extralight text-center">
                    Can&lsquo;t find your school? Request it to be <a href='#request' className='text-blue-400 hover:text-tertiary hover:cursor-pointer'>added here</a>.
                </div>
            </div>
        </header>
    )
}

export default Hero;