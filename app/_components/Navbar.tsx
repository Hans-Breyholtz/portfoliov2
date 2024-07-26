import React from 'react'

import { Dock, DockIcon } from "@/components/magicui/dock";

import { HouseIcon, NotebookIcon, User, BriefcaseBusinessIcon, FileCode2, WrenchIcon, NotebookPenIcon } from 'lucide-react';

export type IconProps = React.HTMLAttributes<SVGElement>;

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="sticky top-0">
      <Dock direction="middle" className='mt-0'>
        <DockIcon>
          <HouseIcon color='white' />
        </DockIcon>
        <DockIcon>
          <BriefcaseBusinessIcon color='white' /> 
        </DockIcon>
        <DockIcon>
          <FileCode2 color='white' /> 
        </DockIcon>
        <DockIcon>
          <WrenchIcon color='white' /> 
        </DockIcon>
        <DockIcon>
          <NotebookPenIcon color='white' /> 
        </DockIcon>
      </Dock>
    </nav>
  );
}
 


export default Navbar