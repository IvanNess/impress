const updateShowApp = (state, {type, payload})=>{
    if(state===undefined){
        return null
    }

    switch(type){
        case 'SHOW_CALC_APP':
            if(payload && payload.data==='origin')
                return 'origin'
            return true
        case 'OUTSIDE_CALC_APP_CLICKED':
            return false
        default: 
            return state.calc.showApp
    }
}

export default updateShowApp