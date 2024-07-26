import React from 'react'
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";
import BoxReveal from "@/components/magicui/box-reveal";
import Image from 'next/image';
import { Badge } from "@/components/ui/badge"

//Images
import folkekraft from "@/public/img/folkekraft.png"

type Props = {}

const projects = [
    {
        projectName: "Folkekraft AS",
        id: 1,
        role: "Driftsansvarlig1",
        img: folkekraft,
        skills: [
            "business development",
            "strategy",
            "system architecture",
            "project leader",
            "market analytics"
        ]
    },
    {
        projectName: "Folkekraft AS",
        role: "Driftsansvarlig2",
        id: 12,
        img: folkekraft,
        skills: [
            "business development",
            "strategy",
            "system architecture",
            
        ]
    },
    {
        projectName: "Folkekraft AS",
        role: "Driftsansvarlig3",
        id: 123,
        img: folkekraft,
        skills: [
            "skills",
            "strategy",
            "system architecture",
            "system architecture",
            
        ]
    },
]

const Projects = (props: Props) => {
    const { theme } = useTheme();
  return (
    <section id='projects' className="min-h-screen">
        <BoxReveal boxColor={"#FFF"} duration={0.5}>
            <h1 className="uppercase text-5xl  md:text-8xl text-white font-[800] my-12">Featured <br /> <span className="text-[#b6b4bd33]">projects</span></h1>
        </BoxReveal>

        <div className="flex flex-col gap-3">

        {
            projects.map((project) => (
                <MagicCard key={project.id}
                className="cursor-pointer shadow-2xl w-full bg-transparent rounded-xl border-0  hover:bg-gray-900 transition-all ease-in-out hover:scale-105 hover:shadow-sm hover:z-10 h-fit"
                gradientColor={theme === "dark" ? "#FF0000" : "#b6b4bd33"}
                >
                
                    <div className="grid grid-cols-5 gap-5 w-full text-white p-4 items-center">
                        <div className="col-span-2 h-[110px] max-w-[110px] w-full  rounded-lg overflow-hidden relative ">
                            <Image 
                            src={project.img}
                            alt={project.projectName}
                            fill={true}
                            />
                        </div>
                        
                        <div className="col-span-3 flex flex-col gap-3 w-full">
                            <p className="text-2xl font-bold text-white">{project.projectName}{project.id}</p>
                            <p className="text-md text-white">{project.role}</p>
                            <div className="text-sm text-white flex flex-row gap-3 flex-wrap">{project.skills.map((skill) => (
                                <Badge variant="secondary" className='uppercase hidden md:block'>{skill}</Badge>
                            ))}</div>
                        </div>
                    </div>
                
                    
                </MagicCard>
            ))

           
        }

        {
            /**
             *
             * <MagicCard key={project.id}
                    className="cursor-pointer shadow-2xl w-full bg-transparent rounded-xl border-0  hover:bg-gray-900 transition-all ease-in-out hover:scale-105 hover:shadow-sm hover:z-10 h-fit"
                    gradientColor={theme === "dark" ? "#FF0000" : "#b6b4bd33"}
                    >
                    
                        <div className="flex flex-row gap-5 w-full text-white p-4 items-center">
                        <div className="h-[110px] max-w-[110px] w-full  rounded-lg overflow-hidden relative col-span-1 ">
                            <Image 
                            src={project.img}
                            alt={project.projectName}
                            fill={true}
                            />
                        </div>
                        <div className=" flex flex-col gap-3 w-full">
                            <p className="text-2xl font-bold text-white">{project.projectName}{project.id}</p>
                            <p className="text-md text-white">{project.role}</p>
                            <div className="text-sm text-white flex flex-row gap-3 flex-wrap">{project.skills.map((skill) => (
                                <Badge variant="secondary" className='uppercase'>{skill}</Badge>
                            ))}</div>
                        </div>
                        </div>
                    
                        
                    </MagicCard>
             
             */
        }


        </div>

    </section>
  )
}

export default Projects