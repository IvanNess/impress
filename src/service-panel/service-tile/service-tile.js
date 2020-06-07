import React from 'react'

import image from '../../images/all.jpg'

import './service-tile.scss'

const ServiceTile = ({stringCode, title, description})=>{
    return(
        <div className={`service-tile`}>
            <div className={`image-wrapper ${stringCode}`}>
                <img src={image} alt=''/>
            </div>
            <div className={`title`}>
                {title}
            </div>
            <div className={`description`}>
                {description}
            </div>
        </div>
    )
}

export default ServiceTile