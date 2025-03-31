"use client"
import { useState } from 'react';
import { MdLocalMovies } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoDocumentText } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import Link from 'next/link';
import { IconType } from 'react-icons';

function NavItem({text, href, Icon}:{text:string, href:string, Icon:IconType}){
    return(
        <li className="md:mt-0 md:mb-0 md:ml-5 md:mr-5 mt-2.5 mb-2.5 mr-3.5 ml-3.5">
            <Link href={href} className="flex flex-row justify-center items-center scale-100 ease-in duration-200 hover:scale-105 hover:ease-out hover:text-accent">
                <Icon className='text-2xl md:m-0 mr-1' />
                {text}
            </Link>
        </li>
    )
}

export default function Navbar(){
    const [expanded, setExpanded] = useState(false);
    function navMenuExpand(){
        setExpanded(!expanded);
    }
    return(
        <nav className="w-screen flex flex-row justify-between items-center pl-[20px] pr-[20px] md:m-0 mr-[5px] ml-[5px] border-b-1 border-text">
            <Link className='text-text' href='/'>
                <h1>Emmy Gardner</h1>
            </Link>
            <ul className={expanded ? 'navListExpanded' : 'navList'}>
                <NavItem text="home" href="/" Icon={MdLocalMovies} />
                <NavItem text="projects" href="/projects" Icon={BiSolidCameraMovie} />
                <NavItem text="resumé" href="/resume" Icon={IoDocumentText} />
            </ul>
            <IoMenu className='text-2xl navIcon navMenuIcon' onClick={navMenuExpand} />
        </nav>
    )
}