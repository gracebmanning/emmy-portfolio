import './home.css';
import headshot from '../../assets/headshot.jpg';

export default function Home(){
    return(
        <div className='container'>
            <div className='homeContent'>
                <img className='homeHeadshot' src={headshot} alt='Emmy holding a slate at a production' />
                <div className='homeText'>
                    <p>
                        hi, I'm <b>Emmy</b>!
                    </p>
                    <p>
                        welcome to my website. 
                        i am aspiring in the field of <b>digital and traditional media production</b> with a particular interest in <b>screenwriting</b> and <b>producing</b>. 
                        i have spent the past year working as a production assistant and operating cameras under several different production companies. 
                        if you click on the <a id='projectsLink' href='/projects'>projects</a> tab of this website, you'll find examples of some projects i've worked on. 
                        thanks for visiting!
                    </p>
                    <p>
                        outside of my work, i am also an avid media consumer myself. i love to spend time with my cat, hit up the local vintage, thrift, and oddities shops, and go hiking around LA. i have worked at several zoos and am passionate about animal care and environmental conservation. i will do just about anything for a can of diet coke. 
                    </p>
                    <p>
                        you can contact me with any inquiries at emmythegardner [@] gmail.com
                    </p>
                </div>
            </div>
        </div>
    )
}