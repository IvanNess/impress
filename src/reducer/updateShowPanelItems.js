const updateShowPanelItems = (state, {type, payload})=>{

    if(state===undefined){
        return false
    }

    switch(type){
        
        case 'SET_SHOW_PANEL_ITEMS':
            return payload

        default: 
            return state.showPanelItems
    }
}

export default updateShowPanelItems