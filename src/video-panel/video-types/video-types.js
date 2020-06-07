import React from 'react'
import {connect} from 'react-redux'

import './video-types.scss'

const types = [
    {
        name: 'all',
        content: 'Все' 
    },
    {
        name: 'explainer',
        content: 'Explainer' 
    },    
    {
        name: 'learning',
        content: 'Обучающие' 
    },    
    {
        name: 'advideo',
        content: 'Рекламные' 
    }
]

const VideoTypes = ({setFilteringVideoType, filteringVideoType})=>{
    return(
        <div className={`video-types`}>
            {types.map(type=>{
                return(
                    <div 
                        key={type.name}
                        className={`video-type ${filteringVideoType===type.name? 'filtering': ''}`}
                        onClick={()=>{setFilteringVideoType(type.name)}}
                    >
                        {type.content}
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state=>({
    filteringVideoType: state.filteringVideoType
})

const mapDispatchToProps = ({
    setFilteringVideoType: (type)=>({type: 'SET_FILTERING_VIDEOTYPE', payload: type})
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoTypes)