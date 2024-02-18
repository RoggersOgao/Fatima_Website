import React from "react";
import { ModeToggle } from "../global/ModeToggle";
import { UserButton } from "@clerk/nextjs";

type Props = {};

function Nav({}: Props) {
  return (
    
    <nav className="flex gap-5 items-center justify-end pr-4 py-2 sticky top-0 backdrop-blur-md z-10">
    <div>
      <ModeToggle />
    </div>
    <div>
      <UserButton />
    </div>
  </nav>
  
  );
}

export default Nav;
