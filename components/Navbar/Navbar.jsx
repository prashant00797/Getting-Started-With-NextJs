import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center  bg-blue-300 h-20 w-full p-2.5">
      <Link href={"/"}>Intro</Link>
      <div className="flex gap-9">
        <Link href={"/work"}>Work</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
