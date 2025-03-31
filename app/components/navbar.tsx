"use client"
import { useState } from 'react';
import { MdLocalMovies } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoDocumentText } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import Link from 'next/link';

export default function Navbar(){
    const [expanded, setExpanded] = useState(false);
    function navMenuExpand(){
        setExpanded(!expanded);
    }
    return(
        <nav className="w-screen flex flex-row justify-between items-center pl-[20px] pr-[20px]">
            <Link className='navTitle' href='/'>
                <h1>Emmy Gardner</h1>
            </Link>
            <ul className={expanded ? 'navListExpanded' : 'navList'}>
                <li className='navItem'>
                    <Link href="/">
                        <MdLocalMovies className='navIcon' />
                        home
                    </Link>
                </li>
                <li className='navItem'>
                    <Link href="/projects">
                        <BiSolidCameraMovie className='navIcon' />
                        projects
                    </Link>
                </li>
                <li className='navItem'>
                    <Link href='/resume' target='_blank' rel='noreferrer'>
                        <IoDocumentText className='navIcon' />
                        resumé
                    </Link>
                </li>
            </ul>
            <IoMenu className='navIcon navMenuIcon' onClick={navMenuExpand} />
        </nav>
    )
}