import React, {useRef, useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import { useClickAway } from 'ahooks'

import {videos} from '../utils'

import './full-video.scss'

const FullVideo = ({enabled, stringCode})=>{

    const wrapperRef = useRef(null)
    const videoRef = useRef(null)

    const [redirect, setRedirect] = useState(false)

    useClickAway(
        e=>{setRedirect(true)},
        videoRef
    )

    useEffect(()=>{
        if(enabled && wrapperRef.current){
            console.log('fullvideo', enabled, wrapperRef.current, window.pageYOffset)
            wrapperRef.current.style.top = `${window.pageYOffset}px`
            document.body.style.overflow = "hidden"
        }
    }, [wrapperRef])


    if(redirect){
        document.body.style.overflow = 'auto'
        return <Redirect to='/impress'/>
    }

    console.log('isEnabled', enabled, wrapperRef.current)

    const video = videos.find(video=>video.stringCode === stringCode)
    const src = video.src

    return(
        <div className={`full-video-wrapper`} ref={wrapperRef}>
            <div className={`full-video`} ref={videoRef}>
                <iframe src={src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
        </div>
    )
}

export default FullVideo