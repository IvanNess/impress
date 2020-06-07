import React from 'react'

import './panel-item.scss'

const PanelItem = ({ content, classNames }) => {
    return (
        <div className={`panel-item-wrapper`}>
            <div className={`panel-item ${classNames}`}>
                <div className={`${classNames}`}>
                    <p>{content}</p>
                </div>
            </div>
        </div>

    )
}

export default PanelItem