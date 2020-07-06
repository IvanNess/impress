import {
    getFilteredVideosWithStartVideoIdx,
} from '../utils'

const updateStartVideoIndex = (state, {type, payload})=>{
    if(state===undefined){
        return 6
    }

    switch (type) {
    
        case 'LOAD_MORE_VIDEOS':

            const videos = state.filteringVideoType === 'all' ? state.videos : state.videos.filter(video => video.type.includes(state.filteringVideoType))

            return getFilteredVideosWithStartVideoIdx(videos, state.panelVideosQuantity, state.startVideoIndex).startVideoIndex

        case 'SET_FILTERING_VIDEOTYPE':

            const allFilteredVideos = payload === 'all' ? state.videos : state.videos.filter(video => video.type.includes(payload))

            return getFilteredVideosWithStartVideoIdx(allFilteredVideos, state.panelVideosQuantity, 0).startVideoIndex
        
        default: 
            return state.startVideoIndex
    }
}

export default updateStartVideoIndex