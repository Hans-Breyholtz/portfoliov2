"use client";
import React from "react"

//lib
import { cn } from "@/lib/utils";

//Magic UI
import Marquee from "@/components/magicui/marquee";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import AnimatedBeamMultipleOutputDemo from "@/components/magicui/examples/animated-beam-multiple-output"

//Icons
import { LayoutDashboardIcon, RocketIcon } from "lucide-react";


const files = [
    {
      name: "bitcoin.pdf",
      body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
    },
    {
      name: "finances.xlsx",
      body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
    },
    {
      name: "logo.svg",
      body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
    },
    {
      name: "keys.gpg",
      body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
    },
    {
      name: "seed.txt",
      body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
    },
  ];
  
const features = [
{
    Icon: LayoutDashboardIcon,
    name: "Strategy",
    description: "Every project I undertake is guided by a strategic plan.",
    href: "#contact",
    cta: "Get in touch",
    background: (
    <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
    >
        {files.map((f, idx) => (
        <figure
            key={idx}
            className={cn(
            "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
        >
            <div className="flex flex-row items-center gap-2">
            <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                {f.name}
                </figcaption>
            </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
        </figure>
        ))}
    </Marquee>
    ),
    className: "col-span-3 lg:col-span-1 h-[240px]",
},
{
    Icon: RocketIcon,
    name: "Quick to launch",
    description: "Launch fast and test more",
    href: "#contact",
    cta: "Get in touch",
    background: (
    <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
    className: "col-span-3 lg:col-span-2",
},

];

const experiences = [
    {
        number: 3,
        text: "years of experience"
    },
    {
        number: 5,
        text: "projects work on"
    },
    {
        number: 5,
        text: "Number of clients"
    }
]

type Props = {}

const Hero = (props: Props) => {
  return (
    <section id="home" className="snap-center min-h-screen">
        <BoxReveal boxColor={"#FFF"} duration={0.5}>
            <h1 className="uppercase text-5xl  md:text-8xl text-white font-[800] ">Business <br /> <span className="text-[#b6b4bd33]">developer</span> </h1>
        </BoxReveal>

        <BoxReveal boxColor={"#FFF"} duration={0.5}>
            <p className="text-[#998f8f] mt-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus saepe odio, doloribus, natus quibusdam dolor molestiae mollitia dignissimos minus aperiam quia eaque voluptates architecto est. Suscipit qui quis enim quibusdam!</p>
        </BoxReveal>
              
              
        <div className="flex flex-row max-w-[365px] w-full justify-between my-12">

            {
                experiences.map((experience)=>(

                    <div className="flex flex-col justify-center" key={experience.text}>
                        <p className="font-[700] text-white text-7xl">+<NumberTicker className="font-[700] text-white text-7xl" value={experience.number} /></p>
                        <BoxReveal boxColor={"#FFF"} duration={0.5}>
                            <p className="text-[#998f8f] text-md uppercase text-wrap">{experience.text}</p>
                        </BoxReveal>
                    </div>

                ))
            }
        
            
            

        </div>

        <BentoGrid className="lg:grid-rows-1 space-y-1 hidden md:block">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>

    </section>
  )
}

export default Hero