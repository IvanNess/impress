import React from 'react'

//import image from '../../images/all.jpg'

import './service-tile.scss'

const ServiceTile = ({stringCode, title, description})=>{
    return(
        <div className={`service-tile`}>
            {/* <div className={`image-wrapper ${stringCode}`}>
                <img src={image} alt=''/>
            </div> */}
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

export default ServiceTile