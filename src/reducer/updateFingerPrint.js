const updateFingerPrint = (state, {type, payload})=>{
    if(state===undefined){
        return null
    }
    switch(type){
        case 'SET_FINGERPRINT':
            return payload.fingerPrint
        default:
            return state.fingerPrint
    }
}

export default updateFingerPrint