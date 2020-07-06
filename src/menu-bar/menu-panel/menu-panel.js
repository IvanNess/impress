import React from 'react'
import classNames from 'classnames'
import {connect} from 'react-redux'

import PanelItem from './panel-item'

import './menu-panel.scss'

const panelItems = [
    {
        content: 'Примеры',
        stringCode: 'examples',
        classNames: ''
    },
    {
        content: 'Услуги',
        stringCode: 'services',
        classNames: ''
    },
    {
        content: 'Контакт',
        stringCode: 'contact',
        classNames: ''
    },
    {
        content: 'Просчет',
        stringCode: 'calc',
        classNames: 'alert'
    },
    {
        content: 'RU',
        stringCode: 'ru',
        classNames: ''
    },
]

const MenuPanel = ({showPanelItems, setShowPanelItems})=>{

    const fullClassnames = classNames({full: true, show: showPanelItems})

    return(
        <div className={`menu-panel`}>
            <div 
                className={`shortcut`}
                onClick={(e)=>{
                    e.stopPropagation()
                    setShowPanelItems(!showPanelItems)
                }}
            >
                <p>MENU</p>
            </div>
            <div className={`${fullClassnames}`}>
                {panelItems.map(panelItem=>(
                    <PanelItem 
                        key={panelItem.content}
                        content={panelItem.content} 
                        classNames={panelItem.classNames}
                        stringCode={panelItem.stringCode}
                    />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    showPanelItems: state.showPanelItems
})

const mapDispatchToProps = {
    setShowPanelItems: (value)=>({type: 'SET_SHOW_PANEL_ITEMS', payload: value})
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuPanel)