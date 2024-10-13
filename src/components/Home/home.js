import './home.css';
import headshot from '../../assets/headshot.jpg';

export default function Home(){
    return(
        <div className='container'>
            <div className='homeContent'>
                <img className='homeHeadshot' src={headshot} alt='image of Emmy holding a slate' />
                <div className='homeText'>
                    <p>
                        hi, I'm Emmy!
                    </p>
                    <p>
                        welcome to my website, where you'll find examples of some projects I've worked on. Thanks for visiting!
                    </p>
                    <p>contact me at emmythegardner [@] gmail.com</p>
                </div>
            </div>
        </div>
    )
}