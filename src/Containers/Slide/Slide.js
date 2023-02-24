import React, { useState } from "react";
import {Slideshow} from "./Pics/Pics";
import { BiLeftArrow } from 'react-icons/bi'
import { BiRightArrow } from 'react-icons/bi'
import classes from './Slide.module.css'

const Slide = ({ slides }) => {


    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : length - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    console.log(Slideshow)
    return (
        
        <section className={classes.slider}>
            <BiLeftArrow className={classes.leftArrow} onClick={prevSlide} />
            <BiRightArrow className={classes.rightArrow} onClick={nextSlide} />
            {Slideshow.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'}
                        key={index}>

                        {index === current && (
                            <img src={slide.image} alt='clothes' className={classes.image} />
                            
                        )}
                    </div>
                )
            })}
        </section>
        
    )
}

export default Slide