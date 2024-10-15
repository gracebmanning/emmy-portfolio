import './home.css';
import headshot from '../../assets/images/headshot.jpg';
import { emmyAndMoose, bigJoesFrame1, bigJoesFrame2, camOperator, gaffer, standingIn, PAEmmy, lockedIn, hiking, } from '../../assets/filmStrip';

const filmStripImages = [
    {
        image: emmyAndMoose,
        alt: `Emmy sitting with Moose, her orange cat, in her lap while working at her laptop.`,
        caption: `my diligent assistant Moose and i hard at work on this very website`,
        align: 'captionJustify'
    },
    {
        image: bigJoesFrame1,
        alt: `Emmy puts her hand up to her, pausing in anticipation.`,
        caption: `wait...`,
        align: 'captionCenter'
    },
    {
        image: bigJoesFrame2,
        alt: `Emmy pulls down her sunglasses, looking shocked.`,
        caption: `woah!`,
        align: 'captionCenter'
    },
    {
        image: camOperator,
        alt: `Emmy sits at a camera operating station (table with knobs and buttons, computer monitors with camera displays).`,
        caption: `camera operation control room`,
        align: 'captionCenter'
    },
    {
        image: gaffer,
        alt: `Emmy working on a lighting setup on set.`,
        caption: `gaffin' and laughin'`,
        align: 'captionCenter'
    },
    {
        image: standingIn,
        alt: `looking at Emmy through a camera monitor`,
        caption: `standing in like a champ`,
        align: 'captionCenter'
    },
    {
        image: PAEmmy,
        alt: `walkie talkie with masking tape that reads "PA Emmy :)"`,
        caption: `:)`,
        align: 'captionCenter'
    },
    {
        image: lockedIn,
        alt: `Emmy looks at a computer monitor while operating multiple cameras`,
        caption: `#lockedin`,
        align: 'captionCenter'
    },
    {
        image: hiking,
        alt: `Emmy stands far away from the camera in front of a panoramic view of Los Angeles from the top of a mountain`,
        caption: `spot the emmy`,
        align: 'captionCenter'
    },
]


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
                    {filmStripImages.map((item, index) => {
                        return(
                        <div className='filmStripItem' key={index}>
                            <img src={item.image} alt={item.alt} />
                            <p className={`filmStripCaption ${item.align}`}>{item.caption}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className='filmStripColumn'>
                <div className='scroll'>
                    {filmStripImages.map((item, index) => {
                        return(
                        <div className='filmStrip filmStripItem' key={index}>
                            <img src={item.image} alt={item.alt} />
                            <p className={`filmStripCaption ${item.align}`}>{item.caption}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}