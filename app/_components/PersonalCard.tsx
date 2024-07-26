"use client";
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { LinkedinIcon, AtSignIcon, InstagramIcon, PhoneCallIcon, } from 'lucide-react'

import { BorderBeam } from "@/components/magicui/border-beam";
 
import BoxReveal from "@/components/magicui/box-reveal";

import { Dock, DockIcon } from "@/components/magicui/dock";

import hanseirik from "@/public/img/hanseirik.png"
import ShimmerButton from "@/components/magicui/shimmer-button";
 
export type IconProps = React.HTMLAttributes<SVGElement>;


import { HouseIcon, NotebookIcon, User, BriefcaseBusinessIcon, FileCode2, WrenchIcon, NotebookPenIcon } from 'lucide-react';

type Props = {}

const PersonalCard = (props: Props) => {
  return (
    <section className='pt-10 sticky top-0'>
        
        <aside className='md:max-w-[284px] bg-white p-8 rounded-xl flex flex-col items-center gap-2 relative'>
            <BorderBeam />
            <div className='h-[260px] max-w-[196px] bg-black rounded-xl m-auto w-full overflow-hidden relative'>
                {/** Profile */}
                <Image
                src={hanseirik}
                alt='Hans-Eirik Breyholtz-Mott'
                fill={true}
                />
                <BorderBeam />
            </div>
            <BoxReveal boxColor={"#000000"} duration={0.5}>
                <h3 className='mx-auto uppercase text-center text-xl font-bold'>Hans-Eirik <br /> Breyholtz-Mott</h3>
            </BoxReveal>

            <BoxReveal boxColor={"#000000"} duration={0.5}>
                <p className='text-sm text-center mt-4 max-w-[365px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. rnatur quidem enim magni vel tempora beatae cumque!</p>
            </BoxReveal>

            {/**
                <Dock direction="middle" className='max-w-[180px] border-[#0B00CF]'>
                    <DockIcon>
                        <Link href={"/"}>
                            <LinkedinIcon className='cursor-pointer' color='#0B00CF' />
                        </Link>
                    </DockIcon>
                    <DockIcon>
                        <Link href={"/"}>
                            <AtSignIcon  className='cursor-pointer' color='#0B00CF' />
                        </Link>
                    </DockIcon>
                    <DockIcon>
                        <Link href={"https://www.instagram.com/hanseirik_breyholtzmott/"}>
                            <InstagramIcon  className='cursor-pointer' color='#0B00CF' />
                        </Link>
                    </DockIcon>
                    <DockIcon>
                        <Link href={"/"}>
                            <PhoneCallIcon  className='cursor-pointer' color='#0B00CF' />
                        </Link>
                    </DockIcon>
                </Dock>
                
             */}
             <Dock direction="middle" className='mt-5 max-w-[180px]'>
                
                <DockIcon>
                    <a href="#home">
                        <HouseIcon color='black' />
                    </a>
                </DockIcon>
                <DockIcon>
                    <a href="#experience">
                        <BriefcaseBusinessIcon color='black' /> 
                    </a>
                </DockIcon>
                <DockIcon>
                    <a href="#projects">
                        <FileCode2 color='black' />
                    </a>
                </DockIcon>
                <DockIcon>
                    <a href="#tools">
                        <WrenchIcon color='black' /> 
                    </a>
                </DockIcon>
                
            </Dock>
           
            <a href="#contact">
                <ShimmerButton className="shadow-2xl mt-6 w-full max-w-32">
                    
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                        Let's chat
                    </span>
                
                </ShimmerButton>
            </a>
            
            
        </aside>
    </section>
    
  )
}

export default PersonalCard