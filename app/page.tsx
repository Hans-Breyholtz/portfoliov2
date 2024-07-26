"use client";
import Image from "next/image";
import Navbar from "./_components/Navbar";
import PersonalCard from "./_components/PersonalCard";


import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, CornerUpRightIcon, Share2Icon, LayoutDashboardIcon, RocketIcon } from "lucide-react";
 
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";



import { useTheme } from "next-themes";




import Hero from "./_components/Hero";
import Work from "./_components/Work";
import Projects from "./_components/Projects";
import Tools from "./_components/Tools";
import Contact from "./_components/Contact";


export default function Home() {
  const { theme } = useTheme();
  

  return (
    <div className="bg-black relative pt-10">
      <GridPattern
            width={40}
            height={30}
            x={-1}
            y={-1}
            className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
            )}
        />
      
      <div className="md:grid-cols-5 grid-cols-1 grid w-full max-w-[1024px] m-auto px-8 gap-2 relative">

        <section className="relative md:col-span-2">
          <PersonalCard />
        </section>

        <main className="w-full pt-6 flex flex-col space-y-48 md:col-span-3">
            {/** Hero */}
            <Hero />
            {/** Work Experience */}
            <Work />
            {/** Projects */}
            <Projects />
            {/** Tools */}
            <Tools />
            {/** Toughts */}

            {/** Contact */}
            <Contact />
        </main>

      </div>

      <footer className="h-[100px] text-white">
        
      </footer>
    </div>
  );
}
