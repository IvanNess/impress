import React from 'react'
import {connect} from 'react-redux'
import {NavLink, Link} from 'react-router-dom'

import './panel-item.scss'

const PanelItem = ({ content, classNames, stringCode, onClick }) => {

    const link = stringCode==='calc'? 'calc': `#${stringCode}`

    return (
        <NavLink 
            to={`/impress/${link}`}
            className={`panel-item-wrapper ${classNames}`} 
            onClick={()=>{
            if(stringCode==='calc'){
                onClick()
            }
        }}>
            <div className={`panel-item ${classNames}`}>
                <div className={`${classNames}`}>
                    <p>{content}</p>
                </div>
            </div>
        </NavLink>

    )
}

const mapStateToProps = ({calc})=>({
    showApp: calc.showApp
})

const mapDispatchToProps = ({
    onClick: ()=>({type: 'SHOW_CALC_APP'})
})

export default connect(mapStateToProps, mapDispatchToProps)(PanelItem)