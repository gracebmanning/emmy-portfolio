"use client"
import './filmStrip.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react';

import emmyAndMoose from '../../public/images/filmStrip/emmy-and-moose.png';
import bigJoesFrame1 from '../../public/images/filmStrip/bigjoes-frame1.jpg';
import bigJoesFrame2 from '../../public/images/filmStrip/bigjoes-frame2.jpg';
import camOperator from '../../public/images/filmStrip/cam-operator.jpg';
import gaffer from '../../public/images/filmStrip/gaffer.jpg';
import standingIn from '../../public/images/filmStrip/standing-in.jpg';
import PAEmmy from '../../public/images/filmStrip/PA-Emmy.jpg';
import lockedIn from '../../public/images/filmStrip/locked-in.jpg';
import hiking from '../../public/images/filmStrip/hiking.jpg';

const filmStripImages = [
    {
        image: bigJoesFrame1,
        alt: `Emmy puts her hand up to her, pausing in anticipation.`,
        caption: `wait...`,
        align: 'center'
    },
    {
        image: bigJoesFrame2,
        alt: `Emmy pulls down her sunglasses, looking shocked.`,
        caption: `woah!`,
        align: 'center'
    },
    {
        image: camOperator,
        alt: `Emmy sits at a camera operating station (table with knobs and buttons, computer monitors with camera displays).`,
        caption: `camera operation control room`,
        align: 'center'
    },
    {
        image: PAEmmy,
        alt: `walkie talkie with masking tape that reads "PA Emmy :)"`,
        caption: `:)`,
        align: 'center'
    },
    {
        image: emmyAndMoose,
        alt: `Emmy sitting with Moose, her orange cat, in her lap while working at her laptop.`,
        caption: `my diligent assistant Moose and i hard at work on this very website`,
        align: 'justify'
    },
    
    {
        image: gaffer,
        alt: `Emmy working on a lighting setup on set.`,
        caption: `gaffin' and laughin'`,
        align: 'center'
    },
    {
        image: standingIn,
        alt: `looking at Emmy through a camera monitor`,
        caption: `standing in like a champ`,
        align: 'center'
    },
    
    {
        image: lockedIn,
        alt: `Emmy looks at a computer monitor while operating multiple cameras`,
        caption: `#lockedin`,
        align: 'center'
    },
    {
        image: hiking,
        alt: `Emmy stands far away from the camera in front of a panoramic view of Los Angeles from the top of a mountain`,
        caption: `spot the emmy`,
        align: 'center'
    },
]

export function FilmStripRow(){
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function numSlidesToShow(width:number){
    if(width > 1400){
      return 4;
    } else if(width > 1000){
      return 3;
    } else{
      return 2;
    }
  }

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: numSlidesToShow(windowWidth),
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true,
    slide: 'figure',
    arrows: true,
  };
  console.log(settings.slidesToShow);

  return (
    <div className="filmStripNew filmStripRow">
      <Slider {...settings}>
      {filmStripImages.map((image, index) => (
        <figure key={index} className="film-strip-slide">
          <img src={image.image.src} alt={image.alt} className="film-strip-image" />
          <figcaption className="film-strip-caption">{image.caption}</figcaption>
        </figure>
      ))}
    </Slider>
    </div>
  );
}

export function FilmStripColumn(){
    return( 
        <div className='filmStripColumn'>
            <div className='scroll'>
                {filmStripImages.map((item, index) => {
                    return(
                    <div className='filmStrip filmStripItem' key={index}>
                        <img src={item.image.src} alt={item.alt} />
                        <p className={`filmStripCaption ${item.align}`}>{item.caption}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    )
    
}
