import React from 'react'

import image from '../../images/all.jpg'

import './videotype.scss'

const Videotype = ({stringCode, title, description})=>{
    return (
        <div className={`videotype ${stringCode}`}>
            <div className={`image-wrapper ${stringCode}`}>
                <img src={image} alt=''/>
            </div>
            <div className={`title`}>
                <h3>
                    {title}
                </h3>
            </div>
            <div className={`description`}>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Videotype