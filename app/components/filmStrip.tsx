"use client"
import './filmStrip.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react';

import fantasticFourCarpet from '../../public/images/filmStrip/fantastic-four-carpet.jpg';
import godMic from '../../public/images/filmStrip/god-mic.jpg';
import fantasticFourCamOp from '../../public/images/filmStrip/fantastic-four-cam-op.jpg';
import PAEmmy from '../../public/images/filmStrip/PA-Emmy.jpg';
import emmyAndMoose from '../../public/images/filmStrip/emmy-and-moose.png';
import gaffer from '../../public/images/filmStrip/gaffer.jpg';
import standingIn from '../../public/images/filmStrip/standing-in.jpg';
import lockedIn from '../../public/images/filmStrip/locked-in.jpg';
import bigJoesFrame1 from '../../public/images/filmStrip/bigjoes-frame1.jpg';
import bigJoesFrame2 from '../../public/images/filmStrip/bigjoes-frame2.jpg';

const filmStripImages = [
    {
        image: fantasticFourCarpet,
        alt: `Emmy stands on a blue carpet in front of a Fantastic Four movie premiere billboard.`,
        caption: `Hey! Who let the Cam Op on the red carpet?`,
        align: 'center'
    },
    {
        image: godMic,
        alt: `Emmy sits at a desk in a camera operation control room, ready to speak into a microphone.`,
        caption: `They should have never given me a God mic`,
        align: 'center'
    },
    {
        image: fantasticFourCamOp,
        alt: `Emmy sits at a desk with both hands on the camera operation controls while looking at a screen displaying four camera perspectives, one including a shot of Pedro Pascal.`,
        caption: `Makin' my boy Pedro look good`,
        align: 'center'
    },
    {
        image: PAEmmy,
        alt: `walkie talkie with masking tape that reads "PA Emmy :)"`,
        caption: `Baby's first on-set walkie`,
        align: 'center'
    },
    {
        image: emmyAndMoose,
        alt: `Emmy sitting with Moose, her orange cat, in her lap while working at her laptop.`,
        caption: `My assistant Moose and I hard at work`,
        align: 'justify'
    },
    {
        image: gaffer,
        alt: `Emmy working on a lighting setup on set.`,
        caption: `Gaffin' and laughin'`,
        align: 'center'
    },
    {
        image: standingIn,
        alt: `looking at Emmy through a camera monitor`,
        caption: `Standing in like a champ`,
        align: 'center'
    },
    {
        image: lockedIn,
        alt: `Emmy looks at a computer monitor while operating multiple cameras`,
        caption: `#lockedin`,
        align: 'center'
    },
    {
        image: bigJoesFrame1,
        alt: `Emmy puts her hand up to her sunglasses, pausing in anticipation.`,
        caption: `Wait...`,
        align: 'center'
    },
    {
        image: bigJoesFrame2,
        alt: `Emmy pulls down her sunglasses, looking shocked.`,
        caption: `Woah...I'm in a commercial!`,
        align: 'center'
    },
]

export function FilmStripRow(){
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    
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
