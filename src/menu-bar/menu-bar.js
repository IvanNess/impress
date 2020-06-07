import React from 'react'

import MenuPanel from './menu-panel'
import image from '../images/all.jpg'

import './menu-bar.scss'

const MenuBar = ()=>{
    return(
        <div className={`menu-bar`}>
            <div className={`logo-wrapper`}>
                <img className={`logo`}  src={image} alt='logo'/>
            </div>
            <MenuPanel/>
        </div>
    )
}

export default MenuBar