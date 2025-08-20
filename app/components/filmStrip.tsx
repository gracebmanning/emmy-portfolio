"use client"
import './filmStrip.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react';

interface SanityFilmStripImage{
  _key: string;
  caption: string;
  alt: string;
  asset:{
    url:string;
  };
}

interface FilmStripProps{
  images: SanityFilmStripImage[];
}

export function FilmStripRow({ images }: FilmStripProps){
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
      {images.map((image) => (
        <figure key={image._key} className="film-strip-slide">
          <img src={image.asset.url} alt={image.alt} className="film-strip-image" />
          <figcaption className="film-strip-caption">{image.caption}</figcaption>
        </figure>
      ))}
    </Slider>
    </div>
  );
}

export function FilmStripColumn({ images }: FilmStripProps){
    return( 
        <div className='filmStripColumn'>
            <div className='scroll'>
                {images.map((image, index) => (
                    <div key={index} className='filmStrip filmStripItem'>
                        <img src={image.asset.url} alt={image.alt} />
                        <p className={`filmStripCaption center`}>{image.caption}</p>
                    </div>
                  ))}
            </div>
        </div>
    )
    
}
