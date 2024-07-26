import React from 'react'
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from 'next/image';

import { MagicCard } from "@/components/magicui/magic-card";
import BoxReveal from "@/components/magicui/box-reveal";

//Images
import nextjs from "@/public/img/nextjs.png"
import figma from "@/public/img/figma.png"
import flutterflow from "@/public/img/flutterflow.png"
import chatgpt from "@/public/img/chatgpt.png"
import notion from "@/public/img/notion.png"
import nodejs from "@/public/img/nodejs.png"

type Props = {}

const tools = [
    {
      name: "Next.js",
      body: "React framework",
      url: "https://nextjs.org",
      img: nextjs
    },
    {
      name: "Notion",
      body: "Productivity Tool",
      url: "https://www.notion.so/",
      img: notion
    },
    {
      name: "Flutterflow",
      body: "App development tool",
      url: "https://flutterflow.io",
      img: flutterflow
    },
    {
      name: "Figma",
      body: "Design Tool",
      url: "https://www.figma.com/",
      img: figma
    },
    {
      name: "ChatGPT",
      body: "AI Assistant",
      url: "https://chat.openai.com/",
      img: chatgpt
    },
    {
        name: "Nodejs",
        body: "Javascript enviroment",
        url: "https://nodejs.org/en",
        img: nodejs
      }
  
  ]

const Tools = (props: Props) => {
    const { theme } = useTheme();
  return (
    <section id='tools' className="">
        <BoxReveal boxColor={"#FFF"} duration={0.5}>
            <h1 className="uppercase text-5xl  md:text-8xl text-white font-[800] my-12">Primary <br /> <span className="text-[#b6b4bd33]">tools</span></h1>
        </BoxReveal>
          
          
            <div className="grid grid-cols-1  md:grid-cols-2 gap-2">

            {tools.map((tool) => (
              <Link href={tool.url} key={tool.url}>
                <MagicCard
                
                className="cursor-pointer shadow-2xl w-full bg-transparent rounded-xl border-0  hover:bg-gray-900 transition-all ease-in-out hover:scale-105 hover:shadow-sm hover:z-10 h-fit"
                gradientColor={theme === "dark" ? "#FF0000" : "#b6b4bd33"}
                >
                
                <div className="flex flex-row gap-5 w-full text-white p-4">
                <div className="h-[50px] w-[50px]  rounded-md overflow-hidden relative">
                    <Image
                    src={tool.img}
                    alt={tool.name}
                    fill={true}
                    />
                </div>
                    <div className="flex flex-col justify-center">
                    <p className="text-lg font-medium">{tool.name}</p>
                    <p className="text-sm">{tool.body}</p>
                    </div>
                </div>
                
                    
                    </MagicCard>
                </Link>
            ))}


 
              

            </div>
    </section>
  )
}

export default Tools