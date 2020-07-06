const updateFilteringVideoType = (state, {type, payload})=>{
    if(state===undefined){
        return 'all'
    }

    switch(type){
        case 'SET_FILTERING_VIDEOTYPE':
            return payload
        
        default:
            return state.filteringVideoType
    }
}

export default updateFilteringVideoType