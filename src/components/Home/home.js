import './home.css';
import headshot from '../../assets/images/headshot.jpg';
import emmyAndMoose from '../../assets/images/emmy-and-moose.png';
import bigJoesFrame1 from '../../assets/images/bigjoes-frame1.jpg';
import bigJoesFrame2 from '../../assets/images/bigjoes-frame2.jpg';

export default function Home(){
    return(
        <div className='container homeContainer'>
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
                    </p>
                    <p>
                        outside of my work, i am also an avid media consumer myself. i love to spend time with my cat, hit up the local vintage, thrift, and oddities shops, and go hiking around LA. i have worked at several zoos and am passionate about animal care and environmental conservation. i will do just about anything for a can of diet coke. 
                    </p>
                    <p>
                        thanks for visiting my website!
                    </p>
                    <p>
                        you can contact me with any inquiries at emmythegardner [@] gmail.com
                    </p>
                </div>
            </div>
            <div className='filmStripRow filmStrip'>
                <div className='scroll'>
                    <div className='filmStripItem'>
                        <img src={emmyAndMoose} alt='Emmy sitting with Moose, her orange cat, in her lap while working at her laptop.' />
                        <p className='filmStripCaption captionJustify'>my diligent assistant Moose and i hard at work on this very website</p>
                    </div>
                    <div className='filmStripItem'>
                        <img src={bigJoesFrame1} alt='Emmy puts her hand up to her, pausing in anticipation.' />
                        <p className='filmStripCaption captionCenter'>wait...</p>
                    </div>
                    <div className='filmStripItem'>
                        <img src={bigJoesFrame2} alt='Emmy pulls down her sunglasses, looking shocked.' />
                        <p className='filmStripCaption captionCenter'>woah!</p>
                    </div>
                </div>
            </div>
            <div className='filmStripColumn'>
                <div className='scroll'>
                    <div className='filmStrip filmStripItem'>
                        <img src={emmyAndMoose} alt='Emmy sitting with Moose, her orange cat, in her lap while working at her laptop.' />
                        <p className='filmStripCaption captionJustify'>my diligent assistant Moose and i hard at work on this very website</p>
                    </div>
                    <div className='filmStrip filmStripItem'>
                        <img src={bigJoesFrame1} alt='Emmy puts her hand up to her, pausing in anticipation.' />
                        <p className='filmStripCaption captionCenter'>wait...</p>
                    </div>
                    <div className='filmStrip filmStripItem'>
                        <img src={bigJoesFrame2} alt='Emmy pulls down her sunglasses, looking shocked.' />
                        <p className='filmStripCaption captionCenter'>woah!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}