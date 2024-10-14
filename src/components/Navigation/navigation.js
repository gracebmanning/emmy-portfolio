import './navigation.css';
import { useState } from 'react';
import resume from '../../assets/resume.pdf';
import { MdLocalMovies } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoDocumentText } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

export default function Navigation(){
    const [expanded, setExpanded] = useState(false);
    function navMenuExpand(){
        setExpanded(!expanded);
    }
    return(
        <nav>
            <h1>Emmy Gardner</h1>
            <ul className={expanded ? 'navListExpanded' : 'navList'}>
                <li className='navItem'>
                    <a href="/">
                        <MdLocalMovies className='navIcon' />
                        home
                    </a>
                </li>
                <li className='navItem'>
                    <a href="/projects">
                        <BiSolidCameraMovie className='navIcon' />
                        projects
                    </a>
                </li>
                <li className='navItem'>
                    <a href={resume} target='_blank' rel='noreferrer'>
                        <IoDocumentText className='navIcon' />
                        resumé
                    </a>
                </li>
            </ul>
            <IoMenu className='navIcon navMenuIcon' onClick={navMenuExpand} />
        </nav>
    )
}