import React, {useRef, useState, useEffect} from 'react'

//import image from '../../images/all.jpg'
import {isInTheView} from '../../utils'

import './videotype.scss'

const Videotype = ({stringCode, title, description, imageCode})=>{

    const ref = useRef(null)

    const[appear, setAppear] = useState(false)

    useEffect(()=>{
        if (isInTheView(ref)) {
            setAppear(true)
        }
    }, [])

    window.addEventListener('scroll', () => {
        if (isInTheView(ref)) {
            setAppear(true)
        }
    })

    console.log('video-type', document.documentElement.clientHeight, ref.current && ref.current.getBoundingClientRect().y)

    return (
        <div className={`videotype ${stringCode}`}>
            <div className={`image-wrapper ${stringCode} jello ${appear? 'appear': ''}`} ref={ref}>
                {imageCode}
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