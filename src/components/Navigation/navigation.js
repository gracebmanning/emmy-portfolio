import './navigation.css';
import { MdLocalMovies } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";


export default function Navigation(){
    return(
        <nav>
            <h1>Emmy Gardner</h1>
            <ul className='navList'>
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
            </ul>
        </nav>
    )
}