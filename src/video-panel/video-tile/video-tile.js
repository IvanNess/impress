import React, {useEffect, useState} from 'react'
import classNames from 'classnames'

import image from'../../images/all.jpg'

import './video-tile.scss'

const VideoTile = ({stringCode, type, filteringVideoType})=>{
    const [slitIn, setSlitIn] = useState(false)

    const videoTileClassNames = classNames({
        "video-tile": true, 
        [stringCode]: true,
        'slit-in-vertical': slitIn
    })

    useEffect(()=>{
        console.log(stringCode, filteringVideoType)
        setSlitIn(true)
        setTimeout(()=>{
            setSlitIn(false)
        },500)
    }, [stringCode, filteringVideoType])

    return(
        <div className={`${videoTileClassNames}`}>
            <div className={`image-wrapper ${stringCode}`}>
                <img src={image} alt=''/>
            </div>
        </div>
    )
}

export default VideoTile