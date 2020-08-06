import React, { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import image from '../../images/spriteVideos.jpg'
import play from '../../images/play.svg'

import './video-tile.scss'

const VideoTile = ({ stringCode, type, filteringVideoType }) => {
    const [slitIn, setSlitIn] = useState(false)
    const [show, setShow] = useState(false)
    const [appear, setAppear] = useState(false)

    const ref = useRef(null)

    window.addEventListener('scroll', () => {
        if (ref.current && document.documentElement.clientHeight > ref.current.getBoundingClientRect().y) {
            setAppear(true)
        }
    })

    const videoTileClassNames = classNames({
        "video-tile": true,
        [stringCode]: true,
        'slit-in-vertical': slitIn,
        show,
        appear
    })

    useEffect(() => {
        console.log(stringCode, filteringVideoType)
        if (appear) {
            setSlitIn(true)
            setShow(true)
            setTimeout(() => {
                setSlitIn(false)
                setShow(false)
            }, 500)
        }

    }, [stringCode, filteringVideoType, appear])

    return (
        <NavLink className={`video-link`} to={`/impress/video/${stringCode}`} ref={ref}>
            <div className={`${videoTileClassNames}`}>
                <img className={'play'} src={play} alt='' />
                <div className={`image-wrapper ${stringCode}`}>
                    <img src={image} alt='' />
                </div> 

            </div>
        </NavLink>
    )
}

export default VideoTile