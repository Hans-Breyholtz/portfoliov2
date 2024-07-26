
import React from 'react'
import { useTheme } from "next-themes";

import { MagicCard } from "@/components/magicui/magic-card";
import BoxReveal from "@/components/magicui/box-reveal";



type Props = {}

const works = [
    {
        company: "Folkekraft AS test",
        jobTitle: "Driftsansvalig",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident reiciendis consectetur vero, laboriosam repudiandae adipisci! Ratione enim sequi odio sapiente provident nulla voluptas, quae eaque veritatis, error eos consequuntur id.",
        timeFrame: "Mar 2023 - Present",
    },
    {
        company: "Folkekraft AS2",
        jobTitle: "Driftsansvalig",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident reiciendis consectetur vero, laboriosam repudiandae adipisci! Ratione enim sequi odio sapiente provident nulla voluptas, quae eaque veritatis, error eos consequuntur id.",
        timeFrame: "Mar 2023 - Present",
    },
    {
        company: "Folkekraft AS1",
        jobTitle: "Driftsansvalig",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident reiciendis consectetur vero, laboriosam repudiandae adipisci! Ratione enim sequi odio sapiente provident nulla voluptas, quae eaque veritatis, error eos consequuntur id.",
        timeFrame: "Mar 2023 - Present",
    },
]

const Work = (props: Props) => {
    const { theme } = useTheme();
  return (
    <section id='experience' className="min-h-screen">
          
        <BoxReveal boxColor={"#FFF"} duration={0.5}>
            <h1 className="uppercase text-5xl  md:text-8xl text-white mb-12 font-[800]">Work <br /> <span className="text-[#b6b4bd33]">Experience</span></h1>
        </BoxReveal>
            <div className="flex flex-col gap-3">

                {
                    works.map((work, index) => (
                        <MagicCard 
                        key={index}
                        className="items-center justify-center shadow-2xl flex flex-row w-full bg-transparent rounded-xl border-0 p-4 relative hover:bg-gray-900 cursor-pointer transition-all ease-in-out hover:scale-105 hover:shadow-sm hover:z-10 h-[200px]"
                            gradientColor={theme === "dark" ? "#FF0000" : "#b6b4bd33"}>
                            <p className="text-2xl font-bold text-white">{work.company} | {work.jobTitle}</p>
                            <p className="text-md text-white pr-10 my-4 hidden md:block">{work.description}</p>
                            <p className="text-sm text-white mt-4 md:mt-0">{work.timeFrame}</p>
                        </MagicCard>

                    ))
                }

                

            </div>
          
          </section>
  )
}

export default Work