import React from 'react'
import Slide from '../../../../Containers/Slide/Slide'
import Wrapper from '../../../../HOC/Wrapper'
import {Slideshow } from '../../../../Containers/Slide/Pics/Pics'
const Header = () => {
    return (
        <Wrapper>
            <div>
                <Slide slides={Slideshow} />
            </div>
        </Wrapper>
    )
}

export default Header