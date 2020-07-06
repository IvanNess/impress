import React from 'react'
import {useLocation} from 'react-router-dom'
import {connect} from 'react-redux'

const AppWrapper = ({children, setShowPanelItems, showPanelItems})=>{

    const location = useLocation()

    return (
        <div className={`app-wrapper ${location.pathname=== "/impress/calc"? 'show-calc-app': ''}`} onClick={()=>{
            if(showPanelItems===true)
              setShowPanelItems()
        }}>
            {children}
        </div>
    )
}

const mapStateToProps = (state)=>({
    showPanelItems: state.showPanelItems,
})

const mapDispatchToProps = ({
    setShowPanelItems: ()=>({type: 'SET_SHOW_PANEL_ITEMS', payload: false})
})

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper)