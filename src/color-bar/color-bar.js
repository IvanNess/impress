import React, { useState, useRef } from 'react'

import {isInTheView} from '../utils'

import './color-bar.scss'

const ColorBar = ()=>{

    const ref = useRef(null)

    const [appeared, setAppeared] = useState(false)

    window.addEventListener('scroll', () => {
        if (isInTheView(ref)) {
            setAppeared(true)
        }
    })

    return(
        <div className={`color-bar ${appeared? 'appeared': ''}`} ref={ref}>
            <div className={`bar alert-color`}></div>
            <div className={`bar prime-color`}></div>
            <div className={`bar aux-color`}></div>
            <div className={`bar regular-color`}></div>

            <div className={`bar alert-color`}></div>
            <div className={`bar prime-color`}></div>
            <div className={`bar aux-color`}></div>
            <div className={`bar regular-color`}></div>

            <div className={`bar alert-color`}></div>
            <div className={`bar prime-color`}></div>
            <div className={`bar aux-color`}></div>
            <div className={`bar regular-color`}></div>

            <div className={`bar alert-color`}></div>
            <div className={`bar prime-color`}></div>
            <div className={`bar aux-color`}></div>
            <div className={`bar regular-color`}></div>

            <div className={`bar alert-color`}></div>
            <div className={`bar prime-color`}></div>
            <div className={`bar aux-color`}></div>
            <div className={`bar regular-color`}></div>
        </div>
    )
}

export default ColorBar